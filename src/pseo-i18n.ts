export const pseoContent = {
  es: {
    slug: 'seo-programatico',
    altSlug: 'programmatic-seo',
    readingTime: '37 min de lectura',
    seo: {
      title: 'SEO Programático: 4.000+ Páginas desde un ERP | santifer.io',
      description: 'Case study: cómo generé 4.730 landing pages estáticas con Airtable, DataForSEO y crawl budget optimization. 2M+ impresiones, 19K+ clicks.',
    },
    nav: {
      breadcrumbHome: 'Inicio',
      breadcrumbCurrent: 'SEO Programático',
    },
    header: {
      kicker: 'Case Study — <a>Santifer iRepair</a>',
      kickerLink: 'https://santiferirepair.es',
      h1: 'SEO Programático: 4.700+ Páginas desde un ERP',
      subtitle: 'Cómo generé 4.730 landing pages únicas con datos reales de producción, un CMS de 14 tablas en Airtable, y DataForSEO como motor de decisiones. 2,26M impresiones, 19K+ clicks.',
      date: '25 feb 2026',
    },
    intro: {
      hook: 'SEO programático es generar miles de páginas automáticamente desde una base de datos, cada una optimizada para una búsqueda long-tail específica. Construí 4.730 landing pages desde un ERP en Airtable. En el sector de reparación de dispositivos en España, nadie más lo estaba haciendo.',
      body: 'La idea era simple: si alguien busca "reparar iPhone batería Sevilla", debería existir una página específica para esa búsqueda, con el precio real, el tiempo estimado y fotos de reparaciones reales. Pero crear esas páginas a mano para miles de combinaciones no era viable. Necesitaba un sistema que generase las páginas automáticamente desde el ERP, y que fuera lo suficientemente inteligente para decidir cuáles indexar y cuáles no.',
      context: 'Santifer iRepair fue mi negocio de reparación de dispositivos en Sevilla desde 2009. 16 años, más de 30.000 reparaciones. En 2024 decidí que la web del negocio necesitaba dejar de ser un folleto en Squarespace y empezar a capturar la demanda que ya existía en Google. Construí este sistema de SEO programático como ventaja competitiva y vendí el negocio en septiembre 2025, en su punto más alto.',
      tldr: {
        heading: 'En 10 segundos',
        items: [
          'Construí 4.730 landing pages estáticas desde un ERP de producción (precios, fotos, reseñas reales)',
          'Motor de decisiones con DataForSEO: solo se indexan las páginas con volumen de búsqueda real',
          'Resultado: 2,26M impresiones, 19K+ clicks orgánicos, 80% del tráfico del sitio',
          '7 meses de desarrollo, una persona, vendido en su punto más alto',
        ],
      },
    },
    sections: {
      migration: {
        heading: 'El Punto de Partida',
        intro: 'La web del negocio llevaba años en Squarespace. Sin control de URLs, sin canonical tags, sin redirects custom. Lo que venía no era solo un cambio de plataforma — era una triple migración: plataforma (Squarespace → Astro), dominio (santifer.me → santiferirepair.es) y hosting (Squarespace → Vercel/Cloudflare). El primer paso fue documentar exactamente qué había que arreglar: una auditoría técnica completa de 144 páginas, realizada como Trabajo Fin de Máster del programa Big SEO.',
        duplicateCallout: 'Squarespace servía la misma página en 4 URLs diferentes (www, non-www, trailing slash, .html). Google veía 4 copias de cada página.',
        audit: {
          heading: 'La Auditoría Técnica',
          prose: 'El primer paso fue una auditoría técnica completa, realizada como Trabajo Fin de Máster del programa Big SEO. 144 páginas documentando cada aspecto técnico de la web: desde la situación del tráfico hasta la última meta description.',
          baseline: [
            { value: '23,1', label: 'Posición media' },
            { value: '↓ Declive', label: 'Visibilidad SISTRIX' },
            { value: '21/100', label: 'Lighthouse (móvil)' },
            { value: '33/40', label: 'Items con errores' },
          ],
          findings: [
            { title: '838 H1s duplicados', detail: 'El template de Squarespace inyectaba un H1 oculto en cada página, duplicando el encabezado principal. Google veía dos títulos compitiendo por relevancia.' },
            { title: '1.015 canibalizaciones', detail: 'Páginas compitiendo entre sí por las mismas keywords. Home, categorías y modelos se pisaban mutuamente en los resultados de búsqueda.' },
            { title: '869 errores en datos estructurados', detail: 'El LocalBusiness schema no seguía las recomendaciones de schema.org. Google no podía interpretar correctamente la información del negocio.' },
            { title: '831 páginas no canónicas', detail: 'Squarespace servía 4 URLs por página sin redirigir a la canónica. GSC las reportaba como duplicadas sin canonical.' },
          ],
          callout: '33 de 40 aspectos técnicos auditados tenían errores. Solo 7 pasaban. La auditoría no solo diagnosticó los problemas — se convirtió en el roadmap de todo el proyecto.',
        },
        technicalDebt: {
          heading: 'Los Problemas Técnicos',
          items: [
            { title: 'Sin canonical tags', detail: 'www vs non-www, con/sin trailing slash, con/sin .html. Misma página, 4 URLs. 831 páginas no canónicas en GSC. Squarespace indicaba canonical pero no redirigía.' },
            { title: 'Sin redirects custom', detail: 'Squarespace no permite crear redirecciones 301 personalizadas. 266 URLs históricas dando 404 en GSC. Imposible mapear URLs antiguas a la nueva estructura.' },
            { title: 'Sin control de slugs de URL', detail: 'La taxonomía del negocio ya existía, pero Squarespace generaba URLs redundantes como /reparar-iphone/reparar-iphone-x. 15 URLs de más de 115 caracteres, 10 con mayúsculas, keyword repetida 3 veces.' },
            { title: 'Riesgo de contenido duplicado', detail: '1.015 canibalizaciones detectadas. 79 páginas con thin content. Las variantes de URL sin canonical generaban señales confusas para Google, diluyendo la autoridad del dominio.' },
          ],
        },
        migrationSteps: {
          heading: 'La Migración',
          steps: [
            { label: 'Crawl completo con Screaming Frog', detail: 'El crawl identificó 838 páginas con H1s múltiples, 266 URLs 404, y 1.015 canibalizaciones. El mapeo resultó en 1.009 reglas de redirección.' },
            { label: 'Nueva estructura de URLs en Astro', detail: 'De ~80 páginas a una arquitectura de 480+ páginas optimizadas para 156.000 búsquedas mensuales transaccionales. URLs limpias: /reparar-{dispositivo}/, /reparar-{marca}/{modelo}/.' },
            { label: '301 redirects en vercel.json', detail: 'Proyecto dedicado (servidor-redirecciones) desplegado en Vercel solo para servir 301s. 190KB de configuración en un solo archivo.' },
            { label: 'Redirects inteligentes por intención', detail: 'Redirigir páginas nacionales a versiones locales. Ejemplo: /reparar-movil/reparar-samsung → /reparar-movil/samsung/sevilla.' },
          ],
        },
        redirectServer: {
          heading: 'El Servidor de Redirecciones',
          prose: 'La triple migración (plataforma, dominio, hosting) requería un plan para no perder la autoridad acumulada en el dominio antiguo. La solución fue un proyecto dedicado en Vercel cuya única función era servir redirecciones 301. Un gotcha del cambio de dominio: Squarespace no permitía redirigir la homepage, lo que bloqueaba el GSC change of address. El doble salto HTTP→308→301 impedía la validación. Se resolvió en una tarde con Vercel Redirect Domain + Cloudflare Redirect Rules para un único 301 directo.',
          metrics: [
            { value: '1.009', label: 'Reglas de redirección' },
            { value: '190 KB', label: 'vercel.json' },
            { value: '4', label: 'Niveles de redirect' },
            { value: '46', label: 'Commits en 7 meses' },
          ],
          tiers: [
            { title: 'Modelo → modelo', detail: '/reparar-movil/reparar-samsung/reparar-samsung-galaxy-a12 → /reparar-movil/samsung/galaxy-a12. URL limpia, misma intención.' },
            { title: 'Marca → marca + ciudad', detail: '/reparar-movil/reparar-realme → /reparar-movil/realme/sevilla. La nueva estructura añadía la ciudad como señal local.' },
            { title: 'Wildcard + catch-all', detail: 'Cualquier URL no mapeada en los tiers anteriores redirige a la homepage. Zero 404s para el usuario y para Google.' },
          ],
          callout: 'Un proyecto entero de Vercel cuya única función era redirigir. 1.009 reglas mapeadas a mano porque la estructura de URLs de Squarespace no seguía un patrón uniforme.',
        },
        orderCallout: 'Implementa las redirecciones antes de solicitar el cambio en Google Search Console. No después. El orden importa.',
        migrationCost: {
          heading: 'El Coste de Migrar',
          body: 'Toda migración tiene un coste de transición. 800+ páginas tardaron en reindexarse y keywords clave cayeron temporalmente — "reparar iphone sevilla" pasó del top 2 al puesto 6. Era esperable: Google necesita tiempo para reevaluar un dominio tras un cambio de dirección. La recuperación llegó.',
          lighthouse: [
            { value: '100', label: 'Performance' },
            { value: '92', label: 'Accessibility' },
            { value: '96', label: 'Best Practices' },
            { value: '100', label: 'SEO' },
          ],
          closing: 'De un Lighthouse de 21 en Squarespace a 100 en Astro. De DA 8 a competir en un mercado donde los líderes tienen 100x más tráfico. La auditoría técnica documentó 33 problemas; la migración los resolvió todos de una vez.',
        },
      },
      theNumbers: {
        heading: 'Los Números',
        metrics: [
          { value: '2,26M', label: 'Impresiones', detail: 'Total acumulado (medido en Google Search Console)' },
          { value: '19K+', label: 'Clicks orgánicos', detail: 'Tráfico real desde búsqueda orgánica (medido en Google Search Console)' },
          { value: '4.730', label: 'Páginas con tráfico', detail: 'De miles generadas, 4.084 indexables en sitemap, 4.730 recibieron impresiones' },
          { value: '10,8x', label: 'Crecimiento', detail: 'De 202 a 2.193 clicks/mes en 11 meses' },
          { value: '80%', label: 'Clicks desde pSEO', detail: 'El tráfico orgánico del sitio viene de páginas programáticas' },
          { value: '7', label: 'Meses', detail: '1 persona. CMS, pipelines, DataForSEO, 26K imágenes y deploy' },
        ],
        timeline: 'Desarrollo: marzo → octubre 2024 (7 meses). Una persona. CMS, scripts de generación, pipeline de imágenes, integración con DataForSEO y deploy — todo en paralelo. Lanzamiento en producción en octubre 2024. Si lo construyera hoy con Claude Code, tardaría una semana.',
      },
      opportunity: {
        heading: 'La Oportunidad',
        body: 'El mercado de reparación de dispositivos en España es altamente local. Los usuarios buscan servicios por ciudad, marca y tipo de reparación. Pero la mayoría de negocios del sector tenían webs genéricas: una landing para toda España, si es que tenían web.',
        points: [
          'Miles de combinaciones long-tail sin competencia real en SERPs',
          'Intención de búsqueda transaccional clara: el usuario quiere reparar, no informarse',
          'Ningún competidor en el sector estaba usando SEO programático en España (2024)',
          'El ERP ya tenía todos los datos necesarios: 867 modelos, precios, tiempos, fotos reales',
          'La taxonomía natural del negocio (dispositivo, marca, modelo, reparación, ciudad) se mapea directamente a URLs',
        ],
        queryExamples: [
          { query: 'reparacion moviles sevilla', clicks: 42, impressions: 1947, ctr: '2,2%', position: '2,5' },
          { query: 'reparar iphone sevilla', clicks: 51, impressions: 3314, ctr: '1,5%', position: '12,9' },
          { query: 'reparacion iphone sevilla', clicks: 46, impressions: 4315, ctr: '1,1%', position: '5,2' },
          { query: 'cambiar bateria pixel 6a', clicks: 51, impressions: 755, ctr: '6,8%', position: '6,4' },
          { query: 'servicio técnico garmin sevilla', clicks: 36, impressions: 534, ctr: '6,7%', position: '6,5' },
          { query: 'cambiar bateria apple watch', clicks: 37, impressions: 3967, ctr: '0,9%', position: '11,7' },
        ],
      },
      twoTypes: {
        heading: 'Dos Estrategias, Un Sistema',
        body: 'El proyecto empezó con ambición nacional, pero Google tiene criterio propio. Las búsquedas de reparación tienen intención local muy fuerte. Google prioriza resultados con proximidad geográfica, así que las páginas nacionales sin ciudad competían peor. La solución: una estrategia dual. Páginas locales para Sevilla (donde está la tienda física) y páginas nacionales de nicho para reparaciones específicas donde la localización importa menos.',
        local: {
          title: 'Páginas Locales (Sevilla)',
          description: 'Combinaciones de dispositivo + marca + reparación con "/sevilla". Google las prioriza por proximidad al negocio físico. Son las que más tráfico generan.',
          examples: [
            { url: '/reparar-smartwatch/sevilla', clicks: 615, ctr: '3,7%' },
            { url: '/reparar-iphone/bateria/sevilla', clicks: 581, ctr: '2,5%' },
            { url: '/reparar-apple-watch/sevilla', clicks: 562, ctr: '2,7%' },
            { url: '/reparar-iphone/sevilla', clicks: 466, ctr: '0,6%' },
            { url: '/reparar-ipad/sevilla', clicks: 370, ctr: '1,2%' },
          ],
        },
        national: {
          title: 'Páginas Nacionales (sin ciudad)',
          description: 'Reparaciones de nicho donde la localización importa menos. El formato "cambiar-{pieza}-{marca}-{modelo}" captura búsquedas informacionales que terminan en conversión.',
          examples: [
            { url: '/cambiar-bateria-google-pixel-6a', clicks: 372, ctr: '5,0%' },
          ],
        },
      },
      architecture: {
        heading: 'La Arquitectura',
        body: 'El sistema tiene cuatro capas. Airtable funciona como CMS headless con 14 tablas y ~60 campos por tabla. El ERP alimenta los datos reales de producción. DataForSEO decide qué se indexa. Astro genera HTML estático con mínimo JavaScript en el cliente — solo lo imprescindible para UX (buscador, carrusel), cargado de forma lazy.',
        layers: [
          {
            icon: 'database',
            name: 'Airtable (CMS Headless)',
            desc: '14 tablas, ~60 campos por tabla. Jerarquía de 6 niveles: Tipo de dispositivo, Marca, Familia, Modelo, Reparación + variantes locales. Precios duales (original y compatible), herencia de imágenes, social proof en cascada.',
          },
          {
            icon: 'wrench',
            name: 'ERP (Datos de Producción)',
            desc: 'Alimenta Airtable con datos reales: fotos de antes/después de reparaciones reales, reseñas verificadas de clientes, stock de piezas actualizado. 867 modelos, 20+ marcas, 15+ tipos de reparación.',
          },
          {
            icon: 'bar-chart',
            name: 'DataForSEO (Motor de Decisiones)',
            desc: 'Consulta volúmenes de búsqueda reales para cada combinación. El campo "indexable" en Airtable se alimenta directamente de estos datos. Sin volumen, la página no se indexa.',
          },
          {
            icon: 'zap',
            name: 'Astro (Generación Estática)',
            desc: '21 templates de página. Genera HTML estático con JS mínimo lazy-loaded. 6 tipos de JSON-LD por página. SEO de imágenes con inyección EXIF. Deploy en Cloudflare CDN.',
          },
        ],
      },
      cmsDeepDive: {
        heading: 'El CMS por Dentro',
        body: 'Airtable no es solo una hoja de cálculo con esteroides. En este proyecto funciona como un CMS relacional completo. La clave es la jerarquía de 6 niveles que refleja exactamente cómo funciona el negocio.',
        tables: [
          { name: 'Tipos de Dispositivo', purpose: 'Nivel raíz de la taxonomía', keyFields: 'slug, nombre, descripción SEO, orden de menú' },
          { name: 'Marcas', purpose: 'Marcas vinculadas a tipos de dispositivo', keyFields: 'slug, nombre, logo, tipos compatibles' },
          { name: 'Familias', purpose: 'Agrupación de modelos (ej: iPhone 14 serie)', keyFields: 'slug, imagen principal (heredable), marca' },
          { name: 'Modelos', purpose: 'Dispositivos concretos con precios', keyFields: 'slug, familia, imagen (hereda de familia si no tiene), año' },
          { name: 'Reparaciones', purpose: 'Tipos de reparación por modelo', keyFields: 'slug, precio original, precio compatible, tiempo, indexable' },
          { name: 'Variantes Locales', purpose: 'Páginas con ciudad para SEO local', keyFields: 'modelo + reparación + ciudad, precio ajustado, disponibilidad' },
        ],
        highlights: [
          { title: 'Precios duales', detail: 'Cada reparación tiene precio con pieza original y precio con pieza compatible. El usuario elige en la landing.' },
          { title: 'Herencia de imágenes', detail: 'Si un modelo no tiene imagen propia, hereda la de su familia. Reduce trabajo de mantenimiento sin dejar páginas sin visual.' },
          { title: 'Social proof en cascada', detail: 'Las reseñas se vinculan a nivel de modelo, familia o marca. Una reseña de "iPhone 14 Pro" aparece en todas las reparaciones de ese modelo.' },
          { title: 'Bridge mode', detail: 'Reparaciones descatalogadas no se eliminan: se marcan como "bridge" y redirigen a la alternativa más cercana. Cero 404s, cero pérdida de autoridad.' },
        ],
        businessOsCallout: 'Este CMS de 14 tablas es parte de un Business OS más amplio de 12 bases de Airtable que gestionaba todo el negocio: inventario, CRM, contabilidad, RRHH y más. <a href="/business-os-para-airtable" class="text-primary underline underline-offset-2 hover:text-primary/80">Lee el case study completo del Business OS →</a>',
      },
      pageAnatomy: {
        heading: 'Anatomía de una Página',
        body: 'Cada una de las 4.700+ páginas se genera desde un template, pero el contenido es único porque viene del ERP. No es texto generado por IA ni contenido de relleno: son datos de producción.',
        components: [
          { icon: 'list', name: 'Breadcrumb + Schema', desc: 'Navegación jerárquica que refleja la taxonomía. Genera BreadcrumbList JSON-LD automáticamente.' },
          { icon: 'dollar-sign', name: 'Precios Reales', desc: 'Precio original y compatible, actualizados desde el ERP. El usuario ve exactamente lo que va a pagar.' },
          { icon: 'clock', name: 'Tiempo Estimado', desc: 'Basado en datos históricos reales del taller. No es una estimación genérica.' },
          { icon: 'camera', name: 'Fotos Antes/Después', desc: 'Imágenes reales de reparaciones completadas. EXIF inyectado con geolocalización y metadata SEO.' },
          { icon: 'star', name: 'Reseñas Verificadas', desc: 'Reviews de clientes reales, vinculadas al modelo o familia. Con schema Review y AggregateRating.' },
          { icon: 'code', name: '6 Tipos de JSON-LD', desc: 'LocalBusiness, Product, Service, BreadcrumbList, FAQPage, AggregateRating. Cada página tiene markup completo.' },
        ],
        screenshot: {
          src: '/pseo/ss-repair-page-full.webp',
          alt: 'Anatomía de una página programática de reparación',
          caption: 'Ejemplo real: página de reparación generada desde el ERP. Precios duales, reseñas reales, JSON-LD completo.',
        },
        storytelling: {
          heading: 'Flujo de Conversión por Página',
          body: 'Cada página sigue una estructura de conversión diseñada para llevar al usuario del descubrimiento a la acción:',
          steps: [
            'Hero con precio dual (original/compatible) + CTA de cita directa',
            'Specs del modelo personalizadas: cámara, batería, tecnologías del dispositivo',
            'Galería de fotos reales de reparaciones completadas (antes/después)',
            'Reseñas verificadas de clientes vinculadas al modelo o familia',
            'FAQ generada desde los datos del ERP (preguntas reales de clientes)',
            'CTA final con mapa de la tienda y botón de reserva',
          ],
          example: 'Un usuario busca "reparar pantalla iPhone 14 Pro Sevilla". Llega a una página con precio (189€ original / 89€ compatible), tiempo estimado (45 min), 3 fotos de reparaciones reales de iPhone 14 Pro, y 12 reseñas verificadas. No necesita navegar a otra página — toda la información para decidir está ahí.',
        },
        dynamicCopy: {
          heading: 'Copy Dinámico por Modelo',
          body: 'Cada modelo de dispositivo tiene un microcopy único generado a partir de sus specs de hardware reales. Un campo en Airtable almacena las características técnicas (cámara, batería, procesador, resistencia al agua) y un prompt genera una descripción que varía según el modelo. Un iPhone 14 Pro habla de su cámara de 48MP y su pantalla ProMotion. Un Pixel 7a destaca su chip Tensor y fotografía computacional. No es contenido genérico: es contenido que solo aplica a ESE modelo, basado en datos reales de hardware. Misma plantilla, contenido único en cada página.',
          screenshotCopy: {
            src: '/pseo/ss-dynamic-copy-iphone12.webp',
            alt: 'Copy dinámico del iPhone 12: specs reales de hardware generan texto único por modelo',
            caption: 'Página del iPhone 12: almacenamiento, RAM, pantalla Super Retina XDR OLED, batería Li-Ion 2815mAh. Todo extraído de las specs reales del modelo en Airtable.',
          },
          pricingHeading: 'Precios Sincronizados desde el ERP',
          pricingProse: 'El mismo CMS que genera el copy también sincroniza los precios de cada reparación en tiempo real. Airtable funciona como puente entre el ERP (donde se actualizan los costes de piezas y márgenes) y la web. Cada modelo muestra un rango de precios calculado desde el mínimo y máximo de sus reparaciones disponibles. Cuando un precio cambia en el ERP, la web se regenera con el precio actualizado — sin intervención manual.',
          screenshotPricing: {
            src: '/pseo/ss-category-pricing.webp',
            alt: 'Página de categoría iPhone con rangos de precios sincronizados desde el ERP',
            caption: 'Página de categoría: cada tarjeta muestra "Desde X € hasta Y €", calculado automáticamente desde los precios de reparación del ERP.',
          },
          pricingSegments: [
            {
              code: `let cadenaPrecio = '';
if (mostrarPrecio.startsWith('desde') && detail.precioMinCard) {
  cadenaPrecio = \`Desde \${detail.precioMinCard}\`;
}
if (mostrarPrecio === 'desdeHasta' && detail.precioMaxCard) {
  cadenaPrecio = \`\${cadenaPrecio} hasta \${detail.precioMaxCard}\`;
}
if (mostrarPrecio === 'exacto' && detail.precioMinCard) {
  cadenaPrecio = detail.precioMaxCard
    ? \`Desde \${detail.precioMinCard} hasta \${detail.precioMaxCard}\`
    : \`\${detail.precioMinCard}\`;
}`,
              annotations: [
                { label: 'Tres modos de precio', detail: '"desde" (solo mínimo), "desdeHasta" (rango completo), "exacto" (precio fijo o rango con CTA). El modo se configura por tipo de página.' },
                { label: 'precioMinCard / precioMaxCard', detail: 'Campos calculados en Airtable: agregan min y max de todas las reparaciones disponibles para ese modelo. Si el coste de una pieza cambia en el ERP, estos campos se recalculan automáticamente.' },
              ],
            },
          ],
        },
        contextSearch: {
          heading: 'Buscador Contextual',
          body: 'El buscador no es un simple filtro de texto. Es un componente con un algoritmo de scoring propio — sin librerías externas como Fuse.js. El usuario escribe "iphone 12 pro" y el sistema puntúa los 867 modelos: +20 si contiene todas las palabras, +30 si es coincidencia exacta, +10 si el nombre empieza por la búsqueda, y penaliza palabras extra en el nombre del modelo. El resultado: los 6 modelos más relevantes, ordenados por puntuación.',
          detail: 'Lo interesante es que el buscador es sensible al contexto. En la homepage busca en los 867 modelos de todas las marcas y tipos de dispositivo. Pero en la página de una marca específica (ej: Samsung), solo busca entre modelos de esa marca. Y en la página de un tipo de dispositivo (ej: tablets), solo tablets. El mismo componente, con props de filtro (`filtroTipo`, `filtroMarca`), se comporta de forma diferente según dónde se embeba. Los modelos se cargan bajo demanda en el primer foco del input y se cachean en localStorage para que las búsquedas siguientes sean instantáneas.',
          codeProse: 'El artículo describe el algoritmo. Este es el código real — 30 líneas sin dependencias externas:',
          codeSegments: [
            {
              code: `function calcularPuntuacion(modelo, terminosBusqueda) {
  let puntuacion = 0;
  const nombreModelo = modelo.n.toLowerCase();

  const todasPresentes = terminosBusqueda.every(t => nombreModelo.includes(t));

  if (todasPresentes) {
    puntuacion += 20;
    const palabrasModelo = nombreModelo.split(/\\s+/);
    const extras = palabrasModelo.filter(p => !terminosBusqueda.includes(p)).length;
    puntuacion -= extras * 2;

    if (nombreModelo === terminosBusqueda.join(' ')) puntuacion += 30;
    if (nombreModelo.startsWith(terminosBusqueda.join(' '))) puntuacion += 10;
  }
  return puntuacion;
}`,
              annotations: [
                { label: '+20 base', detail: 'Todos los términos deben estar presentes. "iphone 12 pro" coincide con "Apple iPhone 12 Pro" pero no con "Apple iPhone 12".' },
                { label: '-2 por palabra extra', detail: 'Penaliza nombres largos. "Apple iPhone 12 Pro Max" puntúa menos que "Apple iPhone 12 Pro" para la query "iphone 12 pro".' },
                { label: '+30 exacto, +10 starts-with', detail: 'Coincidencias exactas dominan. 30 líneas, cero dependencias, superando a Fuse.js para este dominio concreto.' },
              ],
            },
          ],
        },
      },
      decisionEngine: {
        heading: 'El Motor de Decisiones',
        body: 'El sistema genera miles de páginas (muchas más de las 4.730 que recibieron tráfico), pero no todas merecen ser indexadas. Si nadie busca "reparar cámara delantera iPhone 11", esa página no debería competir en Google — pero sí debe existir para el usuario que navega desde la página del iPhone 11 y necesita esa reparación concreta. La clave es separar SEO de UX. El motor de decisiones consulta DataForSEO para obtener volumen de búsqueda real de cada combinación, y el resultado se almacena en el campo "indexable" de <a href="https://github.com/santifer/santifer-irepair/blob/main/src/lib/airtable.ts" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">airtable.ts</a>.',
        rules: [
          {
            condition: 'Volumen de búsqueda alto (DataForSEO)',
            action: 'Página indexable',
            detail: 'Si la keyword tiene volumen significativo, la página se genera con meta robots "index, follow", se incluye en el sitemap, y recibe enlazado interno prioritario.',
          },
          {
            condition: 'Volumen de búsqueda bajo o nulo',
            action: 'Página noindex (solo UX)',
            detail: 'La página existe para la experiencia de usuario y navegación interna, pero lleva meta robots "noindex" y no aparece en el sitemap.',
          },
          {
            condition: 'Sin datos de servicio en el ERP',
            action: 'No se genera página',
            detail: 'Si no hay datos reales del servicio (precio, disponibilidad), la página no se genera. Cero contenido thin.',
          },
          {
            condition: 'Reparación descatalogada',
            action: 'Bridge redirect',
            detail: 'La página se marca como "bridge" y redirige 301 a la alternativa más cercana. Preserva la autoridad acumulada.',
          },
        ],
        stats: 'El sistema genera miles de páginas en total. De esas, 4.084 están en el sitemap como indexables. 4.730 recibieron alguna impresión de Google. El resto no se indexa, pero sigue existiendo para la experiencia del usuario que navega la web.',
      },
      pipeline: {
        heading: 'Pipeline de Build',
        body: 'El pipeline transforma los datos del CMS en una web estática lista para desplegar. Todo está automatizado. schema.ts tiene 1.677 líneas que mapean la jerarquía de Airtable a tipos de Astro.',
        steps: [
          { label: 'Airtable API', desc: 'Extracción de registros con retry y backoff exponencial' },
          { label: 'Schema Mapping', desc: '1.677 líneas que transforman la jerarquía de 6 niveles en tipos TypeScript' },
          { label: 'Cache de Reviews', desc: 'Las reseñas se cachean para no hacer llamadas redundantes a la API' },
          { label: 'getStaticPaths', desc: 'Genera las rutas estáticas desde la taxonomía completa' },
          { label: 'ReparacionLayout', desc: '21 templates de página que renderizan según el nivel de la taxonomía' },
          { label: 'Astro SSG', desc: 'Build estático con mínimo JavaScript lazy-loaded' },
          { label: 'Optimización', desc: 'Imágenes comprimidas, EXIF inyectado, sitemap filtrado, internal linking' },
          { label: 'Cloudflare CDN', desc: 'Deploy con invalidación de caché e edge caching global' },
        ],
        dataPipeline: {
          heading: 'Retry con Backoff Exponencial',
          prose: 'El pipeline comienza con la extracción de datos de Airtable. Con 14 tablas y miles de registros, las llamadas a la API necesitan ser resilientes. Esta función genérica de retry sostiene todo el build:',
          segments: [
            {
              code: `function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  retries: number = 5,
  delayTime: number = 500
): Promise<T> {
  try {
    return await operation();
  } catch (error: any) {
    if (retries > 0 && (error.statusCode === 502 || error.statusCode === 503)) {
      await delay(delayTime);
      return retryWithBackoff(operation, retries - 1, delayTime * 2);
    }
    throw error;
  }
}`,
              annotations: [
                { label: 'Generic <T>', detail: 'Una sola función para todos los tipos de registro (ITipos, IMarcas, IModelos, IReparaciones...).' },
                { label: 'Solo 502/503', detail: 'Solo reintenta errores de servidor (Bad Gateway, Service Unavailable). Errores de cliente (400, 401) fallan inmediatamente.' },
                { label: 'delayTime * 2', detail: 'Backoff exponencial: 500ms → 1s → 2s → 4s → 8s. 5 reintentos = 15,5s máximo antes de fallar.' },
              ],
            },
          ],
        },
        reviewCache: {
          heading: 'Sistema de Cache de Reseñas',
          prose: 'Las reseñas son las llamadas más caras del build: 4.700+ páginas podrían necesitarlas, pero solo hay 607 en total. La solución: cargar todas una vez al inicio del build y que cada página consulte desde memoria.',
          segments: [
            {
              code: `let caches: { [key: string]: Reseña[] | undefined } = {};

async function loadReseñas(baseName: string, cacheKey: string): Promise<void> {
  if (caches[cacheKey]) return;

  const fetchOperation = () => new Promise<Reseña[]>((resolve, reject) => {
    const allRecords: Reseña[] = [];
    base(baseName)
      .select({ view: 'CMSAstro', fields: ReseñaFields })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => allRecords.push(mapReseñaFields(record.fields)));
          fetchNextPage();
        },
        (err) => err ? reject(err) : resolve(allRecords)
      );
  });

  caches[cacheKey] = await retryWithBackoff(fetchOperation);
}

export async function ensureCachesLoaded(): Promise<void> {
  await Promise.all([
    loadReseñas('Reseñas sincronizar Astro', 'cachedReseñas'),
    loadReseñas('Reseñas Internas', 'cachedReseñasInternas')
  ]);
}

// Se ejecuta al importar el módulo
ensureCachesLoaded().catch(console.error);`,
              annotations: [
                { label: 'Module-level call', detail: 'ensureCachesLoaded() se ejecuta cuando se importa el módulo. En Astro SSG, todas las reseñas se cargan en memoria antes de que comience la generación de páginas.' },
                { label: 'Promise.all', detail: 'Ambas fuentes (Google My Business + encuestas internas) se cargan en paralelo.' },
                { label: 'Trade-off: O(n) find', detail: 'Las páginas buscan por ID con .find(). Escaneo lineal, pero con 607 reseñas elimina cientos de llamadas API. El trade-off correcto para un build pipeline.' },
              ],
            },
          ],
        },
      },
      contentAutomation: {
        heading: 'Pipeline de Contenido Automatizado',
        body: 'Generar miles de páginas es solo la mitad. Cada página necesita imágenes, metadata y copy únicos. Un conjunto de 8 scripts Node.js (1.411 líneas) automatiza toda la producción de contenido visual y textual sin intervención manual. Todo conectado a las 12 bases del Business OS en Airtable. Resultado: más de 26.000 imágenes generadas automáticamente.',
        repoLink: '<a href="https://github.com/santifer/santifer-irepair/tree/main/scripts" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">Explora los scripts del pipeline en GitHub →</a>',
        pipelines: [
          {
            icon: 'camera',
            name: 'Generación Paramétrica de Imágenes',
            desc: 'De 1 foto de dispositivo se generan 18 variantes automáticas: una por tipo de reparación (pantalla, batería, cámara, puerto de carga...) + una imagen genérica. La foto del dispositivo se extrae de GSM Arena y se compone con overlays PNG de cada reparación. 867 modelos × 18 variantes = 15.500+ imágenes únicas, sin tocar Photoshop.',
          },
          {
            icon: 'code',
            name: 'Inyección EXIF para SEO Local',
            desc: 'Cada imagen recibe coordenadas GPS de Sevilla y una descripción SEO inyectada en los metadatos EXIF. Google Images lee estos datos para posicionar en búsquedas locales. Automatizado con piexifjs y codificación UCS-2.',
          },
          {
            icon: 'star',
            name: 'Pipeline de Fotos Antes/Después',
            desc: '10.000+ fotos de reparaciones reales procesadas automáticamente. Se descargan de Airtable, se redimensionan, se aplica blur para fondos, se componen en WebP, y las URLs resultantes se escriben de vuelta en Airtable. Pipeline ETL bidireccional: Airtable → procesamiento → Airtable.',
          },
          {
            icon: 'zap',
            name: 'Copy Dinámico por Modelo',
            desc: 'Cada modelo tiene un campo con sus specs de hardware (cámara, batería, procesador). Un prompt convierte esas specs en microcopy único para cada página. No es IA generando contenido: es IA describiendo datos reales de hardware. Cada página es diferente porque cada dispositivo es diferente.',
          },
        ],
        exifCode: {
          prose: 'Cada imagen recibe las coordenadas GPS de la tienda inyectadas en los metadatos EXIF. Google Images usa estos datos para posicionar imágenes en búsquedas locales:',
          segments: [
            {
              code: `// Coordenadas de la tienda en Sevilla
gps[piexif.GPSIFD.GPSLatitude] = convertToDMS(37.38606);
gps[piexif.GPSIFD.GPSLatitudeRef] = 'N';
gps[piexif.GPSIFD.GPSLongitude] = convertToDMS(-5.98585);
gps[piexif.GPSIFD.GPSLongitudeRef] = 'W';

// Descripción SEO en ambos campos EXIF
exifObj['0th'][piexif.ImageIFD.ImageDescription] = description;

// UCS-2 para soporte Unicode (tildes, ñ)
const userComment = Buffer.concat([
  Buffer.from('UNICODE\\0\\0\\0', 'ascii'),
  encodeUCS2(description),
]);
exifObj['Exif'][piexif.ExifIFD.UserComment] = userComment.toString('binary');`,
              annotations: [
                { label: 'GPS fijas', detail: 'Cada imagen de reparación recibe las coordenadas exactas de la tienda en Sevilla. Google Images usa EXIF GPS para resultados locales.' },
                { label: 'Descripción dual', detail: 'El texto SEO va en ImageDescription (EXIF estándar) y UserComment (EXIF extendido). Diferentes parsers leen diferentes campos.' },
                { label: 'UCS-2 encoding', detail: 'Los caracteres españoles (tildes, ñ) requieren codificación Unicode. El spec EXIF exige UCS-2 con prefijo UNICODE\\0\\0\\0.' },
              ],
            },
          ],
        },
        cascade: {
          heading: 'Cascada de Contenido: Una Reseña, Seis Páginas',
          body: 'El sistema hereda contenido automáticamente a través de la taxonomía. Una reseña de "reparación de pantalla de iPhone 12" no solo aparece en esa página — aparece en todas las páginas donde es relevante:',
          example: [
            { page: '/reparar-movil/apple/iphone-12/pantalla/sevilla', label: 'Modelo + reparación + ciudad' },
            { page: '/reparar-iphone/pantalla/sevilla', label: 'Dispositivo + reparación + ciudad' },
            { page: '/reparar-movil/apple/sevilla', label: 'Dispositivo + marca + ciudad' },
            { page: '/reparar-iphone/sevilla', label: 'Dispositivo + ciudad' },
            { page: '/reparar-movil/pantalla/sevilla', label: 'Dispositivo + reparación + ciudad' },
            { page: '/reparar-movil/sevilla', label: 'Dispositivo + ciudad' },
          ],
          detail: 'La misma lógica aplica a las fotos antes/después: una foto de reparación de pantalla de iPhone 12 aparece en todas las páginas de esa rama de la taxonomía. Esto multiplica el contenido único sin duplicar ni generar nada artificialmente. Cada página acumula más social proof y contenido visual a medida que el negocio crece.',
        },
        stats: '26.000+ imágenes generadas automáticamente. 867 modelos con 18 variantes cada uno. 10.000+ fotos de reparaciones reales. Cero intervención manual. Las 12 bases del Business OS alimentan el pipeline completo.',
      },
      imagePipeline: {
        heading: 'Dentro del Pipeline de Imágenes',
        intro: 'La sección anterior describe el pipeline a alto nivel. Aquí se ve exactamente cómo funciona: las plantillas reales, el código de composición, y el resultado de aplicarlo a 867 modelos distintos.',
        overlayShowcase: {
          heading: 'Las Plantillas de Overlay',
          body: 'Cada tipo de reparación tiene un overlay PNG de 384×256 píxeles. El overlay muestra visualmente qué pieza se repara: una pantalla rota, una batería, una cámara... Son 17 plantillas en total, cada una diseñada para superponerse sobre la foto de cualquier dispositivo.',
          items: [
            { src: 'pantalla.png', altEs: 'Overlay de reparación de pantalla', altEn: 'Screen repair overlay' },
            { src: 'bateria.png', altEs: 'Overlay de cambio de batería', altEn: 'Battery replacement overlay' },
            { src: 'camara-trasera.png', altEs: 'Overlay de cámara trasera', altEn: 'Rear camera overlay' },
            { src: 'puerto-carga.png', altEs: 'Overlay de puerto de carga', altEn: 'Charging port overlay' },
            { src: 'tapa-trasera.png', altEs: 'Overlay de tapa trasera', altEn: 'Back cover overlay' },
            { src: 'cristal.png', altEs: 'Overlay de cambio de cristal', altEn: 'Glass replacement overlay' },
          ],
        },
        compositionProcess: {
          heading: 'El Proceso de Composición',
          body: 'Cada imagen de reparación se genera en 6 pasos, completamente automatizado con un script Node.js y Sharp.js:',
          steps: [
            { label: 'Descargar foto del dispositivo', detail: 'Se extrae la foto oficial del dispositivo desde GSM Arena y se almacena temporalmente.' },
            { label: 'Crear canvas blanco 384×256', detail: 'Sharp.js crea una imagen base en blanco de 384×256 píxeles con canal alpha.' },
            { label: 'Superponer el overlay PNG', detail: 'La plantilla de reparación (pantalla, batería, etc.) se compone como primera capa sobre el canvas.' },
            { label: 'Centrar el dispositivo en x=96', detail: 'La foto del dispositivo se redimensiona proporcionalmente y se centra en la posición x=96, dejando espacio para el overlay a la derecha.' },
            { label: 'Exportar a WebP', detail: 'El resultado se exporta como WebP optimizado. Cada imagen pesa ~5-8 KB.' },
            { label: 'Repetir ×17 reparaciones + hero', detail: 'El proceso se repite para los 17 tipos de reparación más una imagen genérica (hero) de 256×256. Total: 18 imágenes por modelo.' },
          ],
        },
        codeSnippet: {
          heading: 'El Código Real',
          body: 'Este es el fragmento real del script <a href="https://github.com/santifer/santifer-irepair/blob/main/scripts/generarImagenesReparacionesModelos.mjs" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">generarImagenesReparacionesModelos.mjs</a> que genera cada imagen de reparación:',
          segments: [
            {
              code: `await sharp({
  create: {
    width: 384, height: 256,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  }
})
  .png()
  .composite([
    { input: overlayPath },
    { input: devicePhoto,
      top: Math.round(top),
      left: Math.round(left) }
  ])
  .webp()
  .toFile(outputPath)`,
              annotations: [
                { label: 'Canvas', detail: 'Crea una imagen en blanco de 384×256 con fondo blanco y canal alpha. Este es el lienzo sobre el que se compone todo.' },
                { label: 'Orden de composición', detail: 'Primero el overlay (plantilla de reparación), después la foto del dispositivo. El orden importa: el overlay queda detrás del dispositivo.' },
                { label: 'Posicionamiento', detail: 'La foto del dispositivo se centra verticalmente y se posiciona en x≈96. Esto deja espacio visual para que el overlay de reparación sea visible a la derecha.' },
              ],
            },
          ],
        },
        onePhotoDemo: {
          heading: '1 Foto → 18 Variantes',
          body: 'A partir de una sola foto del iPhone 14 Pro, el pipeline genera automáticamente 18 imágenes únicas: una imagen hero genérica y 17 variantes de reparación. Cada variante combina la foto del dispositivo con un overlay específico.',
          hero: {
            src: '/pseo/demo/apple-iphone-14-pro/reparar-apple-iphone-14-pro.webp',
            alt: 'iPhone 14 Pro — imagen hero genérica generada automáticamente',
            caption: 'Imagen hero: la foto del iPhone 14 Pro centrada en un canvas de 256×256, sin overlay.',
          },
          variants: [
            { src: 'cambiar-pantalla-apple-iphone-14-pro.webp', altEs: 'Cambiar pantalla iPhone 14 Pro', altEn: 'iPhone 14 Pro screen replacement' },
            { src: 'cambiar-bateria-apple-iphone-14-pro.webp', altEs: 'Cambiar batería iPhone 14 Pro', altEn: 'iPhone 14 Pro battery replacement' },
            { src: 'cambiar-camara-trasera-apple-iphone-14-pro.webp', altEs: 'Cambiar cámara trasera iPhone 14 Pro', altEn: 'iPhone 14 Pro rear camera replacement' },
            { src: 'cambiar-puerto-carga-apple-iphone-14-pro.webp', altEs: 'Cambiar puerto de carga iPhone 14 Pro', altEn: 'iPhone 14 Pro charging port replacement' },
            { src: 'cambiar-tapa-trasera-apple-iphone-14-pro.webp', altEs: 'Cambiar tapa trasera iPhone 14 Pro', altEn: 'iPhone 14 Pro back cover replacement' },
            { src: 'cambiar-cristal-apple-iphone-14-pro.webp', altEs: 'Cambiar cristal iPhone 14 Pro', altEn: 'iPhone 14 Pro glass replacement' },
            { src: 'cambiar-altavoz-apple-iphone-14-pro.webp', altEs: 'Cambiar altavoz iPhone 14 Pro', altEn: 'iPhone 14 Pro speaker replacement' },
            { src: 'cambiar-microfono-apple-iphone-14-pro.webp', altEs: 'Cambiar micrófono iPhone 14 Pro', altEn: 'iPhone 14 Pro microphone replacement' },
            { src: 'cambiar-auricular-apple-iphone-14-pro.webp', altEs: 'Cambiar auricular iPhone 14 Pro', altEn: 'iPhone 14 Pro earpiece replacement' },
          ],
          caption: {
            es: '9 de las 17 variantes generadas automáticamente para el iPhone 14 Pro. Cada imagen combina la foto real del dispositivo con un overlay de reparación específico.',
            en: '9 of the 17 auto-generated variants for the iPhone 14 Pro. Each image composites the real device photo with a specific repair overlay.',
          },
        },
        crossDeviceDemo: {
          heading: 'Mismo Pipeline, Diferente Dispositivo',
          body: 'El mismo proceso se aplica a cualquier dispositivo. La foto cambia, los overlays son los mismos. Esto es lo que permite escalar a 867 modelos sin trabajo manual.',
          heroes: [
            { src: '/pseo/demo/apple-iphone-14-pro/reparar-apple-iphone-14-pro.webp', alt: 'iPhone 14 Pro — hero' },
            { src: '/pseo/demo/samsung-galaxy-s23-ultra/reparar-samsung-galaxy-s23-ultra.webp', alt: 'Samsung Galaxy S23 Ultra — hero' },
            { src: '/pseo/demo/reparar-xiaomi-12.webp', alt: 'Xiaomi 12 — hero' },
          ],
          comparison: [
            { src: '/pseo/demo/apple-iphone-14-pro/cambiar-pantalla-apple-iphone-14-pro.webp', alt: 'Cambiar pantalla iPhone 14 Pro' },
            { src: '/pseo/demo/samsung-galaxy-s23-ultra/cambiar-pantalla-samsung-galaxy-s23-ultra.webp', alt: 'Cambiar pantalla Samsung Galaxy S23 Ultra' },
          ],
          comparisonCaption: {
            es: 'Mismo overlay de "cambiar pantalla", diferente dispositivo. La plantilla es idéntica — lo que cambia es la foto del modelo.',
            en: 'Same "screen replacement" overlay, different device. The template is identical — what changes is the model photo.',
          },
        },
        scale: {
          heading: 'La Escala',
          metrics: [
            { value: '867', label: 'Modelos', detail: 'Dispositivos únicos con imágenes generadas' },
            { value: '17', label: 'Overlays', detail: 'Plantillas de reparación (pantalla, batería, cámara...)' },
            { value: '18', label: 'Imgs/modelo', detail: '17 reparaciones + 1 hero por dispositivo' },
            { value: '15.606', label: 'Composites', detail: 'Total de imágenes generadas automáticamente' },
          ],
        },
      },
      reviewsPipeline: {
        heading: 'Pipeline de Reseñas',
        intro: 'Las reseñas son el social proof más potente de cada página. Pero gestionar cientos de perfiles de clientes, sincronizar dos fuentes y cascadear la prueba social por toda la taxonomía requiere su propio pipeline.',
        sourceSync: {
          heading: 'Fuente y Sincronización',
          body: 'Las reseñas llegan de dos fuentes: Google My Business (verificadas públicamente) y encuestas internas post-reparación. Ambas se sincronizan a Airtable y se normalizan en un formato único.',
          table: {
            headers: ['Tabla', 'Fuente', 'Campos clave'],
            rows: [
              ['Reseñas sincronizar Astro', 'Google My Business', 'quote, name, puntuacion, imageUrl, respuesta'],
              ['Reseñas Internas', 'Encuestas post-reparación', 'quote, name, puntuacion, imageUrl, modelo vinculado'],
            ],
          },
        },
        imageProcessing: {
          heading: 'Procesamiento de Fotos de Perfil',
          body: 'Cada reseña con foto de perfil pasa por un pipeline de procesamiento automatizado:',
          steps: [
            { label: 'Descargar foto desde Airtable', detail: 'La URL de la foto de perfil se descarga desde el campo de attachments de Airtable.' },
            { label: 'Convertir a WebP quality 95', detail: 'Sharp.js convierte la imagen a WebP con calidad 95 para preservar el detalle del rostro.' },
            { label: 'Guardar en /bg/res/', detail: 'El archivo se guarda con nombre semántico: reparacion-{tipo}-{modelo}-{nombre}-{fecha}.webp' },
            { label: 'Escribir URL de vuelta en Airtable', detail: 'La URL resultante se escribe de vuelta en el campo correspondiente. ETL bidireccional.' },
          ],
        },
        codeSnippet: {
          heading: 'El Código Real',
          body: 'Este es el fragmento real de `generarImagenesReseñas.mjs` que procesa cada foto de perfil:',
          segments: [
            {
              code: `const imageBuffer = await fetch(attachmentUrl)
  .then(r => r.arrayBuffer())

await sharp(Buffer.from(imageBuffer))
  .webp({ quality: 95 })
  .toFile(outputPath)

// Write processed URL back to Airtable
await base('Reseñas sincronizar Astro')
  .update(record.id, {
    'imagen_procesada': outputUrl
  })`,
              annotations: [
                { label: 'Preservación de dimensiones', detail: 'No se redimensiona — la foto de perfil se mantiene en su tamaño original para máxima calidad en el carrusel.' },
                { label: 'WebP quality 95', detail: 'Quality más alto que las fotos de reparación (85) porque las fotos de perfil son más pequeñas y el detalle importa más.' },
                { label: 'ETL bidireccional', detail: 'Airtable es fuente Y destino: la foto se descarga, se procesa, y la URL resultante se escribe de vuelta en el registro.' },
              ],
            },
          ],
        },
        cascade: {
          heading: 'Cascada de Social Proof',
          body: 'Las reseñas no solo aparecen en una página — se heredan por toda la taxonomía. Una reseña vinculada a un modelo se propaga a todas las páginas donde ese modelo es relevante.',
          points: [
            'Reseña de "iPhone 14 Pro" → aparece en todas las reparaciones de ese modelo, en todas las ciudades',
            'Reseña de familia "iPhone 14" → aparece en todos los modelos de la familia (14, 14 Plus, 14 Pro, 14 Pro Max)',
            'Reseña de marca "Apple" → aparece en páginas de marca agregadas como /reparar-movil/apple/sevilla',
            'La cascada es automática: al vincular la reseña al nivel correcto, el build la distribuye',
          ],
        },
        profileDemo: {
          heading: 'Cientos de Perfiles Procesados',
          body: 'Perfiles reales de clientes procesados por el pipeline. Cada foto fue descargada, convertida a WebP y vinculada de vuelta a Airtable.',
          items: [
            { src: 'victor.webp', altEs: 'Víctor — reparación de pantalla Samsung Galaxy A70', altEn: 'Victor — Samsung Galaxy A70 screen repair' },
            { src: 'sarah.webp', altEs: 'Sarah — reparación de auricular iPhone 11', altEn: 'Sarah — iPhone 11 earpiece repair' },
            { src: 'cristina.webp', altEs: 'Cristina — reparación de auricular iPhone 12', altEn: 'Cristina — iPhone 12 earpiece repair' },
            { src: 'ricardo.webp', altEs: 'Ricardo — cambio de batería Google Pixel 4', altEn: 'Ricardo — Google Pixel 4 battery replacement' },
            { src: 'manolo.webp', altEs: 'Manolo — reparación de batería iPhone 11 Pro Max', altEn: 'Manolo — iPhone 11 Pro Max battery repair' },
            { src: 'fernando.webp', altEs: 'Fernando — reparación de táctil iPad 5', altEn: 'Fernando — iPad 5 touch repair' },
            { src: 'susana.webp', altEs: 'Susana — reparación de pantalla iPhone XS', altEn: 'Susana — iPhone XS screen repair' },
            { src: 'teresa.webp', altEs: 'Teresa — reparación de pantalla iPhone 8 Plus', altEn: 'Teresa — iPhone 8 Plus screen repair' },
            { src: 'luisa.webp', altEs: 'Luisa — reparación de batería iPhone 6 Plus', altEn: 'Luisa — iPhone 6 Plus battery repair' },
          ],
          caption: {
            es: 'Perfiles reales de clientes. Cada foto se descarga, convierte a WebP y vincula de vuelta a Airtable.',
            en: 'Real customer profiles. Each photo is downloaded, converted to WebP, and linked back to Airtable.',
          },
        },
        carouselCro: {
          heading: 'Renderizado: Carrusel CRO',
          body: 'En producción, las reseñas se renderizan en un carrusel con auto-rotación de 9 segundos, barra de progreso visual y navegación por puntos. Las top 20 reseñas son visibles directamente; el resto se expanden bajo un botón "Ver más". Todo renderizado en servidor — cero JavaScript para el carrusel base.',
          callout: 'Filtro automático: solo reseñas ≥5★ con comentario van primero. Las reseñas sin texto o con menos de 5 estrellas quedan después del fold.',
        },
        scale: {
          heading: 'La Escala',
          metrics: [
            { value: '600+', label: 'Perfiles procesados', detail: 'Fotos de perfil convertidas a WebP' },
            { value: '2', label: 'Fuentes', detail: 'Google My Business + encuestas internas' },
            { value: '9s', label: 'Rotación', detail: 'Auto-rotación del carrusel CRO' },
            { value: '≥5★', label: 'Prioridad', detail: 'Reseñas con 5 estrellas y comentario van primero' },
          ],
        },
      },
      repairedDevicesPipeline: {
        heading: 'Pipeline Antes/Después',
        intro: 'Cada reparación completada genera evidencia fotográfica: 4 fotos que documentan el estado del dispositivo antes y después. Este pipeline procesa esas fotos automáticamente y las distribuye por la web.',
        captureProtocol: {
          heading: 'Protocolo de Captura',
          body: 'Cada reparación completada en el taller sigue un protocolo de 4 fotos:',
          steps: [
            { label: 'Frontal antes', detail: 'Foto del frontal del dispositivo antes de la reparación. Muestra el daño visible (pantalla rota, marcas, etc.).' },
            { label: 'Frontal después', detail: 'Foto del frontal tras la reparación. Mismo ángulo para comparación directa.' },
            { label: 'Trasera antes', detail: 'Foto de la parte trasera antes. Documenta el estado general del dispositivo.' },
            { label: 'Trasera después', detail: 'Foto de la parte trasera tras la reparación. Completa la documentación visual.' },
          ],
          privacyNote: 'El flag `difuminar` en Airtable marca las fotos que necesitan blur: pantallas encendidas con notificaciones visibles, datos personales, etc. El blur se aplica automáticamente en el pipeline.',
        },
        imageProcessing: {
          heading: 'Procesamiento Automatizado',
          body: 'Cada foto pasa por 6 pasos de procesamiento con Sharp.js:',
          steps: [
            { label: 'Descargar desde Airtable', detail: 'La foto original se descarga desde el campo de attachments del registro de reparación.' },
            { label: 'Resize a 1/4 de resolución', detail: 'La imagen se redimensiona al 25% de su tamaño original. Suficiente para web, reduce el peso drásticamente.' },
            { label: 'Blur condicional (sigma 8)', detail: 'Si el flag `difuminar` está activo, se aplica un blur gaussiano con sigma 8. Protege datos personales en pantalla.' },
            { label: 'Overlay blanco semi-transparente', detail: 'Se compone una capa blanca al 30% sobre el fondo para mejorar contraste y darle un look consistente.' },
            { label: 'Exportar a WebP quality 85', detail: 'Calidad 85 — más bajo que las fotos de perfil (95) porque a 1/4 de resolución el detalle extra no se nota.' },
            { label: 'Escribir slug de vuelta', detail: 'El nombre del archivo procesado se escribe de vuelta en Airtable para que el build de Astro lo encuentre.' },
          ],
        },
        codeSnippet: {
          heading: 'El Código Real',
          body: 'Este es el fragmento real de <a href="https://github.com/santifer/santifer-irepair/blob/main/scripts/CasosExito.mjs" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">CasosExito.mjs</a> que procesa cada foto de reparación:',
          segments: [
            {
              code: `let pipeline = sharp(inputBuffer)
  .resize({
    width: Math.round(metadata.width / 4),
    height: Math.round(metadata.height / 4)
  })

if (record.fields.difuminar) {
  pipeline = pipeline.blur(8)
}

await pipeline
  .composite([{
    input: whiteOverlay,
    blend: 'over'
  }])
  .webp({ quality: 85 })
  .toFile(outputPath)`,
              annotations: [
                { label: 'Resize 1/4', detail: 'Reduce a la cuarta parte. Una foto de 4032×3024 queda en 1008×756 — perfecto para web, reduce el peso de ~3MB a ~30KB.' },
                { label: 'Blur condicional', detail: 'Solo se aplica si el campo `difuminar` está activo en Airtable. Sigma 8 difumina notificaciones y datos personales visibles en pantalla.' },
                { label: 'Quality 85 vs 95', detail: 'Menor calidad que las fotos de perfil porque a 1/4 de resolución el detalle extra no aporta. Ahorra ~40% de peso por imagen.' },
              ],
            },
          ],
        },
        demo: {
          heading: 'Resultado Real: iPhone 14 Pro',
          body: 'Estas son fotos reales procesadas por el pipeline. Frontal y trasera, antes y después de la reparación.',
          frontal: [
            { src: '/pseo/before-after/iphone-14-pro-front-before.webp', alt: 'iPhone 14 Pro frontal — antes de reparación' },
            { src: '/pseo/before-after/iphone-14-pro-front-after.webp', alt: 'iPhone 14 Pro frontal — después de reparación' },
          ],
          frontalCaption: 'iPhone 14 Pro — frontal antes y después',
          trasera: [
            { src: '/pseo/before-after/iphone-14-pro-back-before.webp', alt: 'iPhone 14 Pro trasera — antes de reparación' },
            { src: '/pseo/before-after/iphone-14-pro-back-after.webp', alt: 'iPhone 14 Pro trasera — después de reparación' },
          ],
          traseraCaption: 'iPhone 14 Pro — trasera antes y después',
        },
        crossDeviceDemo: {
          heading: 'Mismo Pipeline, Diferentes Marcas',
          body: 'El pipeline funciona igual para cualquier marca y modelo. Aquí se ve aplicado a un Samsung Galaxy A51 y un Xiaomi Redmi Note 9S.',
          samsung: [
            { src: '/pseo/before-after/samsung-a51-before.webp', alt: 'Samsung Galaxy A51 — antes de reparación' },
            { src: '/pseo/before-after/samsung-a51-after.webp', alt: 'Samsung Galaxy A51 — después de reparación' },
          ],
          samsungCaption: 'Samsung Galaxy A51 — antes y después',
          xiaomi: [
            { src: '/pseo/before-after/xiaomi-note9s-before.webp', alt: 'Xiaomi Redmi Note 9S — antes de reparación' },
            { src: '/pseo/before-after/xiaomi-note9s-after.webp', alt: 'Xiaomi Redmi Note 9S — después de reparación' },
          ],
          xiaomiCaption: 'Xiaomi Redmi Note 9S — antes y después',
          caption: {
            es: 'Mismo pipeline de procesamiento para cualquier marca. Las fotos se descargan, redimensionan, difuminan si es necesario y exportan a WebP automáticamente.',
            en: 'Same processing pipeline for any brand. Photos are downloaded, resized, blurred if needed, and exported to WebP automatically.',
          },
        },
        naming: {
          heading: 'Convención de Nombres',
          body: 'Cada foto sigue una convención estricta que permite al build de Astro encontrarlas automáticamente:',
          pattern: '{fecha}-reparacion-{marca}-{modelo}-{ordenId}-{1|2|3|4}.webp',
          suffixes: [
            { title: 'Sufijo -1', detail: 'Frontal antes de la reparación' },
            { title: 'Sufijo -2', detail: 'Frontal después de la reparación' },
            { title: 'Sufijo -3', detail: 'Trasera antes de la reparación' },
            { title: 'Sufijo -4', detail: 'Trasera después de la reparación' },
          ],
        },
        scale: {
          heading: 'La Escala',
          metrics: [
            { value: '10.342', label: 'Fotos procesadas', detail: 'Fotos de reparaciones reales convertidas a WebP' },
            { value: '4', label: 'Ángulos', detail: 'Frontal antes/después + trasera antes/después' },
            { value: '1/4', label: 'Resolución', detail: 'Resize al 25% del original para web' },
            { value: 'Q85', label: 'WebP quality', detail: 'Calidad optimizada para fotos de reparación' },
          ],
        },
      },
      growth: {
        heading: 'Curva de Crecimiento',
        body: 'El proyecto se lanzó en octubre 2024. Los primeros meses fueron de indexación progresiva. Tras un pico inicial en enero, el tráfico se estancó entre febrero y junio — y no fue estacionalidad. Fue una reestructuración: la versión inicial generaba páginas nacionales y locales para cada combinación, pero eran demasiadas y Google priorizaba claramente la intención local. Redirigí las páginas nacionales a sus equivalentes locales con /sevilla, manteniendo solo las reparaciones de nicho en formato nacional (como /cambiar-bateria-iphone-11) donde la especificidad compensa la falta de localización. Mientras Google reindexaba la nueva estructura, el tráfico se mantuvo plano. Una vez consolidado, el crecimiento se disparó hasta el pico de septiembre 2025.',
        monthly: [
          { month: 'Oct 2024', clicks: 202, impressions: 16420, note: 'Lanzamiento' },
          { month: 'Nov 2024', clicks: 748, impressions: 69054 },
          { month: 'Dic 2024', clicks: 949, impressions: 77387 },
          { month: 'Ene 2025', clicks: 1277, impressions: 110836 },
          { month: 'Feb 2025', clicks: 935, impressions: 100558, note: 'Reestructuración nacional → local' },
          { month: 'Mar 2025', clicks: 1191, impressions: 118826 },
          { month: 'Abr 2025', clicks: 1027, impressions: 106744 },
          { month: 'May 2025', clicks: 936, impressions: 97137 },
          { month: 'Jun 2025', clicks: 996, impressions: 121088 },
          { month: 'Jul 2025', clicks: 1611, impressions: 150927, note: 'Post-reestructuración' },
          { month: 'Ago 2025', clicks: 1789, impressions: 164791 },
          { month: 'Sep 2025', clicks: 2193, impressions: 164440, note: 'Pico · Venta del negocio' },
        ],
        insight: 'De 202 a 2.193 clicks/mes en 11 meses. La meseta de febrero a junio coincide con la reestructuración de URLs nacionales a locales — Google necesitó tiempo para reindexar la nueva arquitectura. Una vez consolidada, el tráfico creció un 62% en un solo mes (jun → jul). El sistema sigue en producción bajo el nuevo propietario.',
        milestones: {
          heading: 'Hitos de Google Search Console',
          body: 'Google celebra los hitos de tráfico con badges. En 3 meses pasamos de 1.2K a 2K clicks mensuales — el último badge llegó junto a la venta del negocio.',
          items: [
            { src: '/pseo/gsc-1.2k.webp', label: '1.2K clicks', date: '18 jul 2025' },
            { src: '/pseo/gsc-1.5k.webp', label: '1.5K clicks', date: '3 ago 2025' },
            { src: '/pseo/gsc-1.8k.webp', label: '1.8K clicks', date: '11 sep 2025' },
            { src: '/pseo/gsc-2k.webp', label: '2K clicks', date: '22 sep 2025' },
          ],
        },
      },
      results: {
        heading: 'Resultados',
        body: 'Métricas acumuladas desde el lanzamiento (octubre 2024 a febrero 2026), directamente de Google Search Console:',
        metrics: [
          { value: '19.388', label: 'Clicks orgánicos', detail: '17 meses de operación, oct 2024 → feb 2026' },
          { value: '1,17%', label: 'CTR medio', detail: 'Sobre 2,26M de impresiones totales' },
          { value: '4.084', label: 'URLs en sitemap', detail: 'Solo las que pasan el motor de decisiones de DataForSEO' },
          { value: '<1s', label: 'Tiempo de carga', detail: 'Astro SSG con JS mínimo lazy + Cloudflare CDN' },
        ],
        transition: 'Pero estos resultados no surgieron de la nada. El punto de partida fue una web en Squarespace con problemas técnicos que había que resolver antes de construir el sistema programático.',
      },
      crawlBudget: {
        heading: 'Optimización del Crawl Budget',
        body: 'Con 4.700+ páginas, gestionar el crawl budget es crítico — según la documentación de Google Search Central sobre crawl budget. Google no debería perder tiempo rastreando páginas que no van a posicionar. Las 700+ reglas de robots.txt se suman a las 1.009 redirecciones heredadas de la migración.',
        strategies: [
          {
            title: 'Noindex selectivo con DataForSEO',
            detail: 'El campo "indexable" en Airtable se alimenta directamente de los datos de volumen de DataForSEO. Las páginas sin volumen llevan noindex. No es una decisión arbitraria: es data-driven.',
          },
          {
            title: 'Sitemap filtrado (4.084 URLs)',
            detail: 'El sitemap.xml solo incluye URLs indexables. De las 4.730 páginas con impresiones, solo 4.084 están en el sitemap. Google no descubre las demás a través de este canal.',
          },
          {
            title: 'Estructura de URLs con 6 patrones',
            detail: 'Cada nivel de la taxonomía tiene un patrón de URL predecible. Google entiende la jerarquía sin necesidad de heurísticas complejas.',
          },
          {
            title: 'Enlazado interno contextual',
            detail: 'Las páginas indexables reciben más enlaces internos. Las páginas de ciudad enlazan a reparaciones disponibles, los modelos enlazan a sus reparaciones, y las familias agregan sus modelos.',
          },
          {
            title: 'Bridge redirects para descatalogados',
            detail: 'En lugar de devolver 404 cuando una reparación se descataloga, se redirige 301 a la alternativa más cercana. 700+ reglas de redirección en <a href="https://github.com/santifer/santifer-irepair/blob/main/vercel.json#L27" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">vercel.json</a>. Cero pérdida de autoridad, cero enlaces rotos.',
          },
        ],
        safeNoindex: {
          heading: 'Patrón "Noindex Seguro"',
          prose: 'El noindex accidental es uno de los errores más caros en SEO: una sola línea puede desindexar miles de páginas. Este es el patrón de seguridad que lo previene:',
          segments: [
            {
              code: `{NOINDEXCUIDADO &&
  NOINDEXCUIDADO === 'Estoy absolutamente seguro que no quiero hacer no index por eso pongo esta cadena' && (
    <meta name="robots" content="noindex" />
  )}`,
              annotations: [
                { label: 'String, no boolean', detail: 'Un booleano puede ser true por accidente (campo incorrecto, valor por defecto, error de migración). Un string de 80 caracteres en español requiere intención deliberada.' },
                { label: 'Doble guarda', detail: 'El prop debe ser truthy Y coincidir con el string exacto. Incluso si se establece a "true" o 1, el tag noindex no se renderiza.' },
              ],
            },
          ],
          callout: 'Un booleano puede ser truthy por accidente. Un string de 80 caracteres en español requiere intención deliberada. En 2 años de producción, cero noindex accidentales.',
        },
      },
      urlTaxonomy: {
        heading: 'Taxonomía de URLs',
        body: 'La web usa 6 patrones de URL, cada uno correspondiente a un nivel de la taxonomía del negocio. Los patrones locales (con /sevilla) capturan intención local. Los patrones nacionales (sin ciudad) capturan búsquedas de nicho.',
        patterns: [
          { pattern: '/reparar-{dispositivo}/{ciudad}', example: '/reparar-smartwatch/sevilla', description: 'Dispositivo genérico + ciudad. La entrada más amplia al funnel local.' },
          { pattern: '/reparar-{dispositivo}/{marca}/{ciudad}', example: '/reparar-movil/samsung/sevilla', description: 'Dispositivo + marca + ciudad. Más específico, mejor CTR.' },
          { pattern: '/reparar-{dispositivo}/{reparación}/{ciudad}', example: '/reparar-iphone/bateria/sevilla', description: 'Dispositivo + tipo de reparación + ciudad. Alta intención transaccional.' },
          { pattern: '/reparar-{dispositivo}/{marca}/{reparación}/{ciudad}', example: '/reparar-movil/samsung/pantalla/sevilla', description: 'Combinación completa local. La más específica del funnel.' },
          { pattern: '/reparar-{dispositivo}/{modelo}/{reparación}', example: '/reparar-apple-watch/se/bateria', description: 'Modelo específico + reparación, sin ciudad. Para búsquedas nacionales de nicho.' },
          { pattern: '/cambiar-{reparación}-{marca}-{modelo}', example: '/cambiar-bateria-google-pixel-6a', description: 'Formato directo nacional. Captura búsquedas como "cambiar batería pixel 6a" con CTR alto (5%).' },
        ],
        appleRoutes: {
          heading: 'Rutas Premium para Apple',
          prose: 'El negocio empezó en 2009 reparando exclusivamente dispositivos Apple — la gente nos conocía por ello. Apple tiene el mayor volumen de búsqueda y las rutas más cortas reflejan esa prioridad: /iphone/14-pro en vez de /reparar-movil/apple/iphone-14-pro. Más corto, más limpio, mejor CTR. Un solo booleano cambia todo:',
          segments: [
            {
              code: `// Apple: /iphone/14-pro (corto, limpio, mejor CTR)
const records = await getRecordsModelos(true);  // modoApple = true → vista CMSAstro(Apple)
return records.map(r => ({
  params: { paramMarcaApple: r.paramMarca, paramModeloApple: r.paramModelo },
}));

// Genérico: /reparar-movil/samsung/galaxy-s21
const records = await getRecordsModelos();  // modoApple = false → vista CMSAstro
return records.map(r => ({
  params: { paramTipo: r.paramTipo, paramMarca: r.paramMarca, paramModelo: r.paramModelo },
}));`,
              annotations: [
                { label: 'modoApple = true', detail: 'Un solo booleano cambia la vista de Airtable (CMSAstro vs CMSAstro(Apple)) y la estructura de URLs. Misma página, mismo layout, dos sistemas de routing.' },
                { label: 'Rutas más cortas', detail: '/iphone/14-pro vs /reparar-movil/apple/iphone-14-pro. Apple es la marca dominante en reparaciones; sus rutas merecen URLs premium.' },
              ],
            },
          ],
        },
      },
      stack: {
        heading: 'Stack y Herramientas',
        body: 'El stack se eligió para una necesidad concreta: generar miles de páginas estáticas con datos de un CMS relacional, con el mínimo JavaScript posible en el cliente. Astro era la opción obvia para SSG puro. Airtable funcionaba como CMS porque ya era el Business OS del negocio — no tenía sentido migrar a Supabase para una web estática. DataForSEO se eligió por precio y cobertura de keywords en español.',
        items: [
          { name: 'Astro', role: 'SSG, 21 templates, JS mínimo lazy' },
          { name: 'Airtable', role: 'CMS headless, 14 tablas, ~60 campos/tabla' },
          { name: 'DataForSEO', role: 'Volúmenes de búsqueda, campo "indexable"' },
          { name: 'ERP propio', role: '867 modelos, precios, stock, fotos, reseñas' },
          { name: 'Cloudflare', role: 'CDN, edge caching, deploy' },
          { name: 'TypeScript', role: 'schema.ts de 1.677 líneas para el mapping' },
          { name: 'JSON-LD', role: '6 tipos de structured data por página' },
        ],
      },
      lessons: {
        heading: 'Lecciones Aprendidas',
        items: [
          {
            title: 'Google decide la intención del usuario, no tú.',
            detail: 'Empecé queriendo posicionar en toda España. Google tenía otros planes: interpretó que las búsquedas de reparación tienen intención local fortísima. Las páginas sin ciudad competían peor que las locales de Sevilla. La lección: construye la infraestructura completa, pero deja que los datos de GSC te digan dónde poner el foco.',
          },
          {
            title: 'El motor de decisiones es más importante que el generador.',
            detail: 'Generar 10.000 páginas es trivial. Decidir cuáles indexar basándote en datos reales de DataForSEO es lo que marca la diferencia entre pSEO con resultados y una granja de contenido thin. De las miles de combinaciones posibles, solo 4.084 están en el sitemap.',
          },
          {
            title: 'El ERP es el diferenciador competitivo, no el template.',
            detail: 'Cualquiera puede generar páginas con IA. Nadie puede generar fotos reales de antes/después, reseñas verificadas, precios duales (original y compatible), y tiempos basados en datos históricos sin un ERP integrado. El contenido único no viene del copy, viene de los datos.',
          },
          {
            title: 'Airtable escala mejor de lo que esperaba.',
            detail: '14 tablas, ~60 campos por tabla, jerarquía de 6 niveles. Con retry y backoff exponencial en la API, el build es estable. El truco: cachear las reseñas y no hacer llamadas redundantes. Para un equipo de una persona, Airtable como CMS headless funciona.',
          },
          {
            title: 'Las URLs de nicho nacional dan el mejor CTR.',
            detail: 'El formato /cambiar-bateria-google-pixel-6a tiene un CTR del 5,0% con posición media 7,8. Estas búsquedas son tan específicas que casi no tienen competencia. El volumen individual es bajo, pero multiplicado por cientos de modelos, suma.',
          },
          {
            title: 'El contenido generado sin datos de producción es thin content con mejor redacción.',
            detail: 'La diferencia entre SEO programático que funciona y una granja de contenido no es el template ni la IA — es que los datos sean reales. Precios del ERP, fotos de reparaciones reales, reseñas verificadas. Este patrón aplica a cualquier empresa con datos operacionales: e-commerce, marketplaces, SaaS con catálogo.',
          },
          {
            title: 'La taxonomía del negocio ES la arquitectura de información — no la inventes, mapéala.',
            detail: 'No diseñé la estructura de URLs desde cero. Mapée la jerarquía que ya existía en el negocio: tipo → marca → modelo → reparación → ciudad. El Business OS ya tenía esa taxonomía en Airtable. La web programática simplemente la expuso al mundo. Si tu empresa ya tiene una ontología interna, úsala.',
          },
        ],
      },
      whatThisDemonstrates: {
        heading: 'Lo Que Esto Demuestra',
        items: [
          { title: 'Diseño de sistemas end-to-end', detail: 'Desde datos del ERP hasta páginas en producción — CMS relacional, pipeline de build, motor de decisiones, optimización de crawl budget.' },
          { title: 'Automatización que escala sin intervención', detail: 'Una persona, 4.730 páginas, 26.000+ imágenes. El sistema sigue funcionando tras la venta del negocio.' },
          { title: 'Decisiones basadas en datos, no en intuición', detail: 'DataForSEO como motor de indexación. Google Search Console como feedback loop. Cada decisión respaldada por métricas reales.' },
          { title: 'Ejecución completa en contexto real', detail: 'No es un proyecto de portfolio ni un tutorial. Es un sistema de producción que generó tráfico real para un negocio real — y contribuyó a su venta.' },
        ],
      },
    },
    cta: {
      heading: 'Diseño sistemas que convierten datos operacionales en ventajas competitivas.',
      body: 'Este case study demuestra un patrón que he aplicado repetidamente: mapear la ontología del negocio, construir un pipeline data-to-deploy, y medir todo con métricas reales. Actualmente exploro roles de AI Product Manager y Solutions Architect — si tu equipo necesita a alguien que piense en sistemas y ejecute hasta producción, hablemos.',
      label: 'Hablemos',
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      items: [
        {
          q: '¿El SEO programático no es spam?',
          a: 'Solo si las páginas no aportan valor. En este caso, cada página tiene datos reales del servicio: precio actual (original y compatible), tiempo estimado basado en históricos, fotos de antes/después de reparaciones reales, y reseñas verificadas de clientes. No es contenido generado por IA ni texto de relleno. Son datos de producción del ERP.',
        },
        {
          q: '¿Solo funciona en Sevilla?',
          a: 'Las páginas locales se centran en Sevilla porque es donde está la tienda física, y Google prioriza resultados con proximidad geográfica para búsquedas de reparación. Las páginas nacionales (formato /cambiar-{pieza}-{marca}-{modelo}) funcionan sin restricción geográfica y capturan búsquedas de nicho en toda España.',
        },
        {
          q: '¿Por qué no usaste IA para generar el contenido?',
          a: 'Porque el diferenciador competitivo es que los datos son reales. Los precios salen del ERP, las fotos son de reparaciones reales, las reseñas son de clientes verificados. Una página generada por IA puede sonar bien, pero no tiene datos de producción. El blog sí se apoyó en IA para la redacción, combinado con NotebookLM para el podcast de cada artículo.',
        },
        {
          q: '¿Airtable escala con 4.700+ páginas?',
          a: 'Sí, con matices. Las 14 tablas y ~60 campos por tabla funcionan bien con un pipeline de build (no consultas en tiempo real). La clave es retry con backoff exponencial en la API y cacheo de datos frecuentes como reseñas. Para consultas en vivo a escala mayor, habría que evaluar alternativas como Supabase.',
        },
        {
          q: '¿Cómo se mantienen actualizadas las páginas?',
          a: 'Cuando cambia un precio o se añade un modelo en el ERP, el dato se actualiza en Airtable. El siguiente build regenera las páginas afectadas. Las reseñas nuevas se propagan automáticamente por la cascada familia-modelo. No hay intervención manual para el contenido.',
        },
        {
          q: '¿Por qué Astro y no Next.js?',
          a: 'Para un sitio 100% estático donde el contenido cambia con baja frecuencia, Astro genera HTML puro con mínimo JavaScript — solo componentes interactivos como el buscador y el carrusel, cargados de forma lazy. Las páginas cargan en menos de 1 segundo, los Core Web Vitals son excelentes de forma nativa, y el deploy en Cloudflare CDN es trivial.',
        },
        {
          q: '¿Qué hace DataForSEO exactamente?',
          a: 'DataForSEO proporciona el volumen de búsqueda real de cada keyword. El resultado se almacena en el campo "indexable" de Airtable. Si una combinación de dispositivo + reparación + ciudad no tiene volumen de búsqueda, la página se genera pero lleva noindex. Es el motor de decisiones que evita diluir la autoridad del dominio con páginas que Google ignoraría.',
        },
      ],
    },
    resources: {
      heading: 'Recursos',
      items: [
        { label: 'Código fuente en GitHub (scripts, layouts, rutas)', url: 'https://github.com/santifer/santifer-irepair' },
        { label: 'Santifer iRepair (la web programática)', url: 'https://santiferirepair.es' },
        { label: 'Case Study: Business OS / ERP que alimenta estas páginas', url: '/business-os-para-airtable' },
        { label: 'Astro, el framework de sitio estático', url: 'https://astro.build' },
        { label: 'DataForSEO, API de datos SEO', url: 'https://dataforseo.com' },
        { label: 'Airtable, plataforma de datos y CMS', url: 'https://airtable.com' },
      ],
    },
    footer: {
      role: 'AI Product Manager · Solutions Architect · AI FDE',
      bio: 'Construyó y vendió un negocio de 16 años en 2025. Ahora construye career-ops a tiempo completo.',
      fellowAt: 'Teaching Fellow en',
      fellowLink: 'AI Product Academy',
      copyright: 'Todos los derechos reservados.',
    },
  },
  en: {
    slug: 'programmatic-seo',
    altSlug: 'seo-programatico',
    readingTime: '37 min read',
    seo: {
      title: 'Programmatic SEO: 4,000+ Pages from an ERP | santifer.io',
      description: 'Case study: 4,730 static landing pages from Airtable as headless CMS with DataForSEO crawl budget optimization and Astro SSG. 2M+ impressions, 19K+ clicks.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Programmatic SEO',
    },
    header: {
      kicker: 'Case Study — <a>Santifer iRepair</a>',
      kickerLink: 'https://santiferirepair.es',
      h1: 'Programmatic SEO: 4,700+ Pages from an ERP',
      subtitle: 'How I generated 4,730 unique landing pages with real production data, a 14-table Airtable CMS, and DataForSEO as the decision engine. 2.26M impressions, 19K+ clicks.',
      date: 'Feb 25, 2026',
    },
    intro: {
      hook: 'In Spain\'s device repair market, nobody was doing programmatic SEO. Every combination of device, brand, model, repair type, and city was an untapped long-tail opportunity.',
      body: 'The thesis: if someone searches "iPhone battery repair Seville", a dedicated page should exist — with the real price, estimated turnaround, and photos from actual repairs. But hand-building thousands of pages wouldn\'t scale. I needed a system that auto-generated them from the ERP, smart enough to decide which ones to index and which to skip.',
      context: 'Santifer iRepair was my device repair business in Seville since 2009. Sixteen years, over 30,000 repairs. In 2024 I decided the website needed to move beyond a Squarespace brochure and start capturing the demand already sitting in Google. I built this programmatic SEO system as a competitive moat and sold the business in September 2025, at its peak.',
      tldr: {
        heading: 'In 10 seconds',
        items: [
          'Built 4,730 static landing pages from a production ERP (real pricing, photos, verified reviews)',
          'DataForSEO-powered decision engine: only pages with real search volume get indexed',
          'Result: 2.26M impressions, 19K+ organic clicks, 80% of total site traffic',
          '7 months to build, one person, sold at peak performance',
        ],
      },
    },
    sections: {
      migration: {
        heading: 'The Starting Point',
        intro: 'The business website had been running on Squarespace for years. No URL control, no canonical tags, no custom redirects. What was coming wasn\'t just a platform change — it was a triple migration: platform (Squarespace → Astro), domain (santifer.me → santiferirepair.es), and hosting (Squarespace → Vercel/Cloudflare). The first step was documenting exactly what needed fixing: a 144-page technical audit, completed as the Final Master\'s Project for the Big SEO program.',
        duplicateCallout: 'Squarespace served the same page at 4 different URLs (www, non-www, trailing slash, .html). Google saw 4 copies of every page.',
        audit: {
          heading: 'The Technical Audit',
          prose: 'The first step was a full technical audit, completed as the Final Master\'s Project for the Big SEO program. 144 pages documenting every technical aspect of the website: from traffic baseline to the last meta description.',
          baseline: [
            { value: '23.1', label: 'Avg. position' },
            { value: '↓ Declining', label: 'SISTRIX visibility' },
            { value: '21/100', label: 'Lighthouse (mobile)' },
            { value: '33/40', label: 'Items with errors' },
          ],
          findings: [
            { title: '838 duplicate H1s', detail: 'The Squarespace template injected a hidden H1 on every page, duplicating the main heading. Google saw two titles competing for relevance.' },
            { title: '1,015 cannibalizations', detail: 'Pages competing against each other for the same keywords. Home, categories, and models were stepping on each other in search results.' },
            { title: '869 structured data errors', detail: 'The LocalBusiness schema didn\'t follow schema.org recommendations. Google couldn\'t correctly interpret the business information.' },
            { title: '831 non-canonical pages', detail: 'Squarespace served 4 URLs per page without redirecting to the canonical. GSC reported them as duplicates without canonical.' },
          ],
          callout: '33 out of 40 audited technical aspects had errors. Only 7 passed. The audit didn\'t just diagnose the problems — it became the roadmap for the entire project.',
        },
        technicalDebt: {
          heading: 'The Technical Debt',
          items: [
            { title: 'No canonical tags', detail: 'www vs non-www, with/without trailing slash, with/without .html. Same page, 4 URLs. 831 non-canonical pages in GSC. Squarespace set canonical but didn\'t redirect.' },
            { title: 'No custom redirects', detail: 'Squarespace doesn\'t allow custom 301 redirects. 266 historical URLs returning 404 in GSC. Impossible to map old URLs to the new structure.' },
            { title: 'No URL slug control', detail: 'The business taxonomy already existed, but Squarespace generated redundant URLs like /reparar-iphone/reparar-iphone-x. 15 URLs over 115 characters, 10 with uppercase, keyword repeated 3 times.' },
            { title: 'Duplicate content risk', detail: '1,015 cannibalizations detected. 79 pages with thin content. URL variants without canonicals sent confusing signals to Google, diluting the domain\'s authority.' },
          ],
        },
        migrationSteps: {
          heading: 'The Migration',
          steps: [
            { label: 'Full crawl with Screaming Frog', detail: 'The crawl identified 838 pages with multiple H1s, 266 URLs returning 404, and 1,015 cannibalizations. The mapping resulted in 1,009 redirect rules.' },
            { label: 'New URL structure in Astro', detail: 'From ~80 pages to an architecture of 480+ pages optimized for 156,000 monthly transactional searches. Clean URLs: /reparar-{device}/, /reparar-{brand}/{model}/.' },
            { label: '301 redirects in vercel.json', detail: 'Dedicated project (servidor-redirecciones) deployed on Vercel solely to serve 301s. 190KB of configuration in a single file.' },
            { label: 'Intent-based redirects', detail: 'Redirect national pages to local versions. Example: /reparar-movil/reparar-samsung → /reparar-movil/samsung/sevilla.' },
          ],
        },
        redirectServer: {
          heading: 'The Redirect Server',
          prose: 'The triple migration (platform, domain, hosting) required a plan to preserve the authority accumulated on the old domain. The solution was a dedicated Vercel project whose sole purpose was serving 301 redirects. One gotcha from the domain change: Squarespace wouldn\'t allow redirecting the homepage, which blocked GSC\'s change of address. The double hop HTTP→308→301 prevented validation. Fixed in an afternoon with Vercel Redirect Domain + Cloudflare Redirect Rules for a single direct 301.',
          metrics: [
            { value: '1,009', label: 'Redirect rules' },
            { value: '190 KB', label: 'vercel.json' },
            { value: '4', label: 'Redirect tiers' },
            { value: '46', label: 'Commits in 7 months' },
          ],
          tiers: [
            { title: 'Model → model', detail: '/reparar-movil/reparar-samsung/reparar-samsung-galaxy-a12 → /reparar-movil/samsung/galaxy-a12. Clean URL, same intent.' },
            { title: 'Brand → brand + city', detail: '/reparar-movil/reparar-realme → /reparar-movil/realme/sevilla. The new structure added the city as a local signal.' },
            { title: 'Wildcard + catch-all', detail: 'Any URL not mapped in the previous tiers redirects to the homepage. Zero 404s for users and for Google.' },
          ],
          callout: 'An entire Vercel project whose sole purpose was redirecting. 1,009 rules mapped by hand because Squarespace\'s URL structure didn\'t follow a uniform pattern.',
        },
        orderCallout: 'Implement the redirects before requesting the address change in Google Search Console. Not after. The order matters.',
        migrationCost: {
          heading: 'The Cost of Migration',
          body: 'Every migration has a transition cost. 800+ pages took time to get re-indexed and key keywords dropped temporarily — "reparar iphone sevilla" went from top 2 to position 6. This was expected: Google needs time to re-evaluate a domain after an address change. Recovery came.',
          lighthouse: [
            { value: '100', label: 'Performance' },
            { value: '92', label: 'Accessibility' },
            { value: '96', label: 'Best Practices' },
            { value: '100', label: 'SEO' },
          ],
          closing: 'From a Lighthouse score of 21 on Squarespace to 100 on Astro. From DA 8 to competing in a market where leaders have 100x more traffic. The technical audit documented 33 problems; the migration solved them all at once.',
        },
      },
      theNumbers: {
        heading: 'The Numbers',
        metrics: [
          { value: '2.26M', label: 'Impressions', detail: 'Total (measured in Google Search Console)' },
          { value: '19K+', label: 'Organic clicks', detail: 'Real traffic from organic search (measured in Google Search Console)' },
          { value: '4,730', label: 'Pages with traffic', detail: 'Out of thousands generated, 4,084 indexable in sitemap, 4,730 picked up impressions' },
          { value: '10.8x', label: 'Monthly growth', detail: 'From 202 to 2,193 clicks/month in 11 months' },
          { value: '80%', label: 'Clicks from pSEO', detail: 'Organic traffic comes from programmatic pages' },
          { value: '7', label: 'Months', detail: '1 person. CMS, pipelines, DataForSEO, 26K images, and deploy' },
        ],
        timeline: 'Built March → October 2024 (7 months). One person. CMS, generation scripts, image pipeline, DataForSEO integration, and deployment — all in parallel. Production launch October 2024. If I built it today with Claude Code, it\'d take a week.',
      },
      opportunity: {
        heading: 'The Opportunity',
        body: 'Spain\'s device repair market is hyper-local. People search by city, brand, and repair type. But most shops had generic sites — a single landing for all of Spain, if they had a site at all.',
        points: [
          'Thousands of long-tail combos with virtually zero SERP competition',
          'Clear transactional intent: the user wants a repair, not information',
          'No competitor in the sector was doing programmatic SEO in Spain (2024)',
          'The ERP already had everything: 867 models, prices, turnaround times, real photos',
          'The natural business taxonomy (device, brand, model, repair, city) maps directly to URLs',
        ],
        queryExamples: [
          { query: 'reparacion moviles sevilla', clicks: 42, impressions: 1947, ctr: '2.2%', position: '2.5' },
          { query: 'reparar iphone sevilla', clicks: 51, impressions: 3314, ctr: '1.5%', position: '12.9' },
          { query: 'reparacion iphone sevilla', clicks: 46, impressions: 4315, ctr: '1.1%', position: '5.2' },
          { query: 'cambiar bateria pixel 6a', clicks: 51, impressions: 755, ctr: '6.8%', position: '6.4' },
          { query: 'servicio tecnico garmin sevilla', clicks: 36, impressions: 534, ctr: '6.7%', position: '6.5' },
          { query: 'cambiar bateria apple watch', clicks: 37, impressions: 3967, ctr: '0.9%', position: '11.7' },
        ],
      },
      twoTypes: {
        heading: 'Two Strategies, One System',
        body: 'The project started with national ambitions, but Google had other ideas. Repair searches carry strong local intent — Google favors results close to the searcher, so pages without a city couldn\'t compete. The fix: a dual strategy. Local pages for Seville (where the physical shop sits) and national niche pages for specific repairs where location matters less.',
        local: {
          title: 'Local Pages (Seville)',
          description: 'Device + brand + repair combos with "/sevilla". Google ranks these higher thanks to proximity to the physical shop. They drive the most traffic.',
          examples: [
            { url: '/reparar-smartwatch/sevilla', clicks: 615, ctr: '3.7%' },
            { url: '/reparar-iphone/bateria/sevilla', clicks: 581, ctr: '2.5%' },
            { url: '/reparar-apple-watch/sevilla', clicks: 562, ctr: '2.7%' },
            { url: '/reparar-iphone/sevilla', clicks: 466, ctr: '0.6%' },
            { url: '/reparar-ipad/sevilla', clicks: 370, ctr: '1.2%' },
          ],
        },
        national: {
          title: 'National Pages (no city)',
          description: 'Niche repairs where location matters less. The "cambiar-{part}-{brand}-{model}" format captures informational queries that convert.',
          examples: [
            { url: '/cambiar-bateria-google-pixel-6a', clicks: 372, ctr: '5.0%' },
          ],
        },
      },
      architecture: {
        heading: 'The Architecture',
        body: 'The system has four layers. Airtable works as a headless CMS with 14 tables and ~60 fields per table. The ERP feeds real production data. DataForSEO decides what gets indexed. Astro generates static HTML with minimal client-side JavaScript — only what\'s needed for UX (search, carousel), lazy-loaded.',
        layers: [
          {
            icon: 'database',
            name: 'Airtable (Headless CMS)',
            desc: '14 tables, ~60 fields per table. 6-level hierarchy: Device Type, Brand, Family, Model, Repair + local variants. Dual pricing (original and compatible parts), image inheritance, cascading social proof.',
          },
          {
            icon: 'wrench',
            name: 'ERP (Production Data)',
            desc: 'Feeds Airtable with real data: before/after photos of actual repairs, verified customer reviews, up-to-date parts inventory. 867 models, 20+ brands, 15+ repair types.',
          },
          {
            icon: 'bar-chart',
            name: 'DataForSEO (Decision Engine)',
            desc: 'Queries real search volumes for each combination. The "indexable" field in Airtable is driven directly by this data. No volume means no index.',
          },
          {
            icon: 'zap',
            name: 'Astro (Static Generation)',
            desc: '21 page templates. Generates static HTML with minimal lazy-loaded JS. 6 JSON-LD types per page. Image SEO with EXIF injection. Deployed on Cloudflare CDN.',
          },
        ],
      },
      cmsDeepDive: {
        heading: 'Inside the CMS',
        body: 'Airtable isn\'t just a spreadsheet on steroids. Here, it runs as a full relational CMS. The key: a 6-level hierarchy that mirrors exactly how the business operates.',
        tables: [
          { name: 'Device Types', purpose: 'Root level of the taxonomy', keyFields: 'slug, name, SEO description, menu order' },
          { name: 'Brands', purpose: 'Brands linked to device types', keyFields: 'slug, name, logo, compatible types' },
          { name: 'Families', purpose: 'Model grouping (e.g., iPhone 14 series)', keyFields: 'slug, hero image (inheritable), brand' },
          { name: 'Models', purpose: 'Specific devices with pricing', keyFields: 'slug, family, image (inherits from family if empty), year' },
          { name: 'Repairs', purpose: 'Repair types per model', keyFields: 'slug, original price, compatible price, turnaround, indexable' },
          { name: 'Local Variants', purpose: 'City-specific pages for local SEO', keyFields: 'model + repair + city, adjusted price, availability' },
        ],
        highlights: [
          { title: 'Dual pricing', detail: 'Each repair has a price with original parts and a price with compatible parts. The user chooses on the landing page.' },
          { title: 'Image inheritance', detail: 'If a model has no image, it inherits from its family. Cuts maintenance without leaving pages blank.' },
          { title: 'Cascading social proof', detail: 'Reviews link at the model, family, or brand level. A review for "iPhone 14 Pro" shows up on every repair page for that model.' },
          { title: 'Bridge mode', detail: 'Discontinued repairs don\'t get deleted — they\'re flagged as "bridge" and redirect to the closest alternative. Zero 404s, zero authority loss.' },
        ],
        businessOsCallout: 'This 14-table CMS is part of a larger 12-base Airtable Business OS that ran the entire business: inventory, CRM, accounting, HR, and more. <a href="/business-os-for-airtable" class="text-primary underline underline-offset-2 hover:text-primary/80">Read the full Business OS case study →</a>',
      },
      pageAnatomy: {
        heading: 'Anatomy of a Page',
        body: 'Each of the 4,700+ pages is generated from a template, but the content is unique because it comes from the ERP. Not AI-generated text or filler copy — it\'s production data.',
        components: [
          { icon: 'list', name: 'Breadcrumb + Schema', desc: 'Hierarchical navigation reflecting the taxonomy. Generates BreadcrumbList JSON-LD automatically.' },
          { icon: 'dollar-sign', name: 'Real Pricing', desc: 'Original and compatible prices, pulled from the ERP. The user sees exactly what they\'ll pay.' },
          { icon: 'clock', name: 'Estimated Turnaround', desc: 'Based on actual historical repair data. Not a generic guess.' },
          { icon: 'camera', name: 'Before/After Photos', desc: 'Real images from completed repairs. EXIF injected with geolocation and SEO metadata.' },
          { icon: 'star', name: 'Verified Reviews', desc: 'Real customer reviews linked to the model or family. With Review and AggregateRating schema.' },
          { icon: 'code', name: '6 JSON-LD Types', desc: 'LocalBusiness, Product, Service, BreadcrumbList, FAQPage, AggregateRating. Every page has full markup.' },
        ],
        screenshot: {
          src: '/pseo/ss-repair-page-full.webp',
          alt: 'Anatomy of a programmatic repair page',
          caption: 'Real example: repair page generated from the ERP. Dual pricing, real reviews, full JSON-LD.',
        },
        storytelling: {
          heading: 'Conversion Flow per Page',
          body: 'Every page follows a conversion structure designed to take the user from discovery to action:',
          steps: [
            'Hero with dual pricing (original/compatible) + direct booking CTA',
            'Model-specific specs: camera, battery, device technologies',
            'Gallery of real before/after repair photos',
            'Verified customer reviews linked to the model or family',
            'FAQ generated from ERP data (real customer questions)',
            'Final CTA with shop map and booking button',
          ],
          example: 'A user searches "repair iPhone 14 Pro screen Seville." They land on a page with pricing (€189 original / €89 compatible), estimated turnaround (45 min), 3 real repair photos of the iPhone 14 Pro, and 12 verified reviews. No navigation needed — everything they need to decide is right there.',
        },
        dynamicCopy: {
          heading: 'Dynamic Per-Model Copy',
          body: 'Every device model gets unique microcopy generated from its real hardware specs. An Airtable field stores the technical specs (camera, battery, processor, water resistance) and a prompt generates a description that varies by model. An iPhone 14 Pro talks about its 48MP camera and ProMotion display. A Pixel 7a highlights its Tensor chip and computational photography. This isn\'t generic filler — it\'s copy that only applies to THAT model, based on real hardware data. Same template, unique content on every page.',
          screenshotCopy: {
            src: '/pseo/ss-dynamic-copy-iphone12.webp',
            alt: 'iPhone 12 dynamic copy: real hardware specs generate unique text per model',
            caption: 'iPhone 12 page: storage options, RAM, Super Retina XDR OLED display, Li-Ion 2815mAh battery. All pulled from the model\'s real specs in Airtable.',
          },
          pricingHeading: 'Live Pricing from the ERP',
          pricingProse: 'The same CMS that generates the copy also syncs repair prices in real time. Airtable bridges the ERP (where parts costs and margins get updated) and the website. Each model card shows a price range calculated from the min and max of its available repairs. When a price changes in the ERP, the site rebuilds with the updated price — zero manual intervention.',
          screenshotPricing: {
            src: '/pseo/ss-category-pricing.webp',
            alt: 'iPhone category page with price ranges synced from the ERP',
            caption: 'Category page: each card shows "Desde X € hasta Y €", auto-calculated from the ERP\'s repair prices.',
          },
          pricingSegments: [
            {
              code: `let cadenaPrecio = '';
if (mostrarPrecio.startsWith('desde') && detail.precioMinCard) {
  cadenaPrecio = \`Desde \${detail.precioMinCard}\`;
}
if (mostrarPrecio === 'desdeHasta' && detail.precioMaxCard) {
  cadenaPrecio = \`\${cadenaPrecio} hasta \${detail.precioMaxCard}\`;
}
if (mostrarPrecio === 'exacto' && detail.precioMinCard) {
  cadenaPrecio = detail.precioMaxCard
    ? \`Desde \${detail.precioMinCard} hasta \${detail.precioMaxCard}\`
    : \`\${detail.precioMinCard}\`;
}`,
              annotations: [
                { label: 'Three pricing modes', detail: '"desde" (minimum only), "desdeHasta" (full range), "exacto" (fixed price or range with CTA). The mode is configured per page type.' },
                { label: 'precioMinCard / precioMaxCard', detail: 'Calculated fields in Airtable: aggregate min and max across all available repairs for that model. When a parts cost changes in the ERP, these fields recalculate automatically.' },
              ],
            },
          ],
        },
        contextSearch: {
          heading: 'Context-Aware Search',
          body: 'The search bar isn\'t a simple text filter. It runs a custom scoring algorithm — no external libraries like Fuse.js. The user types "iphone 12 pro" and the system scores all 867 models: +20 if all words match, +30 for exact match, +10 if the model name starts with the query, and penalizes extra words in the model name. Result: the 6 most relevant models, ranked by score.',
          detail: 'The interesting part is that the search is context-aware. On the homepage it searches across all 867 models from every brand and device type. But on a brand page (e.g., Samsung), it only searches Samsung models. On a device type page (e.g., tablets), only tablets. The same component, with filter props (`filtroTipo`, `filtroMarca`), behaves differently depending on where it\'s embedded. Models lazy-load on first input focus and cache in localStorage so subsequent searches are instant.',
          codeProse: 'Here\'s the actual scoring function — 30 lines, zero dependencies:',
          codeSegments: [
            {
              code: `function calcularPuntuacion(modelo, terminosBusqueda) {
  let puntuacion = 0;
  const nombreModelo = modelo.n.toLowerCase();

  const todasPresentes = terminosBusqueda.every(t => nombreModelo.includes(t));

  if (todasPresentes) {
    puntuacion += 20;
    const palabrasModelo = nombreModelo.split(/\\s+/);
    const extras = palabrasModelo.filter(p => !terminosBusqueda.includes(p)).length;
    puntuacion -= extras * 2;

    if (nombreModelo === terminosBusqueda.join(' ')) puntuacion += 30;
    if (nombreModelo.startsWith(terminosBusqueda.join(' '))) puntuacion += 10;
  }
  return puntuacion;
}`,
              annotations: [
                { label: '+20 base', detail: 'All terms must be present. "iphone 12 pro" matches "Apple iPhone 12 Pro" but not "Apple iPhone 12".' },
                { label: '-2 per extra word', detail: 'Penalizes long names. "Apple iPhone 12 Pro Max" scores lower than "Apple iPhone 12 Pro" for the query "iphone 12 pro".' },
                { label: '+30 exact, +10 starts-with', detail: 'Exact matches dominate. 30 lines, zero dependencies, outperforming Fuse.js for this specific domain.' },
              ],
            },
          ],
        },
      },
      decisionEngine: {
        heading: 'The Decision Engine',
        body: 'The system generates thousands of pages (well beyond the 4,730 that received traffic), but not all deserve to be indexed. If nobody searches "repair front camera iPhone 11", that page shouldn\'t compete on Google — but it needs to exist for the user browsing from the iPhone 11 page who needs exactly that repair. The key is separating SEO from UX. The decision engine queries DataForSEO for real search volume on each combination, and stores the result in the "indexable" field in <a href="https://github.com/santifer/santifer-irepair/blob/main/src/lib/airtable.ts" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">airtable.ts</a>.',
        rules: [
          {
            condition: 'High search volume (DataForSEO)',
            action: 'Indexable page',
            detail: 'If the keyword has significant volume, the page is generated with meta robots "index, follow", included in the sitemap, and receives priority internal linking.',
          },
          {
            condition: 'Low or zero search volume',
            action: 'Noindex page (UX only)',
            detail: 'The page exists for user experience and internal navigation, but carries meta robots "noindex" and is excluded from the sitemap.',
          },
          {
            condition: 'No service data in the ERP',
            action: 'Page not generated',
            detail: 'If there\'s no real service data (price, availability), the page doesn\'t get built. Zero thin content.',
          },
          {
            condition: 'Discontinued repair',
            action: 'Bridge redirect',
            detail: 'The page is flagged as "bridge" and returns a 301 redirect to the closest alternative. Preserves accumulated authority.',
          },
        ],
        stats: 'The system generates thousands of pages total. Of those, 4,084 made it into the sitemap as indexable. 4,730 picked up impressions from Google. The rest aren\'t indexed but still exist for the user navigating the site.',
      },
      pipeline: {
        heading: 'Build Pipeline',
        body: 'The pipeline turns CMS data into a deploy-ready static site. Fully automated. schema.ts alone spans 1,677 lines mapping the Airtable hierarchy to Astro types.',
        steps: [
          { label: 'Airtable API', desc: 'Record extraction with retry and exponential backoff' },
          { label: 'Schema Mapping', desc: '1,677 lines transforming the 6-level hierarchy into TypeScript types' },
          { label: 'Review Cache', desc: 'Reviews are cached to avoid redundant API calls' },
          { label: 'getStaticPaths', desc: 'Generates static routes from the full taxonomy' },
          { label: 'ReparacionLayout', desc: '21 page templates rendering based on taxonomy level' },
          { label: 'Astro SSG', desc: 'Static build with minimal lazy-loaded JavaScript' },
          { label: 'Optimization', desc: 'Compressed images, EXIF injection, filtered sitemap, internal linking' },
          { label: 'Cloudflare CDN', desc: 'Deployment with cache invalidation and global edge caching' },
        ],
        dataPipeline: {
          heading: 'Retry with Exponential Backoff',
          prose: 'The pipeline starts by pulling data from Airtable. Fourteen tables, thousands of records — API calls need to be resilient. One generic function handles all of it:',
          segments: [
            {
              code: `function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  retries: number = 5,
  delayTime: number = 500
): Promise<T> {
  try {
    return await operation();
  } catch (error: any) {
    if (retries > 0 && (error.statusCode === 502 || error.statusCode === 503)) {
      await delay(delayTime);
      return retryWithBackoff(operation, retries - 1, delayTime * 2);
    }
    throw error;
  }
}`,
              annotations: [
                { label: 'Generic <T>', detail: 'A single function for every record type (ITipos, IMarcas, IModelos, IReparaciones...).' },
                { label: '502/503 only', detail: 'Only retries server errors (Bad Gateway, Service Unavailable). Client errors (400, 401) fail immediately.' },
                { label: 'delayTime * 2', detail: 'Exponential backoff: 500ms → 1s → 2s → 4s → 8s. 5 retries = 15.5s max before giving up.' },
              ],
            },
          ],
        },
        reviewCache: {
          heading: 'Review Cache System',
          prose: 'Reviews are the costliest calls in the build: 4,700+ pages might need them, but only 607 exist. Load them all once at build start, let every page query from memory:',
          segments: [
            {
              code: `let caches: { [key: string]: Reseña[] | undefined } = {};

async function loadReseñas(baseName: string, cacheKey: string): Promise<void> {
  if (caches[cacheKey]) return;

  const fetchOperation = () => new Promise<Reseña[]>((resolve, reject) => {
    const allRecords: Reseña[] = [];
    base(baseName)
      .select({ view: 'CMSAstro', fields: ReseñaFields })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => allRecords.push(mapReseñaFields(record.fields)));
          fetchNextPage();
        },
        (err) => err ? reject(err) : resolve(allRecords)
      );
  });

  caches[cacheKey] = await retryWithBackoff(fetchOperation);
}

export async function ensureCachesLoaded(): Promise<void> {
  await Promise.all([
    loadReseñas('Reseñas sincronizar Astro', 'cachedReseñas'),
    loadReseñas('Reseñas Internas', 'cachedReseñasInternas')
  ]);
}

// Runs on module import
ensureCachesLoaded().catch(console.error);`,
              annotations: [
                { label: 'Module-level call', detail: 'ensureCachesLoaded() runs when the module is imported. In Astro SSG, all reviews load into memory before page generation begins.' },
                { label: 'Promise.all', detail: 'Both sources (Google My Business + internal surveys) load in parallel.' },
                { label: 'Trade-off: O(n) find', detail: 'Pages look up by ID with .find(). Linear scan, but with 607 reviews it eliminates hundreds of API calls. The right trade-off for a build pipeline.' },
              ],
            },
          ],
        },
      },
      contentAutomation: {
        heading: 'Automated Content Pipeline',
        body: 'Generating thousands of pages is half the job. Each one needs unique images, metadata, and copy. Eight Node.js scripts (1,411 lines total) automate all visual and textual content production — zero manual work. Everything connects back to the 12 Airtable bases in the Business OS. Result: over 26,000 auto-generated images.',
        repoLink: '<a href="https://github.com/santifer/santifer-irepair/tree/main/scripts" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">Explore the pipeline scripts on GitHub →</a>',
        pipelines: [
          {
            icon: 'camera',
            name: 'Parametric Image Generation',
            desc: 'One device photo spawns 18 variants automatically — one per repair type (screen, battery, camera, charging port...) plus a generic image. Device photos are pulled from GSM Arena and composited with PNG repair overlays. 867 models × 18 variants = 15,500+ unique images, no Photoshop required.',
          },
          {
            icon: 'code',
            name: 'EXIF Injection for Local SEO',
            desc: 'Every image gets Seville GPS coordinates and an SEO description injected into its EXIF metadata. Google Images reads these for local search ranking. Automated with piexifjs and UCS-2 encoding.',
          },
          {
            icon: 'star',
            name: 'Before/After Photo Pipeline',
            desc: '10,000+ real repair photos processed automatically. Downloaded from Airtable, resized, background-blurred, composited to WebP, and the resulting URLs written back to Airtable. Bidirectional ETL: Airtable → processing → Airtable.',
          },
          {
            icon: 'zap',
            name: 'Dynamic Per-Model Copy',
            desc: 'Each device model has a field with its real hardware specs (camera, battery, processor). A prompt turns those specs into unique microcopy for each page. This isn\'t AI generating content — it\'s AI describing real hardware data. Every page reads differently because every device IS different.',
          },
        ],
        exifCode: {
          prose: 'Every repair image gets the shop\'s GPS coordinates injected into EXIF metadata. Google Images uses this data to surface images in local search results:',
          segments: [
            {
              code: `// Shop coordinates in Seville
gps[piexif.GPSIFD.GPSLatitude] = convertToDMS(37.38606);
gps[piexif.GPSIFD.GPSLatitudeRef] = 'N';
gps[piexif.GPSIFD.GPSLongitude] = convertToDMS(-5.98585);
gps[piexif.GPSIFD.GPSLongitudeRef] = 'W';

// SEO description in both EXIF fields
exifObj['0th'][piexif.ImageIFD.ImageDescription] = description;

// UCS-2 for Unicode support (Spanish accents, ñ)
const userComment = Buffer.concat([
  Buffer.from('UNICODE\\0\\0\\0', 'ascii'),
  encodeUCS2(description),
]);
exifObj['Exif'][piexif.ExifIFD.UserComment] = userComment.toString('binary');`,
              annotations: [
                { label: 'Fixed GPS', detail: 'Every repair image receives the exact shop coordinates in Seville. Google Images uses EXIF GPS for local results.' },
                { label: 'Dual description', detail: 'SEO text goes in ImageDescription (standard EXIF) and UserComment (extended EXIF). Different parsers read different fields.' },
                { label: 'UCS-2 encoding', detail: 'Spanish characters (accents, ñ) require Unicode encoding. The EXIF spec mandates UCS-2 with a UNICODE\\0\\0\\0 prefix.' },
              ],
            },
          ],
        },
        cascade: {
          heading: 'Content Cascade: One Review, Six Pages',
          body: 'The system automatically inherits content through the taxonomy. A review for "iPhone 12 screen repair" doesn\'t just appear on that page — it shows up everywhere it\'s relevant:',
          example: [
            { page: '/reparar-movil/apple/iphone-12/pantalla/sevilla', label: 'Model + repair + city' },
            { page: '/reparar-iphone/pantalla/sevilla', label: 'Device + repair + city' },
            { page: '/reparar-movil/apple/sevilla', label: 'Device + brand + city' },
            { page: '/reparar-iphone/sevilla', label: 'Device + city' },
            { page: '/reparar-movil/pantalla/sevilla', label: 'Device + repair + city' },
            { page: '/reparar-movil/sevilla', label: 'Device + city' },
          ],
          detail: 'The same logic applies to before/after photos: a photo from an iPhone 12 screen repair appears on every page in that taxonomy branch. This multiplies unique content without duplicating or generating anything artificially. Each page accumulates more social proof and visual content as the business grows.',
        },
        stats: '26,000+ auto-generated images. 867 models with 18 variants each. 10,000+ real repair photos. Zero manual intervention. The 12 Business OS bases feed the entire pipeline.',
      },
      imagePipeline: {
        heading: 'Inside the Image Pipeline',
        intro: 'The previous section describes the pipeline at a high level. Here you can see exactly how it works: the actual overlay templates, the composition code, and what happens when you run it across 867 different models.',
        overlayShowcase: {
          heading: 'The Overlay Templates',
          body: 'Each repair type has a 384×256 pixel PNG overlay. The overlay visually represents which part gets repaired: a cracked screen, a battery, a camera... 17 templates total, each designed to composite over any device photo.',
          items: [
            { src: 'pantalla.png', altEs: 'Overlay de reparación de pantalla', altEn: 'Screen repair overlay' },
            { src: 'bateria.png', altEs: 'Overlay de cambio de batería', altEn: 'Battery replacement overlay' },
            { src: 'camara-trasera.png', altEs: 'Overlay de cámara trasera', altEn: 'Rear camera overlay' },
            { src: 'puerto-carga.png', altEs: 'Overlay de puerto de carga', altEn: 'Charging port overlay' },
            { src: 'tapa-trasera.png', altEs: 'Overlay de tapa trasera', altEn: 'Back cover overlay' },
            { src: 'cristal.png', altEs: 'Overlay de cambio de cristal', altEn: 'Glass replacement overlay' },
          ],
        },
        compositionProcess: {
          heading: 'The Composition Process',
          body: 'Each repair image is generated in 6 steps, fully automated with a Node.js script and Sharp.js:',
          steps: [
            { label: 'Download device photo', detail: 'The official device photo is pulled from GSM Arena and stored temporarily.' },
            { label: 'Create 384×256 white canvas', detail: 'Sharp.js creates a blank base image at 384×256 pixels with an alpha channel.' },
            { label: 'Overlay the repair PNG', detail: 'The repair template (screen, battery, etc.) is composited as the first layer on the canvas.' },
            { label: 'Center device at x=96', detail: 'The device photo is proportionally resized and centered at x=96, leaving room for the overlay on the right.' },
            { label: 'Export to WebP', detail: 'The result is exported as optimized WebP. Each image weighs ~5-8 KB.' },
            { label: 'Repeat ×17 repairs + hero', detail: 'The process repeats for all 17 repair types plus a generic hero image at 256×256. Total: 18 images per model.' },
          ],
        },
        codeSnippet: {
          heading: 'The Actual Code',
          body: 'This is the real snippet from <a href="https://github.com/santifer/santifer-irepair/blob/main/scripts/generarImagenesReparacionesModelos.mjs" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">generarImagenesReparacionesModelos.mjs</a> that generates each repair image:',
          segments: [
            {
              code: `await sharp({
  create: {
    width: 384, height: 256,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  }
})
  .png()
  .composite([
    { input: overlayPath },
    { input: devicePhoto,
      top: Math.round(top),
      left: Math.round(left) }
  ])
  .webp()
  .toFile(outputPath)`,
              annotations: [
                { label: 'Canvas', detail: 'Creates a blank 384×256 image with a white background and alpha channel. This is the canvas everything composites onto.' },
                { label: 'Composition order', detail: 'Overlay first (repair template), then the device photo. Order matters: the overlay sits behind the device.' },
                { label: 'Positioning', detail: 'The device photo is vertically centered and positioned at x≈96. This leaves visual room for the repair overlay to be visible on the right.' },
              ],
            },
          ],
        },
        onePhotoDemo: {
          heading: '1 Photo → 18 Variants',
          body: 'From a single iPhone 14 Pro photo, the pipeline automatically generates 18 unique images: one generic hero and 17 repair variants. Each variant composites the device photo with a specific overlay.',
          hero: {
            src: '/pseo/demo/apple-iphone-14-pro/reparar-apple-iphone-14-pro.webp',
            alt: 'iPhone 14 Pro — auto-generated generic hero image',
            caption: 'Hero image: the iPhone 14 Pro photo centered on a 256×256 canvas, no overlay.',
          },
          variants: [
            { src: 'cambiar-pantalla-apple-iphone-14-pro.webp', altEs: 'Cambiar pantalla iPhone 14 Pro', altEn: 'iPhone 14 Pro screen replacement' },
            { src: 'cambiar-bateria-apple-iphone-14-pro.webp', altEs: 'Cambiar batería iPhone 14 Pro', altEn: 'iPhone 14 Pro battery replacement' },
            { src: 'cambiar-camara-trasera-apple-iphone-14-pro.webp', altEs: 'Cambiar cámara trasera iPhone 14 Pro', altEn: 'iPhone 14 Pro rear camera replacement' },
            { src: 'cambiar-puerto-carga-apple-iphone-14-pro.webp', altEs: 'Cambiar puerto de carga iPhone 14 Pro', altEn: 'iPhone 14 Pro charging port replacement' },
            { src: 'cambiar-tapa-trasera-apple-iphone-14-pro.webp', altEs: 'Cambiar tapa trasera iPhone 14 Pro', altEn: 'iPhone 14 Pro back cover replacement' },
            { src: 'cambiar-cristal-apple-iphone-14-pro.webp', altEs: 'Cambiar cristal iPhone 14 Pro', altEn: 'iPhone 14 Pro glass replacement' },
            { src: 'cambiar-altavoz-apple-iphone-14-pro.webp', altEs: 'Cambiar altavoz iPhone 14 Pro', altEn: 'iPhone 14 Pro speaker replacement' },
            { src: 'cambiar-microfono-apple-iphone-14-pro.webp', altEs: 'Cambiar micrófono iPhone 14 Pro', altEn: 'iPhone 14 Pro microphone replacement' },
            { src: 'cambiar-auricular-apple-iphone-14-pro.webp', altEs: 'Cambiar auricular iPhone 14 Pro', altEn: 'iPhone 14 Pro earpiece replacement' },
          ],
          caption: {
            es: '9 de las 17 variantes generadas automáticamente para el iPhone 14 Pro. Cada imagen combina la foto real del dispositivo con un overlay de reparación específico.',
            en: '9 of the 17 auto-generated variants for the iPhone 14 Pro. Each image composites the real device photo with a specific repair overlay.',
          },
        },
        crossDeviceDemo: {
          heading: 'Same Pipeline, Different Device',
          body: 'The same process applies to any device. The photo changes, the overlays stay the same. That\'s what makes it possible to scale to 867 models with zero manual work.',
          heroes: [
            { src: '/pseo/demo/apple-iphone-14-pro/reparar-apple-iphone-14-pro.webp', alt: 'iPhone 14 Pro — hero' },
            { src: '/pseo/demo/samsung-galaxy-s23-ultra/reparar-samsung-galaxy-s23-ultra.webp', alt: 'Samsung Galaxy S23 Ultra — hero' },
            { src: '/pseo/demo/reparar-xiaomi-12.webp', alt: 'Xiaomi 12 — hero' },
          ],
          comparison: [
            { src: '/pseo/demo/apple-iphone-14-pro/cambiar-pantalla-apple-iphone-14-pro.webp', alt: 'iPhone 14 Pro screen replacement' },
            { src: '/pseo/demo/samsung-galaxy-s23-ultra/cambiar-pantalla-samsung-galaxy-s23-ultra.webp', alt: 'Samsung Galaxy S23 Ultra screen replacement' },
          ],
          comparisonCaption: {
            es: 'Mismo overlay de "cambiar pantalla", diferente dispositivo. La plantilla es idéntica — lo que cambia es la foto del modelo.',
            en: 'Same "screen replacement" overlay, different device. The template is identical — what changes is the model photo.',
          },
        },
        scale: {
          heading: 'The Scale',
          metrics: [
            { value: '867', label: 'Models', detail: 'Unique devices with generated images' },
            { value: '17', label: 'Overlays', detail: 'Repair templates (screen, battery, camera...)' },
            { value: '18', label: 'Imgs/model', detail: '17 repairs + 1 hero per device' },
            { value: '15,606', label: 'Composites', detail: 'Total auto-generated images' },
          ],
        },
      },
      reviewsPipeline: {
        heading: 'Reviews Pipeline',
        intro: 'Reviews are the most powerful social proof on every page. But managing hundreds of customer profiles, syncing two sources, and cascading trust signals across the entire taxonomy requires its own pipeline.',
        sourceSync: {
          heading: 'Source & Sync',
          body: 'Reviews come from two sources: Google My Business (publicly verified) and internal post-repair surveys. Both sync to Airtable and normalize into a single format.',
          table: {
            headers: ['Table', 'Source', 'Key fields'],
            rows: [
              ['Reseñas sincronizar Astro', 'Google My Business', 'quote, name, rating, imageUrl, response'],
              ['Reseñas Internas', 'Post-repair surveys', 'quote, name, rating, imageUrl, linked model'],
            ],
          },
        },
        imageProcessing: {
          heading: 'Profile Photo Processing',
          body: 'Every review with a profile photo goes through an automated processing pipeline:',
          steps: [
            { label: 'Download photo from Airtable', detail: 'The profile photo URL is downloaded from the Airtable attachment field.' },
            { label: 'Convert to WebP quality 95', detail: 'Sharp.js converts the image to WebP at quality 95 to preserve facial detail.' },
            { label: 'Save to /bg/res/', detail: 'The file is saved with a semantic name: reparacion-{type}-{model}-{name}-{date}.webp' },
            { label: 'Write URL back to Airtable', detail: 'The resulting URL is written back to the corresponding field. Bidirectional ETL.' },
          ],
        },
        codeSnippet: {
          heading: 'The Actual Code',
          body: 'This is the real snippet from `generarImagenesReseñas.mjs` that processes each profile photo:',
          segments: [
            {
              code: `const imageBuffer = await fetch(attachmentUrl)
  .then(r => r.arrayBuffer())

await sharp(Buffer.from(imageBuffer))
  .webp({ quality: 95 })
  .toFile(outputPath)

// Write processed URL back to Airtable
await base('Reseñas sincronizar Astro')
  .update(record.id, {
    'imagen_procesada': outputUrl
  })`,
              annotations: [
                { label: 'Dimension preservation', detail: 'No resizing — profile photos keep their original dimensions for maximum quality in the carousel.' },
                { label: 'WebP quality 95', detail: 'Higher quality than repair photos (85) because profile photos are smaller and detail matters more.' },
                { label: 'Bidirectional ETL', detail: 'Airtable is both source AND destination: the photo is downloaded, processed, and the resulting URL is written back to the record.' },
              ],
            },
          ],
        },
        cascade: {
          heading: 'Social Proof Cascade',
          body: 'Reviews don\'t just appear on one page — they inherit across the entire taxonomy. A review linked to a model propagates to every page where that model is relevant.',
          points: [
            '"iPhone 14 Pro" review → appears on every repair page for that model, in every city',
            '"iPhone 14" family review → appears on all models in the family (14, 14 Plus, 14 Pro, 14 Pro Max)',
            '"Apple" brand review → appears on aggregated brand pages like /reparar-movil/apple/sevilla',
            'The cascade is automatic: link the review to the right level and the build distributes it',
          ],
        },
        profileDemo: {
          heading: 'Hundreds of Profiles Processed',
          body: 'Real customer profiles processed by the pipeline. Each photo was downloaded, converted to WebP, and linked back to Airtable.',
          items: [
            { src: 'victor.webp', altEs: 'Víctor — reparación de pantalla Samsung Galaxy A70', altEn: 'Victor — Samsung Galaxy A70 screen repair' },
            { src: 'sarah.webp', altEs: 'Sarah — reparación de auricular iPhone 11', altEn: 'Sarah — iPhone 11 earpiece repair' },
            { src: 'cristina.webp', altEs: 'Cristina — reparación de auricular iPhone 12', altEn: 'Cristina — iPhone 12 earpiece repair' },
            { src: 'ricardo.webp', altEs: 'Ricardo — cambio de batería Google Pixel 4', altEn: 'Ricardo — Google Pixel 4 battery replacement' },
            { src: 'manolo.webp', altEs: 'Manolo — reparación de batería iPhone 11 Pro Max', altEn: 'Manolo — iPhone 11 Pro Max battery repair' },
            { src: 'fernando.webp', altEs: 'Fernando — reparación de táctil iPad 5', altEn: 'Fernando — iPad 5 touch repair' },
            { src: 'susana.webp', altEs: 'Susana — reparación de pantalla iPhone XS', altEn: 'Susana — iPhone XS screen repair' },
            { src: 'teresa.webp', altEs: 'Teresa — reparación de pantalla iPhone 8 Plus', altEn: 'Teresa — iPhone 8 Plus screen repair' },
            { src: 'luisa.webp', altEs: 'Luisa — reparación de batería iPhone 6 Plus', altEn: 'Luisa — iPhone 6 Plus battery repair' },
          ],
          caption: {
            es: 'Perfiles reales de clientes. Cada foto se descarga, convierte a WebP y vincula de vuelta a Airtable.',
            en: 'Real customer profiles. Each photo is downloaded, converted to WebP, and linked back to Airtable.',
          },
        },
        carouselCro: {
          heading: 'Rendering: CRO Carousel',
          body: 'In production, reviews render in a carousel with 9-second auto-rotation, a visual progress bar, and dot navigation. The top 20 reviews are visible directly; the rest expand under a "Show more" button. All server-rendered — zero JavaScript for the base carousel.',
          callout: 'Automatic filter: only reviews with ≥5★ and a written comment appear first. Reviews without text or below 5 stars fall below the fold.',
        },
        scale: {
          heading: 'The Scale',
          metrics: [
            { value: '600+', label: 'Profiles processed', detail: 'Profile photos converted to WebP' },
            { value: '2', label: 'Sources', detail: 'Google My Business + internal surveys' },
            { value: '9s', label: 'Rotation', detail: 'CRO carousel auto-rotation interval' },
            { value: '≥5★', label: 'Priority', detail: '5-star reviews with comments shown first' },
          ],
        },
      },
      repairedDevicesPipeline: {
        heading: 'Before/After Pipeline',
        intro: 'Every completed repair generates photographic evidence: 4 photos documenting the device\'s state before and after. This pipeline processes those photos automatically and distributes them across the site.',
        captureProtocol: {
          heading: 'Capture Protocol',
          body: 'Every completed repair at the shop follows a 4-photo protocol:',
          steps: [
            { label: 'Front before', detail: 'Front-facing photo of the device before repair. Shows visible damage (cracked screen, marks, etc.).' },
            { label: 'Front after', detail: 'Front-facing photo after repair. Same angle for direct comparison.' },
            { label: 'Back before', detail: 'Back photo before repair. Documents the device\'s overall condition.' },
            { label: 'Back after', detail: 'Back photo after repair. Completes the visual documentation.' },
          ],
          privacyNote: 'The `difuminar` flag in Airtable marks photos that need blurring: screens showing notifications, personal data, etc. Blur is applied automatically in the pipeline.',
        },
        imageProcessing: {
          heading: 'Automated Processing',
          body: 'Each photo goes through 6 processing steps with Sharp.js:',
          steps: [
            { label: 'Download from Airtable', detail: 'The original photo is downloaded from the repair record\'s attachment field.' },
            { label: 'Resize to 1/4 resolution', detail: 'The image is scaled to 25% of its original size. Enough for web, cuts file size dramatically.' },
            { label: 'Conditional blur (sigma 8)', detail: 'If the `difuminar` flag is set, a Gaussian blur at sigma 8 is applied. Protects personal data visible on screen.' },
            { label: 'Semi-transparent white overlay', detail: 'A 30% white layer is composited over the background for consistent contrast and a clean look.' },
            { label: 'Export to WebP quality 85', detail: 'Quality 85 — lower than profile photos (95) because at 1/4 resolution the extra detail isn\'t noticeable.' },
            { label: 'Write slug back', detail: 'The processed filename is written back to Airtable so the Astro build can find it.' },
          ],
        },
        codeSnippet: {
          heading: 'The Actual Code',
          body: 'This is the real snippet from <a href="https://github.com/santifer/santifer-irepair/blob/main/scripts/CasosExito.mjs" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">CasosExito.mjs</a> that processes each repair photo:',
          segments: [
            {
              code: `let pipeline = sharp(inputBuffer)
  .resize({
    width: Math.round(metadata.width / 4),
    height: Math.round(metadata.height / 4)
  })

if (record.fields.difuminar) {
  pipeline = pipeline.blur(8)
}

await pipeline
  .composite([{
    input: whiteOverlay,
    blend: 'over'
  }])
  .webp({ quality: 85 })
  .toFile(outputPath)`,
              annotations: [
                { label: 'Resize 1/4', detail: 'Scales to one quarter. A 4032×3024 photo becomes 1008×756 — perfect for web, drops file size from ~3MB to ~30KB.' },
                { label: 'Conditional blur', detail: 'Only applied when the `difuminar` field is set in Airtable. Sigma 8 blurs notifications and personal data visible on screen.' },
                { label: 'Quality 85 vs 95', detail: 'Lower quality than profile photos because at 1/4 resolution the extra detail doesn\'t add value. Saves ~40% file size per image.' },
              ],
            },
          ],
        },
        demo: {
          heading: 'Real Result: iPhone 14 Pro',
          body: 'These are real photos processed by the pipeline. Front and back, before and after repair.',
          frontal: [
            { src: '/pseo/before-after/iphone-14-pro-front-before.webp', alt: 'iPhone 14 Pro front — before repair' },
            { src: '/pseo/before-after/iphone-14-pro-front-after.webp', alt: 'iPhone 14 Pro front — after repair' },
          ],
          frontalCaption: 'iPhone 14 Pro — front before and after',
          trasera: [
            { src: '/pseo/before-after/iphone-14-pro-back-before.webp', alt: 'iPhone 14 Pro back — before repair' },
            { src: '/pseo/before-after/iphone-14-pro-back-after.webp', alt: 'iPhone 14 Pro back — after repair' },
          ],
          traseraCaption: 'iPhone 14 Pro — back before and after',
        },
        crossDeviceDemo: {
          heading: 'Same Pipeline, Different Brands',
          body: 'The pipeline works the same for any brand and model. Here it is applied to a Samsung Galaxy A51 and a Xiaomi Redmi Note 9S.',
          samsung: [
            { src: '/pseo/before-after/samsung-a51-before.webp', alt: 'Samsung Galaxy A51 — before repair' },
            { src: '/pseo/before-after/samsung-a51-after.webp', alt: 'Samsung Galaxy A51 — after repair' },
          ],
          samsungCaption: 'Samsung Galaxy A51 — before and after',
          xiaomi: [
            { src: '/pseo/before-after/xiaomi-note9s-before.webp', alt: 'Xiaomi Redmi Note 9S — before repair' },
            { src: '/pseo/before-after/xiaomi-note9s-after.webp', alt: 'Xiaomi Redmi Note 9S — after repair' },
          ],
          xiaomiCaption: 'Xiaomi Redmi Note 9S — before and after',
          caption: {
            es: 'Mismo pipeline de procesamiento para cualquier marca. Las fotos se descargan, redimensionan, difuminan si es necesario y exportan a WebP automáticamente.',
            en: 'Same processing pipeline for any brand. Photos are downloaded, resized, blurred if needed, and exported to WebP automatically.',
          },
        },
        naming: {
          heading: 'Naming Convention',
          body: 'Each photo follows a strict naming convention that lets the Astro build find them automatically:',
          pattern: '{date}-reparacion-{brand}-{model}-{orderId}-{1|2|3|4}.webp',
          suffixes: [
            { title: 'Suffix -1', detail: 'Front before repair' },
            { title: 'Suffix -2', detail: 'Front after repair' },
            { title: 'Suffix -3', detail: 'Back before repair' },
            { title: 'Suffix -4', detail: 'Back after repair' },
          ],
        },
        scale: {
          heading: 'The Scale',
          metrics: [
            { value: '10,342', label: 'Photos processed', detail: 'Real repair photos converted to WebP' },
            { value: '4', label: 'Angles', detail: 'Front before/after + back before/after' },
            { value: '1/4', label: 'Resolution', detail: 'Resized to 25% of original for web' },
            { value: 'Q85', label: 'WebP quality', detail: 'Optimized quality for repair photos' },
          ],
        },
      },
      growth: {
        heading: 'Growth Curve',
        body: 'Launched in October 2024. The first months were pure indexation momentum. After an initial peak in January, traffic flatlined from February through June — and it wasn\'t seasonality. It was a restructuring: the original version generated both national and local pages for every combination, but there were too many and Google clearly favored local intent. I redirected national pages to their local /sevilla equivalents, keeping only niche repairs in national format (like /cambiar-bateria-iphone-11) where specificity outweighs the lack of localization. While Google re-indexed the new structure, traffic stayed flat. Once consolidated, growth took off again — peaking in September 2025 at 2,193 clicks.',
        monthly: [
          { month: 'Oct 2024', clicks: 202, impressions: 16420, note: 'Launch' },
          { month: 'Nov 2024', clicks: 748, impressions: 69054 },
          { month: 'Dec 2024', clicks: 949, impressions: 77387 },
          { month: 'Jan 2025', clicks: 1277, impressions: 110836 },
          { month: 'Feb 2025', clicks: 935, impressions: 100558, note: 'National → local restructure' },
          { month: 'Mar 2025', clicks: 1191, impressions: 118826 },
          { month: 'Apr 2025', clicks: 1027, impressions: 106744 },
          { month: 'May 2025', clicks: 936, impressions: 97137 },
          { month: 'Jun 2025', clicks: 996, impressions: 121088 },
          { month: 'Jul 2025', clicks: 1611, impressions: 150927, note: 'Post-restructure' },
          { month: 'Aug 2025', clicks: 1789, impressions: 164791 },
          { month: 'Sep 2025', clicks: 2193, impressions: 164440, note: 'Peak · Business sold' },
        ],
        insight: 'From 202 to 2,193 clicks/month in 11 months. The Feb–Jun plateau coincides with the national-to-local URL restructuring — Google needed time to re-index the new architecture. Once consolidated, traffic jumped 62% in a single month (Jun → Jul). The system keeps running under the new owner.',
        milestones: {
          heading: 'Google Search Console Milestones',
          body: 'Google celebrates traffic milestones with badges. In 3 months we went from 1.2K to 2K monthly clicks — the last badge arrived right as we closed the business sale.',
          items: [
            { src: '/pseo/gsc-1.2k.webp', label: '1.2K clicks', date: 'Jul 18, 2025' },
            { src: '/pseo/gsc-1.5k.webp', label: '1.5K clicks', date: 'Aug 3, 2025' },
            { src: '/pseo/gsc-1.8k.webp', label: '1.8K clicks', date: 'Sep 11, 2025' },
            { src: '/pseo/gsc-2k.webp', label: '2K clicks', date: 'Sep 22, 2025' },
          ],
        },
      },
      results: {
        heading: 'Results',
        body: 'Cumulative metrics since launch (October 2024 through February 2026), directly from Google Search Console:',
        metrics: [
          { value: '19,388', label: 'Organic clicks', detail: '17 months of operation, Oct 2024 → Feb 2026' },
          { value: '1.17%', label: 'Average CTR', detail: 'Across 2.26M total impressions' },
          { value: '4,084', label: 'URLs in sitemap', detail: 'Only those that pass the DataForSEO decision engine' },
          { value: '<1s', label: 'Page load time', detail: 'Astro SSG with minimal lazy JS + Cloudflare CDN' },
        ],
        transition: 'But these results didn\'t come from nowhere. The starting point was a Squarespace website with technical problems that needed solving before the programmatic system could be built.',
      },
      crawlBudget: {
        heading: 'Crawl Budget Optimization',
        body: 'With 4,700+ pages, managing crawl budget is critical — per Google Search Central\'s crawl budget documentation. Google shouldn\'t waste time crawling pages that won\'t rank. The 700+ robots.txt rules add to the 1,009 redirects inherited from the migration.',
        strategies: [
          {
            title: 'Selective noindex with DataForSEO',
            detail: 'The "indexable" field in Airtable is fed directly from DataForSEO volume data. Pages without search volume get noindex. Not an arbitrary call — it\'s data-driven.',
          },
          {
            title: 'Filtered sitemap (4,084 URLs)',
            detail: 'The sitemap.xml only includes indexable URLs. Out of 4,730 pages with impressions, just 4,084 made it into the sitemap. Google doesn\'t discover the rest through this channel.',
          },
          {
            title: 'URL structure with 6 patterns',
            detail: 'Each taxonomy level has a predictable URL pattern. Google understands the hierarchy without needing to guess.',
          },
          {
            title: 'Contextual internal linking',
            detail: 'Indexable pages receive more internal links. City pages link to available repairs, models link to their repairs, and families aggregate their models.',
          },
          {
            title: 'Bridge redirects for discontinued items',
            detail: 'Instead of returning a 404 when a repair is discontinued, it 301-redirects to the closest alternative. 700+ redirect rules in <a href="https://github.com/santifer/santifer-irepair/blob/main/vercel.json#L27" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">vercel.json</a>. Zero authority loss, zero broken links.',
          },
        ],
        safeNoindex: {
          heading: '"Safe Noindex" Pattern',
          prose: 'Accidental noindex is one of SEO\'s costliest mistakes — one line can deindex thousands of pages. Here\'s how we prevented it:',
          segments: [
            {
              code: `{NOINDEXCUIDADO &&
  NOINDEXCUIDADO === 'Estoy absolutamente seguro que no quiero hacer no index por eso pongo esta cadena' && (
    <meta name="robots" content="noindex" />
  )}`,
              annotations: [
                { label: 'String, not boolean', detail: 'A boolean can be true by accident (wrong field, default value, migration error). An 80-character Spanish string requires deliberate intent.' },
                { label: 'Double guard', detail: 'The prop must be truthy AND match the exact string. Even if set to "true" or 1, the noindex tag won\'t render.' },
              ],
            },
          ],
          callout: 'Two years in production. Zero accidental deindexing events. The 80-character Spanish string did its job.',
        },
      },
      urlTaxonomy: {
        heading: 'URL Taxonomy',
        body: 'The site uses 6 URL patterns, each corresponding to a level in the business taxonomy. Local patterns (with /sevilla) capture local intent. National patterns (no city) capture niche searches.',
        patterns: [
          { pattern: '/reparar-{device}/{city}', example: '/reparar-smartwatch/sevilla', description: 'Generic device + city. The broadest entry point into the local funnel.' },
          { pattern: '/reparar-{device}/{brand}/{city}', example: '/reparar-movil/samsung/sevilla', description: 'Device + brand + city. More specific, better CTR.' },
          { pattern: '/reparar-{device}/{repair-type}/{city}', example: '/reparar-iphone/bateria/sevilla', description: 'Device + repair type + city. High transactional intent.' },
          { pattern: '/reparar-{device}/{brand}/{repair-type}/{city}', example: '/reparar-movil/samsung/pantalla/sevilla', description: 'Full local combination. The most specific funnel entry.' },
          { pattern: '/reparar-{device}/{model}/{repair-type}', example: '/reparar-apple-watch/se/bateria', description: 'Specific model + repair, no city. For national niche searches.' },
          { pattern: '/cambiar-{repair}-{brand}-{model}', example: '/cambiar-bateria-google-pixel-6a', description: 'Direct national format. Captures queries like "change pixel 6a battery" with high CTR (5%).' },
        ],
        appleRoutes: {
          heading: 'Premium Apple Routes',
          prose: 'We started in 2009 repairing exclusively Apple devices — people knew us for it. Apple has the highest search volume, and shorter routes reflect that priority: /iphone/14-pro instead of /reparar-movil/apple/iphone-14-pro. Shorter, cleaner, better CTR. A single boolean changes everything:',
          segments: [
            {
              code: `// Apple: /iphone/14-pro (short, clean, better CTR)
const records = await getRecordsModelos(true);  // modoApple = true → CMSAstro(Apple) view
return records.map(r => ({
  params: { paramMarcaApple: r.paramMarca, paramModeloApple: r.paramModelo },
}));

// Generic: /reparar-movil/samsung/galaxy-s21
const records = await getRecordsModelos();  // modoApple = false → CMSAstro view
return records.map(r => ({
  params: { paramTipo: r.paramTipo, paramMarca: r.paramMarca, paramModelo: r.paramModelo },
}));`,
              annotations: [
                { label: 'modoApple = true', detail: 'A single boolean switches the Airtable view (CMSAstro vs CMSAstro(Apple)) and the URL structure. Same page, same layout, two routing systems.' },
                { label: 'Shorter routes', detail: '/iphone/14-pro vs /reparar-movil/apple/iphone-14-pro. Apple is the dominant brand in repairs; its routes deserve premium URLs.' },
              ],
            },
          ],
        },
      },
      stack: {
        heading: 'Stack & Tools',
        body: 'The stack was chosen for a specific need: generating thousands of static pages from a relational CMS, with minimal client-side JavaScript. Astro was the obvious pick for pure SSG. Airtable worked as CMS because it was already the business\'s Business OS — migrating to Supabase for a static site made no sense. DataForSEO was chosen for price and Spanish keyword coverage.',
        items: [
          { name: 'Astro', role: 'SSG, 21 templates, minimal lazy JS' },
          { name: 'Airtable', role: 'Headless CMS, 14 tables, ~60 fields/table' },
          { name: 'DataForSEO', role: 'Search volumes, "indexable" field' },
          { name: 'Custom ERP', role: '867 models, prices, stock, photos, reviews' },
          { name: 'Cloudflare', role: 'CDN, edge caching, deployment' },
          { name: 'TypeScript', role: '1,677-line schema.ts for the mapping' },
          { name: 'JSON-LD', role: '6 types of structured data per page' },
        ],
      },
      lessons: {
        heading: 'Lessons Learned',
        items: [
          {
            title: 'Google decides user intent, not you.',
            detail: 'I started out wanting to rank nationwide. Google had other plans — it read repair searches as strongly local intent. Pages without a city got crushed by Seville-specific ones. The lesson: build the full infrastructure, but let GSC data tell you where to double down.',
          },
          {
            title: 'The decision engine matters more than the generator.',
            detail: 'Generating 10,000 pages is trivial. Deciding which ones to index based on real DataForSEO data — that\'s what separates pSEO with results from a thin content farm. Out of all possible combos, only 4,084 made it into the sitemap.',
          },
          {
            title: 'The ERP is the moat, not the template.',
            detail: 'Anyone can spin up pages with AI. Nobody can generate real before/after photos, verified reviews, dual pricing (original and compatible), and turnaround times from historical data without an integrated ERP. Unique content doesn\'t come from copy — it comes from data.',
          },
          {
            title: 'Airtable scales better than expected.',
            detail: '14 tables, ~60 fields per table, 6-level hierarchy. With retry and exponential backoff on the API, the build stays stable. The trick: cache reviews and skip redundant calls. For a one-person team, Airtable as a headless CMS just works.',
          },
          {
            title: 'National niche URLs deliver the best CTR.',
            detail: 'The /cambiar-bateria-google-pixel-6a format pulls a 5.0% CTR at an average position of 7.8. These queries are so specific they\'ve got almost zero competition. Individual volume is low, but multiplied across hundreds of models, it adds up fast.',
          },
          {
            title: 'Generated content without production data is thin content with better grammar.',
            detail: 'The difference between pSEO that works and a content farm isn\'t the template or the AI — it\'s whether the data is real. ERP pricing, actual repair photos, verified reviews. This pattern applies to any business with operational data: e-commerce, marketplaces, catalog-driven SaaS.',
          },
          {
            title: 'Your business taxonomy IS your information architecture — don\'t invent it, map it.',
            detail: 'I didn\'t design the URL structure from scratch. I mapped the hierarchy that already existed in the business: type → brand → model → repair → city. The Business OS already had that taxonomy in Airtable. The programmatic site simply exposed it to the world. If your company already has an internal ontology, use it.',
          },
        ],
      },
      whatThisDemonstrates: {
        heading: 'What This Demonstrates',
        items: [
          { title: 'End-to-end system design', detail: 'From ERP data to production pages — relational CMS, build pipeline, decision engine, crawl budget optimization.' },
          { title: 'Automation that scales without intervention', detail: 'One person, 4,730 pages, 26,000+ images. The system kept running after the business was sold.' },
          { title: 'Data-driven decisions, not gut feelings', detail: 'DataForSEO as the indexing engine. Google Search Console as the feedback loop. Every decision backed by real metrics.' },
          { title: 'Full execution in a real business context', detail: 'This isn\'t a portfolio project or a tutorial. It\'s a production system that drove real traffic for a real business — and contributed to its sale.' },
        ],
      },
    },
    cta: {
      heading: 'I design systems that turn operational data into competitive advantages.',
      body: 'This case study demonstrates a pattern I\'ve applied repeatedly: map the business ontology, build a data-to-deploy pipeline, and measure everything with real metrics. Currently exploring AI Product Manager and Solutions Architect roles — if your team needs someone who thinks in systems and ships to production, let\'s talk.',
      label: 'Get in touch',
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Isn\'t programmatic SEO just spam?',
          a: 'Only if the pages don\'t add value. Here, every page has real service data: current pricing (original and compatible parts), turnaround based on historical data, before/after photos from actual repairs, and verified customer reviews. This isn\'t AI-generated filler — it\'s production data from the ERP.',
        },
        {
          q: 'Does it only work in Seville?',
          a: 'Local pages focus on Seville because that\'s where the physical shop is, and Google favors nearby results for repair searches. National pages (the /cambiar-{part}-{brand}-{model} format) work without geographic limits and capture niche queries across all of Spain.',
        },
        {
          q: 'Why no AI-generated content?',
          a: 'Because the moat is real data. Prices come from the ERP, photos are from actual repairs, reviews are from verified customers. An AI-generated page might sound good, but there\'s no production data behind it. The blog did lean on AI for writing, paired with NotebookLM for each article\'s podcast episode.',
        },
        {
          q: 'Does Airtable scale with 4,700+ pages?',
          a: 'Yes, with caveats. The 14 tables and ~60 fields per table work well with a build pipeline (not real-time queries). The key: retry with exponential backoff on the API and caching frequently hit data like reviews. For live queries at larger scale, you\'d want to evaluate alternatives like Supabase.',
        },
        {
          q: 'How do you keep pages updated?',
          a: 'When a price changes or a model gets added in the ERP, the data syncs to Airtable. The next build regenerates the affected pages. New reviews propagate automatically through the family-model cascade. No manual work needed for content.',
        },
        {
          q: 'Why Astro instead of Next.js?',
          a: 'For a fully static site where content changes infrequently, Astro ships pure HTML with minimal JavaScript — only interactive components like the search bar and carousel, lazy-loaded. Pages load under a second, Core Web Vitals are great out of the box, and Cloudflare CDN deployment is dead simple.',
        },
        {
          q: 'What does DataForSEO do exactly?',
          a: 'DataForSEO provides real search volume for each keyword. The result gets stored in Airtable\'s "indexable" field. If a device + repair + city combo has no search volume, the page is built but tagged noindex. It\'s the decision engine that keeps you from diluting domain authority with pages Google would ignore.',
        },
      ],
    },
    resources: {
      heading: 'Resources',
      items: [
        { label: 'Source code on GitHub (scripts, layouts, routes)', url: 'https://github.com/santifer/santifer-irepair' },
        { label: 'Santifer iRepair (the programmatic site)', url: 'https://santiferirepair.es' },
        { label: 'Case Study: The Business OS / ERP behind these pages', url: '/business-os-for-airtable' },
        { label: 'Astro, the static site framework', url: 'https://astro.build' },
        { label: 'DataForSEO, SEO data API', url: 'https://dataforseo.com' },
        { label: 'Airtable, data platform and CMS', url: 'https://airtable.com' },
      ],
    },
    footer: {
      role: 'AI Product Manager · Solutions Architect · AI FDE',
      bio: 'Built and sold a 16-year business in 2025. Now building career-ops full time.',
      fellowAt: 'Teaching Fellow at',
      fellowLink: 'AI Product Academy',
      copyright: 'All rights reserved.',
    },
  },
} as const
