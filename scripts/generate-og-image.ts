/**
 * Generates the home OG image (public/og-image.webp, 1200x630) from scripts/og-template.html,
 * injecting the current career-ops GitHub star count rounded to "XXK+".
 *
 * - Renders the HTML with Playwright (Chromium) → PNG → webp via cwebp. Replicates the hero
 *   design tokens 1:1 (no AI-generated art).
 * - Idempotent: only regenerates when the rounded "K" value changes (tracked in og-image.state.json),
 *   so it doesn't churn the binary on every build.
 * - Graceful skip when Chromium isn't available (e.g. Vercel CI) — the committed webp is served as-is.
 *
 * Runs in the build pipeline AFTER update-github-stats.ts. Usage: npx tsx scripts/generate-og-image.ts
 */

import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const TEMPLATE = join(__dirname, 'og-template.html')
const OUT_WEBP = join(ROOT, 'public', 'og-image.webp')
// JPG para og:image/twitter:image: LinkedIn no previsualiza bien WebP (search-ops, 29-sep). El WebP se
// sigue generando para que no den 404 los enlaces ya compartidos con la URL antigua.
const OUT_JPG = join(ROOT, 'public', 'og-image.jpg')
const STATE = join(__dirname, 'og-image.state.json')

function roundStarsK(n: number): string {
  // 56700 -> "56K+", 55990 -> "55K+" (floor to whole K so the claim is never inflated)
  return `${Math.floor(n / 1000)}K+`
}

async function fetchStars(owner: string, repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'User-Agent': 'santifer-build/1.0',
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
    })
    if (!res.ok) {
      console.warn(`  ⚠ GitHub API ${res.status} for ${owner}/${repo}`)
      return null
    }
    const data = await res.json()
    return data.stargazers_count ?? null
  } catch (err) {
    console.warn(`  ⚠ GitHub fetch failed:`, (err as Error).message)
    return null
  }
}

function readState(): { starsK?: string } {
  try {
    return JSON.parse(readFileSync(STATE, 'utf-8'))
  } catch {
    return {}
  }
}

async function main() {
  console.log('🖼  Generating OG image...\n')

  const stars = await fetchStars('santifer', 'career-ops')
  if (stars == null) {
    console.log('  ⏭ Could not read stars — leaving existing og-image.webp untouched')
    return
  }
  const starsK = roundStarsK(stars)

  // Idempotent: skip if the rounded value hasn't changed and the image already exists.
  const prev = readState().starsK
  if (prev === starsK && existsSync(OUT_WEBP) && existsSync(OUT_JPG)) {
    console.log(`  ⏭ No change (${starsK}) — og-image.webp is current`)
    return
  }

  // Resolve template with runtime file:// asset paths + the current star count.
  const fontSG = 'file://' + join(ROOT, 'public', 'fonts', 'space-grotesk-latin.woff2')
  const fontDM = 'file://' + join(ROOT, 'public', 'fonts', 'dm-sans-latin.woff2')
  const avatar = 'file://' + join(ROOT, 'public', 'foto-avatar.png')
  const html = readFileSync(TEMPLATE, 'utf-8')
    .replaceAll('__FONT_SG__', fontSG)
    .replaceAll('__FONT_DM__', fontDM)
    .replaceAll('__AVATAR__', avatar)
    .replaceAll('__STARS__', starsK)

  const tmpHtml = join(tmpdir(), `og-render-${Date.now()}.html`)
  const tmpPng = join(tmpdir(), `og-render-${Date.now()}.png`)
  writeFileSync(tmpHtml, html, 'utf-8')

  // Render with Playwright. Graceful skip if Chromium isn't installed (e.g. CI).
  let chromium: typeof import('playwright').chromium
  try {
    ;({ chromium } = await import('playwright'))
  } catch {
    console.log('  ⏭ Playwright not available — skipping (committed webp will be served)')
    rmSync(tmpHtml, { force: true })
    return
  }

  let browser
  try {
    browser = await chromium.launch()
  } catch (err) {
    console.log(`  ⏭ Chromium unavailable (${(err as Error).message.split('\n')[0]}) — skipping; committed webp served as-is`)
    rmSync(tmpHtml, { force: true })
    return
  }

  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
    await page.goto('file://' + tmpHtml, { waitUntil: 'networkidle' })
    await page.evaluate(() => (document as any).fonts.ready)
    await page.screenshot({ path: tmpPng, type: 'png' })
    await page.screenshot({ path: OUT_JPG, type: 'jpeg', quality: 88 })
    await browser.close()
  } catch (err) {
    await browser.close().catch(() => {})
    rmSync(tmpHtml, { force: true })
    throw err
  }

  // PNG -> webp via cwebp (libwebp). Falls back to leaving PNG note if cwebp missing.
  try {
    execFileSync('cwebp', ['-q', '86', tmpPng, '-o', OUT_WEBP], { stdio: 'pipe' })
  } catch (err) {
    console.warn(`  ⚠ cwebp failed (${(err as Error).message.split('\n')[0]}); install libwebp (brew install webp)`)
    rmSync(tmpHtml, { force: true })
    rmSync(tmpPng, { force: true })
    process.exitCode = 1
    return
  }

  writeFileSync(STATE, JSON.stringify({ starsK, stars, updated: new Date().toISOString() }, null, 2) + '\n')
  rmSync(tmpHtml, { force: true })
  rmSync(tmpPng, { force: true })
  console.log(`  ✓ og-image.webp regenerated (${prev ?? 'none'} → ${starsK})`)
}

main()
