/**
 * Post-prerender validation for SEO + GEO invariants.
 *
 * Runs AFTER prerender to validate the static HTML output in dist/.
 * Each warning includes a skill hint so the developer knows which
 * Claude Code skill to invoke for the fix.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/validate-prerender.ts
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { articleRegistry, type ArticleConfig } from '../src/articles/registry.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Severity = 'error' | 'warn'
interface Issue { severity: Severity; msg: string; skill?: string }

// ---------------------------------------------------------------------------
// Per-article HTML checks
// ---------------------------------------------------------------------------

function validatePrerenderHtml(id: string, slug: string, lang: 'es' | 'en'): Issue[] {
  const issues: Issue[] = []
  const htmlPath = resolve(dist, slug, 'index.html')

  if (!existsSync(htmlPath)) {
    issues.push({ severity: 'error', msg: `Prerendered HTML not found: dist/${slug}/index.html` })
    return issues
  }

  const html = readFileSync(htmlPath, 'utf-8')

  // 1. JSON-LD: article schema present
  const jsonLdBlocks = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []
  const articleJsonLd = jsonLdBlocks.find(block =>
    block.includes('"TechArticle"') || block.includes('"Article"') || block.includes('"BlogPosting"')
  )
  if (!articleJsonLd) {
    issues.push({
      severity: 'error',
      msg: `Article JSON-LD missing in prerender. Add seoMeta to registry.`,
      skill: '/seo schema',
    })
  }

  // 2. Meta description length
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)
  if (descMatch) {
    const descLen = descMatch[1].length
    if (descLen > 160) {
      issues.push({
        severity: 'warn',
        msg: `Meta description too long: ${descLen} chars (max 160).`,
        skill: '/seo content',
      })
    }
    if (descLen < 70) {
      issues.push({
        severity: 'warn',
        msg: `Meta description too short: ${descLen} chars (min ~70).`,
        skill: '/seo content',
      })
    }
  } else {
    issues.push({ severity: 'error', msg: 'Meta description not found in prerender' })
  }

  // 3. Title tag length
  const titleMatch = html.match(/<title>([^<]*)<\/title>/)
  if (titleMatch) {
    if (titleMatch[1].length > 70) {
      issues.push({
        severity: 'warn',
        msg: `Title tag: ${titleMatch[1].length} chars (ideal ≤60, truncates ~70).`,
        skill: '/seo page',
      })
    }
  } else {
    issues.push({ severity: 'error', msg: 'Title tag not found' })
  }

  // 4. article:published_time + modified_time
  if (!html.includes('article:published_time')) {
    issues.push({ severity: 'warn', msg: 'article:published_time missing', skill: '/seo page' })
  }
  if (!html.includes('article:modified_time')) {
    issues.push({ severity: 'warn', msg: 'article:modified_time missing', skill: '/seo page' })
  }

  // 5. Canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/)
  if (canonicalMatch) {
    if (!canonicalMatch[1].includes(slug)) {
      issues.push({ severity: 'error', msg: `Canonical doesn't match slug: ${canonicalMatch[1]}`, skill: '/seo technical' })
    }
  } else {
    issues.push({ severity: 'error', msg: 'Canonical tag not found', skill: '/seo technical' })
  }

  // 6. Hreflang
  if (!html.includes('hreflang="en"') || !html.includes('hreflang="es"')) {
    issues.push({ severity: 'warn', msg: 'Hreflang incomplete (need en + es)', skill: '/seo hreflang' })
  }

  // 7. OG image
  if (!html.includes('og:image')) {
    issues.push({ severity: 'error', msg: 'og:image missing', skill: '/seo page' })
  }

  // 8. Images without alt
  const imgTags = html.match(/<img\s[^>]*>/g) || []
  const noAlt = imgTags.filter(tag => !tag.includes('alt='))
  if (noAlt.length > 0) {
    issues.push({ severity: 'warn', msg: `${noAlt.length} image(s) without alt text`, skill: '/seo images' })
  }

  // 8b. Images without width/height (CLS risk)
  const noDimensions = imgTags.filter(tag => {
    // Skip decorative images (role="presentation") and tiny icons
    if (tag.includes('role="presentation"')) return false
    if (tag.includes('aria-hidden="true"')) return false
    return !tag.includes('width=') || !tag.includes('height=')
  })
  if (noDimensions.length > 0) {
    issues.push({
      severity: 'warn',
      msg: `${noDimensions.length} image(s) without width/height (CLS risk)`,
      skill: '/seo images',
    })
  }

  // 9. H1 unique
  const h1s = html.match(/<h1[\s>]/g) || []
  if (h1s.length === 0) {
    issues.push({ severity: 'error', msg: 'No H1 found', skill: '/seo page' })
  } else if (h1s.length > 1) {
    issues.push({ severity: 'warn', msg: `${h1s.length} H1 tags (should be 1)`, skill: '/seo page' })
  }

  // 10. JSON-LD image (for rich results + GEO)
  if (articleJsonLd) {
    if (!articleJsonLd.includes('"image"')) {
      issues.push({ severity: 'warn', msg: 'JSON-LD missing "image" — poor rich results + GEO visibility', skill: '/seo schema' })
    }
  }

  // 11. GEO: JSON-LD image should be hero, not OG
  if (articleJsonLd) {
    const imgInLd = articleJsonLd.match(/"image"\s*:\s*\[\s*"([^"]+)"/)
    if (imgInLd && (imgInLd[1].includes('og-') || imgInLd[1].includes('og_'))) {
      issues.push({
        severity: 'warn',
        msg: `JSON-LD image uses OG card instead of hero. Set heroImage in registry.`,
        skill: '/seo geo',
      })
    }
  }

  // 12. GEO: citability — first 300 chars should have definition or number
  // Check header (H1 + subtitle) AND article body — AI crawlers see all of it
  const headerText = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || '') + ' ' + (html.match(/<header[^>]*>([\s\S]{0,2000})/)?.[1] || '')
  const bodyStart = html.match(/<article[^>]*>([\s\S]{0,1000})/)?.[1] || ''
  const combinedText = (headerText + ' ' + bodyStart).replace(/<[^>]+>/g, '').trim().slice(0, 500)
  if (combinedText.length > 50) {
    const hasDef = /\b(is|means|refers to|es|significa|se refiere)\b/i.test(combinedText)
    const hasNum = /\d/.test(combinedText)
    if (!hasDef && !hasNum) {
      issues.push({
        severity: 'warn',
        msg: 'GEO: first 500 chars (header + body) lack definition and numbers. Low AI citability.',
        skill: '/seo geo',
      })
    }
  }

  // 13. Broken internal links
  const linkMatches = html.match(/<a\s[^>]*href="(\/[^"#]*)"/g) || []
  for (const tag of linkMatches) {
    const hrefMatch = tag.match(/href="(\/[^"#]*)"/)
    if (!hrefMatch) continue
    const href = hrefMatch[1]
    // Skip special paths (API, ops dashboard, SPA-only utility pages)
    if (href.startsWith('/api/') || href.startsWith('/ops') || href === '/privacidad' || href === '/privacy') continue
    // Check if file exists: dist/{path}/index.html or dist/{path}
    const cleanPath = href.replace(/\/$/, '') || ''
    const candidate1 = resolve(dist, cleanPath.slice(1), 'index.html')
    const candidate2 = resolve(dist, cleanPath.slice(1))
    if (!existsSync(candidate1) && !existsSync(candidate2)) {
      issues.push({
        severity: 'warn',
        msg: `Broken internal link: ${href}`,
        skill: '/seo technical',
      })
    }
  }

  // 14. Word count minimum
  const fullStripped = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ')
  const wordCount = fullStripped.split(/\s+/).filter(w => w.length > 0).length
  if (wordCount < 1500) {
    issues.push({
      severity: 'warn',
      msg: `Low word count: ${wordCount} words (min 1500 for articles).`,
      skill: '/seo content',
    })
  }

  // 15. Heading hierarchy — no skipped levels
  const headingMatches = html.match(/<h([1-6])[\s>]/g) || []
  const levels = headingMatches.map(m => parseInt(m.match(/<h([1-6])/)?.[1] || '0'))
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      issues.push({
        severity: 'warn',
        msg: `Heading hierarchy skip: h${levels[i - 1]} -> h${levels[i]} (missing h${levels[i - 1] + 1}).`,
        skill: '/seo page',
      })
      break // one warning is enough
    }
  }

  // 16. OG image format check
  const ogImageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/)
  if (ogImageMatch) {
    const ogUrl = ogImageMatch[1]
    if (!ogUrl || !ogUrl.startsWith('https://')) {
      issues.push({
        severity: 'warn',
        msg: `og:image URL invalid or not HTTPS: "${ogUrl}"`,
        skill: '/seo images',
      })
    }
  }

  return issues
}

// ---------------------------------------------------------------------------
// Registry config checks (catch issues before HTML)
// ---------------------------------------------------------------------------

function validateRegistryConfig(config: ArticleConfig): Issue[] {
  const issues: Issue[] = []

  if (!config.seoMeta) {
    issues.push({ severity: 'error', msg: 'seoMeta missing — no JSON-LD in prerender', skill: '/seo schema' })
    return issues
  }

  if (!config.heroImage) {
    issues.push({ severity: 'warn', msg: 'heroImage missing — JSON-LD uses ogImage. Set heroImage for GEO.', skill: '/seo geo' })
  }

  if (!config.ogImage) {
    issues.push({ severity: 'warn', msg: 'ogImage missing — social cards use default', skill: '/seo page' })
  }

  const meta = config.seoMeta
  if (meta.keywords.length < 5) {
    issues.push({ severity: 'warn', msg: `Only ${meta.keywords.length} keywords (recommend 10+)`, skill: '/seo content' })
  }

  if (meta.about.length === 0) {
    issues.push({ severity: 'warn', msg: 'No "about" entities — weakens JSON-LD', skill: '/seo schema' })
  }

  if (!meta.articleTags || meta.articleTags.split(',').length < 3) {
    issues.push({ severity: 'warn', msg: 'Fewer than 3 article tags', skill: '/seo content' })
  }

  for (const lang of ['es', 'en'] as const) {
    if (!config.seo[lang]?.description) {
      issues.push({ severity: 'error', msg: `SEO description missing [${lang}]`, skill: '/seo content' })
    }
  }

  return issues
}

// ---------------------------------------------------------------------------
// Global file checks
// ---------------------------------------------------------------------------

/**
 * Guard de atrezzo (27-ago-2026): los claims muertos sobreviven dentro de SVG porque
 * ningún barrido de prosa los lee. En un solo día se cazaron 4 casos: `~4 h/week`
 * (violación viva del frame laboral, 5 semanas después de darlo por cerrado),
 * `1.667 assertions`, `60K+` y `59K-star`.
 *
 * Regla adoptada: un asset con texto solo lleva cifras si las regenera el build desde
 * datos vivos. Este guard verifica el TEXTO RENDERIZADO (<text>, <title>), nunca el
 * fichero entero: las coordenadas de path producen cientos de falsos positivos.
 */
