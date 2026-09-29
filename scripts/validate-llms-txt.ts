/**
 * Build-time validation: checks that llms.txt stays in sync with i18n.ts content.
 *
 * Defines "proof points" — key terms/phrases that MUST appear in llms.txt
 * because they represent real content from the website. When i18n.ts adds
 * new sections or projects, add matching proof points here so the check
 * catches the drift on next build.
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/validate-llms-txt.ts
 */

import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// ---------------------------------------------------------------------------
// Proof points: key terms that MUST appear in llms.txt
// Grouped by source section for readable error messages.
// ---------------------------------------------------------------------------

interface ProofPoint {
  /** Where this content lives in the codebase */
  source: string
  /** Terms that must ALL appear in llms.txt (case-insensitive) */
  terms: string[]
}

const PROOF_POINTS: ProofPoint[] = [
  // -- Projects (i18n.ts → projects) --
  {
    source: 'i18n.ts → projects → AI Solutions Playbook',
    terms: ['AI Solutions Playbook', 'context switching', 'SESSION_BRIEF'],
  },
  {
    source: 'i18n.ts → projects → Content Digest',
    terms: ['Content Digest'],
  },
  {
    source: 'i18n.ts → projects → Life OS',
    terms: ['Life OS'],
  },
  {
    source: 'i18n.ts → projects → career-ops',
    terms: ['career-ops'],
  },
  {
    source: 'i18n.ts → projects → Claude Pulse',
    terms: ['Claude Pulse'],
  },
  {
    source: 'i18n.ts → projects → Claude Eye',
    terms: ['Claude Eye'],
  },
  {
    source: 'i18n.ts → projects → Claudeable',
    terms: ['Claudeable'],
  },
  {
    source: 'i18n.ts → projects → ProjectOS Predict',
    terms: ['ProjectOS Predict'],
  },

  // -- Claude Code Power User (i18n.ts → claudeCode) --
  {
    source: 'i18n.ts → claudeCode',
    terms: ['multi-agent', 'IPC', 'memory persistence', 'custom', 'skills'],
  },

  // -- Speaking & Teaching (i18n.ts → speaking) --
  {
    source: 'i18n.ts → speaking → AI Fluency Educator',
    terms: ['AI Fluency Educator', '4D', 'Delegation', 'Discernment'],
  },
  {
    source: 'i18n.ts → speaking → Teaching Fellow',
    terms: ['Teaching Fellow'],
  },
  {
    source: 'i18n.ts → speaking → Hiperautomatiza',
    terms: ['Hiperautomatiza'],
  },

  // -- Self-Healing Chatbot (chatbot-i18n.ts) --
  {
    source: 'chatbot-i18n.ts → defense',
    terms: ['6-layer', 'canary token', 'fingerprint'],
  },
  {
    source: 'chatbot-i18n.ts → evals',
    terms: ['71', 'CI gate', 'trace-to-eval'],
  },
  {
    source: 'chatbot-i18n.ts → cost',
    terms: ['$0.005', '$0 infrastructure'],
  },
  {
    source: 'chatbot-i18n.ts → batch eval',
    terms: ['Sonnet', 'intent', 'quality', 'safety', 'jailbreak', 'Resend'],
  },

  // -- Articles published (registry.ts) --
  {
    source: 'articles/registry.ts',
    terms: ['n8n for Product Managers', 'Jacobo', 'Programmatic'],
  },

  // -- Key experience points --
  {
    source: 'i18n.ts → experience → Jacobo',
    terms: ['Jacobo', '90%', 'self-service'],
  },
  {
    source: 'i18n.ts → experience → pSEO',
    terms: ['Programmatic', 'Airtable', 'DataForSEO'],
  },
]

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const llmsTxtPath = resolve(root, 'public/llms.txt')
let llmsTxt: string

try {
  llmsTxt = readFileSync(llmsTxtPath, 'utf-8').toLowerCase()
} catch {
  console.error(`\n❌ public/llms.txt not found\n`)
  process.exit(1)
}

let errors = 0

for (const pp of PROOF_POINTS) {
  const missing = pp.terms.filter(t => !llmsTxt.includes(t.toLowerCase()))
  if (missing.length > 0) {
    errors++
    console.error(
      `❌ llms.txt missing content from [${pp.source}]:\n` +
      `   Missing terms: ${missing.map(t => `"${t}"`).join(', ')}\n`
    )
  }
}

if (errors > 0) {
  console.error(
    `\n🔴 llms.txt is out of sync — ${errors} section(s) have missing content.\n` +
    `   Update public/llms.txt to include the missing information,\n` +
    `   or add the proof point to scripts/validate-llms-txt.ts if intentionally omitted.\n`
  )
  process.exit(1)
} else {
  console.log('✅ llms.txt is in sync with i18n content')
}
