import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const diferenciales = [
  {
    title: 'Compromiso con la Gestión Eficiente de Conflictos',
    body: 'Nos comprometemos a gestionar los conflictos legales de manera eficiente y exitosa, ofreciendo soluciones efectivas y satisfactorias para nuestros clientes.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Comprensión Integral de los Litigios',
    body: 'El profundo conocimiento de nuestro equipo abarca no solo los aspectos técnicos y legales de los procesos arbitrales, sino también una comprensión integral de los litigios constitucionales, civiles y regulatorios.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Experiencia en Resolución de Disputas y Arbitraje',
    body: 'Nuestra firma se distingue por su amplia experiencia en la resolución de disputas y arbitrajes, respaldada por un historial exitoso en casos de gran escala. Ofrecemos soluciones efectivas y estrategias probadas para abordar una amplia gama de conflictos legales.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

const logos = [
  {
    src: '/images/chambers.webp',
    alt: 'Chambers & Partners',
    style: { filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' },
  },
  {
    src: '/images/legal-500.webp',
    alt: 'Legal 500',
    style: { mixBlendMode: 'screen' },
  },
  {
    src: '/images/ranked-firm2024.webp',
    alt: 'Ranked Firm 2024',
    style: { mixBlendMode: 'multiply' },
  },
  {
    src: '/images/latin-lawyer.png',
    alt: 'Latin Lawyer 250',
    style: { mixBlendMode: 'screen' },
  },
  {
    src: '/images/world-tax.png',
    alt: 'World Tax',
    style: { mixBlendMode: 'screen' },
  },
  {
    src: '/images/best-lawyers.png',
    alt: 'Best Lawyers',
    style: { mixBlendMode: 'screen', maxWidth: '160px' },
  },
]

export default function ElEstudio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>El Estudio | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content="Especialistas en asesoría legal para empresas privadas y entidades públicas desde 2007." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>

        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex items-end overflow-hidden">
          <img
            src="/images/amprimo inicio.webp"
            alt="Amprimo Abogados"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-900/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span className="section-label">El Estudio</span>
            </div>
            <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-[3.25rem] font-medium max-w-3xl leading-tight">
              Especialistas en asesoría legal para empresas privadas y entidades públicas
            </h1>
            <p className="mt-6 text-white/65 text-base lg:text-lg max-w-2xl leading-relaxed font-light">
              Nuestra firma está compuesta por experimentados abogados que ofrecen servicios de consultoría
              legal tanto en el ámbito privado como en el público. Nuestra misión es mantenernos a la
              vanguardia y destacar en múltiples áreas del derecho, con un enfoque particular en la
              resolución de disputas y arbitrajes.
            </p>
          </div>
        </section>

        {/* ── 2. Comprometidos con la excelencia ──────────────── */}
        <section className="py-20 lg:py-28 bg-white" data-observe>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Mosaico de imágenes */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/NATALE-AMPRIMO-2.webp"
                    alt="Natale Amprimo"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden mt-10">
                  <img
                    src="/images/HANS-FLURY-1.webp"
                    alt="Hans Flury"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden -mt-10">
                  <img
                    src="/images/EDUARDO-BARBOZA-1.webp"
                    alt="Eduardo Barboza"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/CARLOS-RODRIGUEZ-1.webp"
                    alt="Carlos Rodríguez"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Texto */}
              <div>
                <div className="animate-on-scroll flex items-center gap-4 mb-5">
                  <div className="w-8 h-px bg-gold-500" />
                  <span className="section-label">Nuestra Firma</span>
                </div>
                <h2 className="animate-on-scroll font-serif text-navy-900 text-3xl lg:text-4xl font-medium leading-tight mb-6">
                  Comprometidos con la{' '}
                  <em className="not-italic text-gold-500">excelencia legal</em>
                </h2>
                <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mb-5">
                  Nos dedicamos a ofrecer soluciones legales efectivas y sostenemos un compromiso
                  inquebrantable con la calidad y la experiencia en cada faceta de nuestra labor legal.
                  Nuestra prioridad es asegurar que nuestros clientes reciban asesoramiento de la más
                  alta calidad y confianza en todas las áreas de práctica que abordamos.
                </p>
                <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                  Cabe señalar que en el campo arbitral, nuestros principales socios han sido reconocidos
                  como líderes en la industria y son ampliamente solicitados en condición de litigantes
                  y árbitros, siendo partícipes en numerosos arbitrajes a gran escala y representando a
                  algunas de las empresas más importantes del país.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Nuestros Diferenciales ───────────────────────── */}
        <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden" data-observe>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(43,123,181,0.08),transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <span className="animate-on-scroll section-label block mb-4">Por qué elegirnos</span>
              <h2 className="animate-on-scroll font-serif text-white text-3xl lg:text-4xl font-medium">
                Nuestros Diferenciales
              </h2>
              <div className="animate-on-scroll divider-gold mx-auto mt-5" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {diferenciales.map(d => (
                <div
                  key={d.title}
                  className="animate-on-scroll border border-white/8 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <div className="text-gold-500 mb-5">{d.icon}</div>
                  <h3 className="text-white text-xs uppercase tracking-widest font-semibold mb-4 leading-relaxed">
                    {d.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Responsabilidad Social ───────────────────────── */}
        <section className="py-20 lg:py-28 bg-white" data-observe>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Texto */}
              <div>
                <div className="animate-on-scroll flex items-center gap-4 mb-5">
                  <div className="w-8 h-px bg-gold-500" />
                  <span className="section-label">RSE</span>
                </div>
                <h2 className="animate-on-scroll font-serif text-navy-900 text-3xl lg:text-4xl font-medium leading-tight mb-8">
                  Responsabilidad Social
                </h2>
                <div className="space-y-5">
                  <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                    Amprimo, Flury, Barboza &amp; Rodríguez Abogados mantiene firme su compromiso con la
                    responsabilidad social, contribuyendo activamente al cambio positivo en nuestra comunidad.
                    A través de un enfoque estratégico y consciente de la Responsabilidad Social Empresarial
                    (RSE), nuestra firma ha elegido causas alineadas con nuestros valores y los de nuestros
                    empleados y clientes.
                  </p>
                  <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                    Nuestra participación va más allá de las contribuciones financieras; aprovechamos nuestra
                    experiencia legal para impactar directamente en las causas que respaldamos, desde
                    controversias entre privados, buscando siempre que prime la justicia, hasta litigios
                    constitucionales complejos, en cautela del Estado de Derecho y la Democracia.
                  </p>
                  <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                    Al alentar a nuestro equipo a participar activamente en causas pro bono, no solo
                    mejoramos nuestras iniciativas de RSE, sino que también humanizamos nuestra firma.
                    Nuestra dedicación con la responsabilidad social es una parte integral de nuestra
                    identidad como firma legal.
                  </p>
                </div>
              </div>

              {/* Acento visual */}
              <div className="animate-on-scroll flex items-center justify-center lg:justify-end">
                <div className="relative bg-navy-950 px-12 py-16 lg:px-16 lg:py-20">
                  <div className="absolute top-0 left-0 w-16 h-px bg-gold-500" />
                  <div className="absolute top-0 left-0 h-16 w-px bg-gold-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-px bg-gold-500" />
                  <div className="absolute bottom-0 right-0 h-16 w-px bg-gold-500" />
                  <p className="font-serif text-white text-4xl lg:text-5xl font-bold leading-[1.15] text-right">
                    RESPON-<br />
                    SABILIDAD<br />
                    <span className="text-gold-500">SOCIAL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Logros y reconocimientos ─────────────────────── */}
        <section className="bg-navy-950 py-20 lg:py-24 relative overflow-hidden" data-observe>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,123,181,0.08),transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <span className="animate-on-scroll section-label block mb-4">Distinción Internacional</span>
              <h2 className="animate-on-scroll font-serif text-white text-3xl lg:text-4xl font-medium mb-4">
                Nuestros Logros y Reconocimientos
              </h2>
              <p className="animate-on-scroll text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
                Hemos obtenido notables reconocimientos en los más prestigiosos rankings de prestigio mundial
                que evalúan y categorizan a los principales bufetes de abogados y distinguidos profesionales
                del derecho, consolidando nuestra posición como destacados referentes a nivel internacional.
              </p>
            </div>

            <div className="animate-on-scroll grid grid-cols-2 md:grid-cols-3 place-items-center gap-10 md:gap-14 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-16">
              {logos.map(logo => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  style={logo.style}
                  className="h-24 md:h-28 lg:h-36 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