function validateAssetClaims(): Issue[] {
  const issues: Issue[] = []
  const svgs: string[] = []
  const walkSvg = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name)
      if (entry.isDirectory()) walkSvg(full)
      else if (entry.name.endsWith('.svg')) svgs.push(full)
    }
  }
  try { walkSvg(dist) } catch { return issues }
  // Assert de que el trabajo se hizo, no solo del resultado: sin SVGs no hay hallazgos,
  // y un guard que no encuentra nada que mirar es indistinguible de uno que lo miró todo.
  if (svgs.length === 0) {
    issues.push({ severity: 'error', msg: 'Guard de atrezzo: 0 SVGs escaneados en dist — el guard no ha comprobado nada', skill: '/seo images' })
    return issues
  }

  // Claims con verdad externa que caducan. Cada patrón nace de un fallo real.
  const banned: Array<{ re: RegExp; what: string }> = [
    { re: /\d+\s*h(ours?|oras?)?\s*\/\s*(week|semana)|\d+\s+h(ours?|oras?)\s+(a|per)\s+(week|semana)|~\d+\s*h\b/i, what: 'claim de dedicación (frame laboral)' },
    { re: /\b(631|680|122)\b/, what: 'cifra prohibida por canon v2' },
    { re: /\b\d{1,3}[.,]?\d{0,3}K\+?\s*(star|estrella)/i, what: 'contador de estrellas (caduca; va en H1 cableado)' },
    { re: /\b[\d.,]{3,}\s*(assertions?|aserciones)/i, what: 'nº de asserts (cambia en cada release)' },
    { re: /\bverified\b/i, what: 'claim de verificación' },
  ]

  for (const file of svgs) {
    const raw = readFileSync(file, 'utf-8')
    // Solo texto renderizado: <text>…</text> y <title>…</title>
    const rendered = [...raw.matchAll(/<(?:text|title)\b[^>]*>([\s\S]*?)<\/(?:text|title)>/g)]
      .map(m => m[1].replace(/<[^>]+>/g, ' '))
      .join(' | ')
    if (!rendered) continue
    for (const { re, what } of banned) {
      const hit = rendered.match(re)
      if (hit) {
        const rel = file.replace(dist + '/', '')
        issues.push({ severity: 'error', msg: `Claim caducable dentro de un asset: ${rel} → "${hit[0]}" (${what})`, skill: '/seo images' })
      }
    }
  }
  return issues
}

