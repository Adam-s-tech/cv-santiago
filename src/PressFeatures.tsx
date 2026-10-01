interface PressFeaturesProps {
  lang: 'es' | 'en'
  /** hero: centrada bajo el hero · card: alineada a la izquierda dentro de la tarjeta de career-ops */
  variant?: 'hero' | 'card'
  className?: string
}

/**
 * Prensa + programa en una sola línea, calcada de career-ops.org (PR #122, opción D):
 * «FEATURED IN · WIRED · BI | MEMBER OF · Vercel OSS Program».
 *
 * Prensa (cobertura editorial) y el Vercel Open Source Program (apoyo en especie) van en
 * grupos separados con su propia etiqueta, nunca en una sola fila de "featured in". Una
 * línea desde `lg` (necesita ~830 px); por debajo se apila por grupos, etiqueta encima.
 *
 * Color: `.press-logo` (brightness(0), invertido con `.dark`) ata los tres logos al tema de
 * la web. El SVG de Vercel decide su color por color-scheme/prefers-color-scheme y
 * santifer.io fija `color-scheme: dark` en el <meta>: sin el filtro, con el tema claro
 * saldría blanco sobre claro. WIRED primero por preferencia editorial.
 */
export function PressFeatures({ lang, variant = 'hero', className = '' }: PressFeaturesProps) {
  const es = lang === 'es'
  const featured = es ? 'Aparezco en' : 'Featured in'
  const member = es ? 'Miembro de' : 'Member of'
  const hero = variant === 'hero'
  const align = hero ? 'items-center lg:justify-center' : 'items-start lg:items-center lg:justify-start'
  const label = 'text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap'
  const link = 'group inline-flex items-center opacity-55 hover:opacity-100 transition-opacity duration-300'

  return (
    <div className={`${hero ? 'mt-12 lg:mt-16' : ''} flex flex-col lg:flex-row ${align} gap-10 ${className}`}>
      <div className={`flex flex-col lg:flex-row ${hero ? 'items-center' : 'items-start lg:items-center'} gap-5 lg:gap-10`}>
        <p className={label}>{featured}</p>
        <div className="flex flex-row items-center gap-10">
          <a
            href="https://wired.com.gr/article/to-ai-ergaleio-pou-fernei-epanastasi-ston-tropo-pou-psachnoume-douleia/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="WIRED Greece: featured article on career-ops"
            className={link}
          >
            <img src="/press-logos/wired.svg" alt="WIRED Greece" width={110} height={22} className="press-logo h-[22px] w-auto" />
          </a>
          <a
            href="https://www.businessinsider.com/how-i-built-tool-filter-job-listings-landed-head-ai-2026-4"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Business Insider — Featured article on career-ops"
            className={link}
          >
            <img src="/press-logos/business-insider.svg" alt="Business Insider" width={84} height={26} className="press-logo h-[26px] w-auto" />
          </a>
        </div>
      </div>

      <div aria-hidden="true" className="hidden lg:block h-8 w-px bg-border" />

      <div className={`flex flex-col lg:flex-row ${hero ? 'items-center' : 'items-start lg:items-center'} gap-5 lg:gap-10`}>
        <p className={label}>{member}</p>
        <a
          href="https://vercel.com/open-source-program"
          target="_blank"
          rel="noopener sponsored"
          aria-label={es ? 'Miembro del Vercel Open Source Program, cohorte Summer 2026' : 'Member of the Vercel Open Source Program, Summer 2026 cohort'}
          className={link}
        >
          <img src="/press-logos/vercel-oss-2026.svg" alt="Vercel Open Source Software Program 2026" width={240} height={24} className="press-logo h-[24px] w-auto max-w-full" />
        </a>
      </div>
    </div>
  )
}