/**
 * Guard de grafía de la escala (26-sep-2026). Canon adjudicado por career-ops-maintainer el
 * 1-sep: la ESCALA del Global se nombra 1-5, sin decimales; un score concreto sí lleva
 * decimal. El barrido del 1-sep buscó `1.0–5.0` y dejó vivas 11 ocurrencias en español
 * ("de 1,0 a 5,0", coma decimal y "a") durante 25 días. El patrón cubre punto y coma
 * decimales y los conectores "a", "to", guion y raya. Escanea lo que se publica: HTML
 * prerenderizado (texto y JSON-LD) y llms.txt, más el prompt del chatbot, que no pasa por
 * dist pero responde en vivo a quien pregunta.
 */
function validateCanonGrafia(): Issue[] {
  const issues: Issue[] = []
  const scaleWithDecimals = /\b1[.,]0\s?(?:a|to|[–-])\s?5[.,]0\b/
  const targets: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.html')) targets.push(full)
    }
  }
  try { walk(dist) } catch { /* dist ausente: el assert de abajo lo convierte en error */ }
  // El prompt del modo voz es la otra copia viva del perfil: el 1-oct repetía «Busca roles» aunque
  // el del chatbot de texto ya se había corregido
  for (const extra of [resolve(dist, 'llms.txt'), resolve(__dirname, '../chatbot-prompt.txt'), resolve(__dirname, '../api/voice-token.js')]) {
    if (existsSync(extra)) targets.push(extra)
  }
  if (targets.length === 0) {
    issues.push({ severity: 'error', msg: 'Guard de grafía: 0 ficheros escaneados — el guard no ha comprobado nada', skill: '/seo content' })
    return issues
  }
  // Presente laboral caducado (canon 29-sep-2026): Santiago dejó el puesto de Head of Applied AI
  // a finales de septiembre y se dedica a career-ops a tiempo completo. Estas frases llevaban
  // publicadas en 17 ficheros (flota, /story, case study, bios, llms.txt, JSON-LD). Cada patrón
  // es una frase real que se quitó: si vuelve (un texto viejo reciclado), el build se para.
  const stalePresent: Array<{ re: RegExp; what: string }> = [
    { re: /around my full-time job|I hold a full-time job|I still work full-time|parallel to his full-time work/i, what: 'trabajo a jornada completa en presente' },
    { re: /alrededor de mi trabajo a (?:jornada|tiempo) completo|Sigo trabajando a jornada completa|Mantengo un trabajo a jornada completa/i, what: 'trabajo a jornada completa en presente' },
    { re: /I am now Head of Applied AI|my current role as Head of Applied AI|role I hold today/i, what: 'Head of Applied AI en presente' },
    { re: /ahora soy Head of Applied AI|mi rol actual como Head of Applied AI/i, what: 'Head of Applied AI en presente' },
    { re: /"worksFor"\s*:\s*\{[^}]*Zinkee/, what: 'worksFor declara el empleo anterior como actual' },
  ]
  // Canon de producto (1-oct-2026, aviso de brand-ops el día del anuncio full time): career-ops
  // prepara candidaturas y nunca las envía en nombre del candidato. llms.txt decía «automates the
  // analysis and application phases» y la meta description del case study «automatiza aplicaciones».
  const autoApplyClaims: Array<{ re: RegExp; what: string }> = [
    { re: /\bautomat(?:es|ed|ing|e)\s+(?:the\s+)?(?:analysis\s+and\s+)?applications?\b/i, what: 'afirma que career-ops automatiza las candidaturas' },
    { re: /\bautomatiza\w*\s+(?:el\s+análisis\s+y\s+)?(?:las\s+)?(?:aplicaciones|candidaturas)\b/i, what: 'afirma que career-ops automatiza las candidaturas' },
    { re: /\bnever applies on the candidate's behalf without confirmation\b/i, what: 'insinúa que envía con confirmación' },
    // Hechos contrastados con el core por search-ops (1-oct): el repo es JavaScript (.mjs) y Go,
    // las 5 dimensiones son las de modes/_shared.md, y lo que se puntúa son listings, no offers
    { re: /\bin TypeScript and Go\b|"name"\s*:\s*"career-ops"[^{}]*"programmingLanguage"\s*:\s*\[[^\]]*"TypeScript"/i, what: 'career-ops no tiene TypeScript (JavaScript y Go)' },
    { re: /stack alignment, role seniority/i, what: 'dimensiones de scoring que no son las del core' },
    { re: /\bscor\w*\s+job offers\b/i, what: 'se puntúan job listings; «offer» es solo la oferta final' },
    // Señales de búsqueda de empleo (1-oct, día del anuncio «full time»): la home, llms.txt, el
    // FAQPage del schema y los dos prompts del chatbot seguían ofreciéndolo para roles
    { re: /Ready for what's next|siguiente capítulo|Open to:\**\s*Remote roles|roles busca|roles is Santiago looking|Busca roles senior|Looking for senior remote roles|Available for senior remote roles|disponible para (?:roles )?remoto/i, what: 'señal de búsqueda de empleo; canon: trabaja en career-ops a tiempo completo' },
    { re: /Builder of career-ops/, what: 'canon del 29-sep: Creator of career-ops' },
    // 1-oct, segunda ronda (decidido por Santiago): ni el botón del chat ni el clímax de la home
    // venden su candidatura, y el title deja «Applied AI Operator» (ya fuera del hero el 29-sep)
    { re: /Why hire him|Por qu[ée] contratarle|Bigger teams\. Harder problems|Equipos grandes\. Retos difíciles/i, what: 'señal de búsqueda de empleo; canon: trabaja en career-ops a tiempo completo' },
    { re: /<title>[^<]*Applied AI Operator|Applied AI Operator · (?:Founder · )?Creator of career-ops/, what: 'title/tagline sin «Applied AI Operator» (canon: Creator of career-ops)' },
    // Descripción de la home (1-oct, aviso de search-ops): contaba otra historia bajo el title nuevo,
    // y «16 años llevando IA» es falso (los 16 años son de operar un negocio). «used by thousands»
    // afirmaba usuarios sin fuente (no hay telemetría)
    { re: /<meta (?:name="description"|property="og:description"|name="twitter:description") content="[^"]*Applied AI Operator/, what: 'descripción de la home sin «Applied AI Operator»' },
    { re: /16 (?:years shipping AI|años llevando IA)|used by thousands/i, what: 'afirmación sin respaldo (16 años de negocio, no de IA; sin telemetría de usuarios)' },
  ]
  // Decisión del 29-sep-2026: el ex-empleador se nombra como experiencia pasada con fechas SOLO en
  // la sección de experiencia (home y /about), nunca en prosa. El prompt del chatbot lo cita igual,
  // como experiencia con fechas. llms.txt lo nombraba en la FAQ «What is career-ops?».
  const zinkeeAllowed = new Set(['index.html', 'en/index.html', 'about/index.html', 'sobre-mi/index.html', 'chatbot-prompt.txt'])
  for (const file of targets) {
    // Fuera payloads base64/data: antes de buscar (falsos positivos masivos en diagramas embebidos)
    const text = readFileSync(file, 'utf-8').replace(/data:[^"')\s]+/g, '')
    const rel = file.replace(dist + '/', '').replace(resolve(__dirname, '..') + '/', '')
    for (const { re, what } of autoApplyClaims) {
      const m = text.match(re)
      if (m) issues.push({ severity: 'error', msg: `Canon de producto: ${rel} → "${m[0]}" (${what}; canon de career-ops; ver despachos de brand-ops y search-ops del 1-oct)`, skill: '/seo content' })
    }
    if (!zinkeeAllowed.has(rel) && /zinkee/i.test(text)) {
      const at = text.search(/zinkee/i)
      issues.push({ severity: 'error', msg: `Ex-empleador nombrado fuera de la experiencia: ${rel} → "…${text.slice(Math.max(0, at - 60), at + 20).replace(/\s+/g, ' ')}…" (decisión 29-sep: solo en la experiencia de home y /about)`, skill: '/seo content' })
    }
    const hit = text.match(scaleWithDecimals)
    if (hit) {
      issues.push({ severity: 'error', msg: `Escala del Global con decimales: ${rel} → "${hit[0]}" (canon: la escala se nombra 1-5; un score concreto sí lleva decimal)`, skill: '/seo content' })
    }
    for (const { re, what } of stalePresent) {
      const m = text.match(re)
      if (m) issues.push({ severity: 'error', msg: `Presente laboral caducado: ${rel} → "${m[0]}" (${what}; canon 29-sep: el puesto va en pasado)`, skill: '/seo content' })
    }
  }
  // El chat flotante se carga perezoso y no está en el HTML prerenderizado: sus textos (botones
  // de preguntas rápidas) solo viven en los bundles. Solo canon de producto aquí; el ex-empleador
  // sí aparece legítimamente en los bundles (la experiencia de la home viaja en el i18n).
  const assetsDir = resolve(dist, 'assets')
  const bundles = existsSync(assetsDir) ? readdirSync(assetsDir).filter(f => f.endsWith('.js')) : []
  if (bundles.length === 0) {
    issues.push({ severity: 'error', msg: 'Guard de canon: 0 bundles JS en dist/assets — los textos del chat no se han comprobado', skill: '/seo content' })
  }
  for (const bundle of bundles) {
    const text = readFileSync(resolve(assetsDir, bundle), 'utf-8')
    for (const { re, what } of autoApplyClaims) {
      const m = text.match(re)
      if (m) issues.push({ severity: 'error', msg: `Canon de producto: assets/${bundle} → "${m[0]}" (${what})`, skill: '/seo content' })
    }
  }
  return issues
}

/** Width/height from a JPEG (SOF marker) or PNG (IHDR). null for any other format. */
function imageDims(buf: Buffer): { format: 'jpeg' | 'png'; width: number; height: number } | null {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { format: 'png', width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
  }
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) { i++; continue }
      const marker = buf[i + 1]
      if (marker === 0xff) { i++; continue } // fill byte
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { format: 'jpeg', height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) }
      }
      i += 2 + buf.readUInt16BE(i + 2)
    }
  }
  return null
}

/**
 * Guard de tarjetas de compartir (30-sep-2026). El 29-sep las 8 tarjetas pasaron a JPG porque
 * LinkedIn no previsualiza bien WebP, y aun así 4 de las 22 URLs del sitemap siguieron
 * compartiéndose en WebP: /santifer-irepair heredaba el fallback del prerender (og-image.webp,
 * y sin twitter:image) y el artículo de n8n usaba una captura .webp de 1200×499 que además
 * contradecía el og:image:width/height declarado. El barrido fue por fichero; el fallo vivía en
 * un default y en una entrada que nadie miraba. Este guard lee lo que se publica: cada HTML de
 * dist, sin lista de páginas que pueda quedarse corta.
 */
function validateShareCards(): Issue[] {
  const issues: Issue[] = []
  const pages: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      // Solo páginas: los .html sueltos (diagramas embebidos en iframe) no se comparten
      else if (entry.name === 'index.html' || entry.name === '404.html') pages.push(full)
    }
  }
  try { walk(dist) } catch { /* dist ausente: el assert de abajo lo convierte en error */ }

  let checked = 0
  for (const file of pages) {
    const html = readFileSync(file, 'utf-8')
    const rel = file.replace(dist + '/', '')
    const metaContent = (attr: 'property' | 'name', key: string) =>
      html.match(new RegExp(`<meta\\s+${attr}="${key}"\\s+content="([^"]*)"`))?.[1] ?? null
    const og = metaContent('property', 'og:image')
    if (!og) {
      issues.push({ severity: 'error', msg: `Tarjeta de compartir ausente: ${rel} no declara og:image`, skill: '/og-image' })
      continue
    }
    checked++
    const tw = metaContent('name', 'twitter:image')
    if (tw !== og) {
      issues.push({ severity: 'error', msg: `twitter:image ${tw ? `(${tw}) distinto de` : 'ausente; debe repetir'} og:image (${og}) en ${rel}`, skill: '/seo page' })
    }
    if (!og.startsWith('https://santifer.io/')) {
      issues.push({ severity: 'error', msg: `og:image fuera del dominio en ${rel}: ${og}`, skill: '/seo images' })
      continue
    }
    const localPath = resolve(dist, decodeURIComponent(og.replace('https://santifer.io/', '').split(/[?#]/)[0]))
    if (!existsSync(localPath)) {
      issues.push({ severity: 'error', msg: `og:image apunta a un fichero que no se publica: ${og} (${rel})`, skill: '/og-image' })
      continue
    }
    const dims = imageDims(readFileSync(localPath))
    if (!dims) {
      issues.push({ severity: 'error', msg: `og:image en formato que LinkedIn no previsualiza bien (usar JPG): ${og} (${rel})`, skill: '/og-image' })
      continue
    }
    const declaredW = Number(metaContent('property', 'og:image:width') ?? 1200)
    const declaredH = Number(metaContent('property', 'og:image:height') ?? 630)
    if (dims.width !== declaredW || dims.height !== declaredH) {
      issues.push({ severity: 'error', msg: `og:image mide ${dims.width}×${dims.height} pero ${rel} declara ${declaredW}×${declaredH}: ${og}`, skill: '/og-image' })
    }
  }
  // Assert de que el trabajo se hizo: sin páginas con tarjeta, el guard no ha comprobado nada.
  if (checked === 0) {
    issues.push({ severity: 'error', msg: 'Guard de tarjetas: 0 páginas con og:image escaneadas en dist — el guard no ha comprobado nada', skill: '/og-image' })
  }
  return issues
}

/**
 * Guard de hidratación (30-sep-2026). React #418 tiraba el prerender y repintaba desde cero en 8
 * páginas de producción. Una de las dos causas: validate-articles reescribía dateModified en src/
 * después de `vite build` y antes del prerender, así que servidor y cliente pintaban fechas
 * distintas. (La otra, HTML inválido, se comprueba en prerender.tsx sobre el SSR crudo: aquí en
 * dist/ ya no se ve porque Critters re-parsea el HTML y cierra el <p> por su cuenta.)
 */
function validateHydrationSafety(): Issue[] {
  const issues: Issue[] = []

  // Ninguna fuente puede ser más nueva que el bundle del cliente
  const assetsDir = resolve(dist, 'assets')
  const bundles = existsSync(assetsDir) ? readdirSync(assetsDir).filter(f => f.endsWith('.js')) : []
  if (bundles.length === 0) {
    issues.push({ severity: 'error', msg: 'Guard de hidratación: 0 bundles JS en dist/assets — el guard no ha comprobado nada', skill: '/seo technical' })
  } else {
    const clientBuiltAt = Math.min(...bundles.map(f => statSync(resolve(assetsDir, f)).mtimeMs))
    const stale: string[] = []
    const walkSrc = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = resolve(dir, entry.name)
        if (entry.isDirectory()) walkSrc(full)
        else if (/\.(tsx?|json|css)$/.test(entry.name) && statSync(full).mtimeMs > clientBuiltAt) stale.push(full.replace(root + '/', ''))
      }
    }
    walkSrc(resolve(root, 'src'))
    if (stale.length > 0) {
      issues.push({ severity: 'error', msg: `Fuente modificada después de vite build: ${stale.slice(0, 5).join(', ')}${stale.length > 5 ? '…' : ''}. El prerender la ve y el cliente no → hidratación rota. Todo lo que reescribe src/ va antes de vite build.`, skill: '/seo technical' })
    }
  }
  return issues
}

function validateGlobalFiles(): Issue[] {
  const issues: Issue[] = []

  const robotsPath = resolve(dist, 'robots.txt')
  if (existsSync(robotsPath)) {
    const robots = readFileSync(robotsPath, 'utf-8')
    for (const crawler of ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'OAI-SearchBot']) {
      if (!robots.includes(crawler)) {
        issues.push({ severity: 'warn', msg: `robots.txt missing AI crawler: ${crawler}`, skill: '/seo geo' })
      }
    }
    if (!robots.includes('Sitemap:')) {
      issues.push({ severity: 'warn', msg: 'robots.txt missing Sitemap directive', skill: '/seo technical' })
    }
  } else {
    issues.push({ severity: 'error', msg: 'robots.txt not found' })
  }

  const llmsPath = resolve(dist, 'llms.txt')
  if (existsSync(llmsPath)) {
    const llms = readFileSync(llmsPath, 'utf-8')
    if (llms.includes('56 automated evals') || llms.includes('56 evals')) {
      issues.push({ severity: 'warn', msg: 'llms.txt has stale "56" eval count', skill: '/seo content' })
    }
  } else {
    issues.push({ severity: 'warn', msg: 'llms.txt not found — hurts AI search visibility', skill: '/seo geo' })
  }

  const vercelJsonPath = resolve(root, 'vercel.json')
  if (existsSync(vercelJsonPath)) {
    const vj = readFileSync(vercelJsonPath, 'utf-8')
    for (const h of ['X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
      if (!vj.includes(h)) {
        issues.push({ severity: 'warn', msg: `vercel.json missing header: ${h}`, skill: '/seo technical' })
      }
    }
  }

  // Image size budget — scan dist/ recursively
  // HD images (used as DiagramZoom lightbox) get a higher threshold (500KB warn, 1MB error)
  // Exceptions file lists images allowed to exceed 200KB with justification
  const imageExts = new Set(['.webp', '.png', '.jpg', '.jpeg'])
  const isHdImage = (name: string) => name.includes('-hd.') || name.includes('-hd-') || name.includes('-full.')
  const exceptionsPath = resolve(root, 'scripts', 'image-budget-exceptions.json')
  const imageExceptions = new Set<string>()
  if (existsSync(exceptionsPath)) {
    const data = JSON.parse(readFileSync(exceptionsPath, 'utf-8'))
    for (const e of data.exceptions) imageExceptions.add(e.path)
  }
  function scanImages(dir: string) {
    if (!existsSync(dir)) return
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const fullPath = resolve(dir, entry.name)
      if (entry.isDirectory()) {
        scanImages(fullPath)
      } else {
        const ext = entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase()
        if (imageExts.has(ext)) {
          const size = statSync(fullPath).size
          const sizeKB = Math.round(size / 1024)
          const relPath = fullPath.replace(dist + '/', '')
          if (isHdImage(entry.name)) {
            // HD lightbox images: relaxed thresholds
            if (size > 1024 * 1024) {
              issues.push({ severity: 'error', msg: `HD image too large: ${relPath} (${sizeKB}KB > 1MB)`, skill: '/seo images' })
            }
            // No warn for HD images 200-1MB — they need to be big for zoom
          } else if (imageExceptions.has(relPath)) {
            // Excepted images: only error if >500KB
            if (size > 500 * 1024) {
              issues.push({ severity: 'error', msg: `Excepted image too large: ${relPath} (${sizeKB}KB > 500KB)`, skill: '/seo images' })
            }
          } else {
            // Regular images: strict thresholds
            if (size > 500 * 1024) {
              issues.push({ severity: 'error', msg: `Image too large: ${relPath} (${sizeKB}KB > 500KB)`, skill: '/seo images' })
            } else if (size > 200 * 1024) {
              issues.push({ severity: 'warn', msg: `Image over budget: ${relPath} (${sizeKB}KB > 200KB)`, skill: '/seo images' })
            }
          }
        }
      }
    }
  }
  scanImages(dist)

  // Bundle size budget — check dist/assets/ for JS and CSS
  const assetsDir = resolve(dist, 'assets')
  if (existsSync(assetsDir)) {
    for (const entry of readdirSync(assetsDir)) {
      const fullPath = resolve(assetsDir, entry)
      const stat = statSync(fullPath)
      if (!stat.isFile()) continue
      const sizeKB = Math.round(stat.size / 1024)
      if (entry.endsWith('.js') && stat.size > 500 * 1024) {
        issues.push({ severity: 'warn', msg: `JS bundle over budget: assets/${entry} (${sizeKB}KB > 500KB)`, skill: '/seo technical' })
      }
      if (entry.endsWith('.css') && stat.size > 100 * 1024) {
        issues.push({ severity: 'warn', msg: `CSS bundle over budget: assets/${entry} (${sizeKB}KB > 100KB)`, skill: '/seo technical' })
      }
    }
  }

  return issues
}

// ---------------------------------------------------------------------------
// Helpers for cross-article checks
// ---------------------------------------------------------------------------

function extractMetaDescription(htmlPath: string): string | null {
  if (!existsSync(htmlPath)) return null
  const html = readFileSync(htmlPath, 'utf-8')
  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)
  return match ? match[1] : null
}

function extractWordCount(htmlPath: string): number {
  if (!existsSync(htmlPath)) return 0
  const html = readFileSync(htmlPath, 'utf-8')
  const stripped = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ')
  return stripped.split(/\s+/).filter(w => w.length > 0).length
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log('\n[validate-prerender] Post-prerender SEO + GEO validation\n')

let totalErrors = 0
let totalWarnings = 0

function printIssues(issues: Issue[], label: string) {
  const errors = issues.filter(i => i.severity === 'error').length
  const warnings = issues.filter(i => i.severity === 'warn').length
  totalErrors += errors
  totalWarnings += warnings

  if (issues.length === 0) return

  const icon = errors > 0 ? '\x1b[31m✗\x1b[0m' : '\x1b[33m⚠\x1b[0m'
  console.log(`${icon} ${label} — ${errors} errors, ${warnings} warnings`)
  for (const issue of issues) {
    const prefix = issue.severity === 'error' ? '\x1b[31m  ERR\x1b[0m' : '\x1b[33m  WARN\x1b[0m'
    const hint = issue.skill ? ` → run ${issue.skill}` : ''
    console.log(`${prefix}  ${issue.msg}${hint}`)
  }
}

// Registry checks
for (const article of articleRegistry) {
  if (article.type === 'bridge') continue
  printIssues(validateRegistryConfig(article), `${article.id} [registry]`)
}

// Per-article HTML checks + collect data for cross-article validation
const metaDescriptions: Map<string, string[]> = new Map() // description -> [labels]
const wordCounts: Map<string, { es: number; en: number }> = new Map()

for (const article of articleRegistry) {
  if (article.type === 'bridge') continue
  for (const [lang, slug] of Object.entries(article.slugs) as ['es' | 'en', string][]) {
    const issues = validatePrerenderHtml(article.id, slug, lang)
    if (issues.length > 0) {
      printIssues(issues, `${article.id} [${lang}]`)
    } else {
      console.log(`\x1b[32m✓\x1b[0m ${article.id} [${lang}] — clean`)
    }

    // Collect meta description
    const htmlPath = resolve(dist, slug, 'index.html')
    const desc = extractMetaDescription(htmlPath)
    if (desc) {
      const label = `${article.id} [${lang}]`
      const existing = metaDescriptions.get(desc) || []
      existing.push(label)
      metaDescriptions.set(desc, existing)
    }

    // Collect word count
    const wc = extractWordCount(htmlPath)
    const counts = wordCounts.get(article.id) || { es: 0, en: 0 }
    counts[lang] = wc
    wordCounts.set(article.id, counts)
  }
}

// Cross-article checks
const crossIssues: Issue[] = []

// 17. Duplicate meta descriptions
for (const [desc, labels] of metaDescriptions) {
  if (labels.length > 1) {
    crossIssues.push({
      severity: 'warn',
      msg: `Duplicate meta description across: ${labels.join(', ')} — "${desc.slice(0, 60)}..."`,
      skill: '/seo content',
    })
  }
}

// 18. ES/EN content parity
for (const article of articleRegistry) {
  if (article.type === 'bridge') continue
  const counts = wordCounts.get(article.id)
  if (!counts || counts.es === 0 || counts.en === 0) continue
  const ratio = Math.min(counts.es, counts.en) / Math.max(counts.es, counts.en)
  if (ratio < 0.7) {
    const shorter = counts.es < counts.en ? 'ES' : 'EN'
    crossIssues.push({
      severity: 'warn',
      msg: `${article.id}: ${shorter} version has ${Math.round(ratio * 100)}% of the other's word count (ES: ${counts.es}, EN: ${counts.en}).`,
      skill: '/seo hreflang',
    })
  }
}

if (crossIssues.length > 0) {
  printIssues(crossIssues, 'Cross-article checks')
} else {
  console.log(`\x1b[32m✓\x1b[0m Cross-article checks — clean`)
}

// ---------------------------------------------------------------------------
// Structural checks (sameAs sync, duplicate ogImage, FAQ length, dates, vercel.json)
// ---------------------------------------------------------------------------

function validateStructural(): Issue[] {
  const issues: Issue[] = []

  // S1. Person sameAs count: index.html vs json-ld.ts must match
  const indexHtmlPath = resolve(dist, 'index.html')
  if (existsSync(indexHtmlPath)) {
    const indexHtml = readFileSync(indexHtmlPath, 'utf-8')
    const homeSameAs = indexHtml.match(/"sameAs"\s*:\s*\[([\s\S]*?)\]/)?.[1]
    const homeSameAsCount = homeSameAs ? (homeSameAs.match(/https?:\/\//g) || []).length : 0

    const jsonLdPath = resolve(root, 'src/articles/json-ld.ts')
    if (existsSync(jsonLdPath)) {
      const jsonLdSrc = readFileSync(jsonLdPath, 'utf-8')
      const artSameAs = jsonLdSrc.match(/sameAs:\s*\[([\s\S]*?)\]/)?.[1]
      const artSameAsCount = artSameAs ? (artSameAs.match(/https?:\/\//g) || []).length : 0
      if (homeSameAsCount > 0 && artSameAsCount > 0 && homeSameAsCount !== artSameAsCount) {
        issues.push({
          severity: 'warn',
          msg: `Person sameAs count diverges: index.html has ${homeSameAsCount}, json-ld.ts has ${artSameAsCount}`,
          skill: '/seo schema',
        })
      }
    }
  }

  // S2. No duplicate ogImage across articles
  const ogImages = new Map<string, string[]>()
  for (const article of articleRegistry) {
    // Un puente comparte a propósito la tarjeta del artículo al que lleva
    if (!article.ogImage || article.type === 'bridge') continue
    const labels = ogImages.get(article.ogImage) || []
    labels.push(article.id)
    ogImages.set(article.ogImage, labels)
  }
  for (const [img, ids] of ogImages) {
    if (ids.length > 1) {
      issues.push({
        severity: 'warn',
        msg: `Duplicate ogImage "${img}" used by: ${ids.join(', ')}`,
        skill: '/og-image',
      })
    }
  }

  // S3. FAQ answers >= 100 words
  for (const article of articleRegistry) {
    if (article.type === 'bridge' || !article.seoMeta) continue
    for (const [lang, slug] of Object.entries(article.slugs) as ['es' | 'en', string][]) {
      const htmlPath = resolve(dist, slug, 'index.html')
      if (!existsSync(htmlPath)) continue
      const html = readFileSync(htmlPath, 'utf-8')
      const faqBlock = html.match(/"FAQPage"[\s\S]*?"mainEntity"\s*:\s*\[([\s\S]*?)\]\s*\}/)?.[1]
      if (!faqBlock) continue
      const answers = faqBlock.match(/"text"\s*:\s*"([^"]*)"/g) || []
      for (const ans of answers) {
        const text = ans.replace(/"text"\s*:\s*"/, '').replace(/"$/, '')
        const wordCount = text.split(/\s+/).filter(w => w.length > 0).length
        if (wordCount < 100) {
          issues.push({
            severity: 'warn',
            msg: `${article.id} [${lang}] FAQ answer too short: ${wordCount} words (min 100 for AI citation)`,
            skill: '/seo content',
          })
          break // one warning per lang is enough
        }
      }
    }
  }

  // S4. Home dateModified format — ISO 8601 (YYYY-MM-DD or YYYY-MM-DDThh:mm:ss±hh:mm)
  if (existsSync(indexHtmlPath)) {
    const indexHtml = readFileSync(indexHtmlPath, 'utf-8')
    const dateModMatch = indexHtml.match(/"dateModified"\s*:\s*"([^"]*)"/)
    if (dateModMatch) {
      const dateVal = dateModMatch[1]
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(dateVal)
      const isValidDateTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(dateVal)
      if (!isValidDate && !isValidDateTime) {
        issues.push({
          severity: 'error',
          msg: `Home dateModified not valid ISO 8601: "${dateVal}"`,
          skill: '/seo schema',
        })
      }
    }
  }

  // S5. Trailing slash redirect exists in vercel.json
  const vercelJsonPath = resolve(root, 'vercel.json')
  if (existsSync(vercelJsonPath)) {
    const vj = readFileSync(vercelJsonPath, 'utf-8')
    if (!vj.includes('/:path+/')) {
      issues.push({
        severity: 'warn',
        msg: 'vercel.json missing generic trailing slash redirect (/:path+/ → /:path+)',
        skill: '/seo technical',
      })
    }

    // S6. All registry slugs have vercel.json rewrites
    const vjData = JSON.parse(vj)
    const rewriteSources = new Set((vjData.rewrites || []).map((r: { source: string }) => r.source))
    for (const article of articleRegistry) {
      for (const [lang, slug] of Object.entries(article.slugs) as ['es' | 'en', string][]) {
        if (!rewriteSources.has(`/${slug}`)) {
          issues.push({
            severity: 'warn',
            msg: `Registry slug "/${slug}" (${article.id} [${lang}]) missing rewrite in vercel.json`,
            skill: '/seo technical',
          })
        }
      }
    }
  }

  return issues
}

const structuralIssues = validateStructural()
if (structuralIssues.length > 0) {
  printIssues(structuralIssues, 'Structural checks')
} else {
  console.log(`\x1b[32m✓\x1b[0m Structural checks — clean`)
}

// Global checks
const globalIssues = [...validateGlobalFiles(), ...validateAssetClaims(), ...validateCanonGrafia(), ...validateShareCards(), ...validateHydrationSafety()]
if (globalIssues.length > 0) {
  printIssues(globalIssues, 'Global files')
} else {
  console.log(`\n\x1b[32m✓\x1b[0m Global files — clean`)
}

console.log(`\nPages: ${articleRegistry.filter(a => a.type !== 'bridge').length * 2} | Errors: ${totalErrors} | Warnings: ${totalWarnings}\n`)

if (totalErrors > 0) {
  console.error('\x1b[31m✗ Prerender validation failed. Fix errors before deploying.\x1b[0m\n')
  process.exit(1)
}

console.log('\x1b[32m✓ Prerender validation passed.\x1b[0m\n')
