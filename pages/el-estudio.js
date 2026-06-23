import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const diferenciales = [
  {
    title: 'Litigio constitucional de primer nivel',
    body: 'El litigio constitucional es nuestro terreno natural. Hemos conducido procesos emblemáticos ante el Tribunal Constitucional y el Poder Judicial, con un historial de éxito que pocos estudios en el país pueden mostrar.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Trayectoria en la función pública',
    body: 'Varios de nuestros abogados han ocupado cargos de alta responsabilidad en el sector público — Congreso, carteras ministeriales y organismos reguladores —, lo cual nos da una comprensión profunda del Estado que se traduce en ventaja estratégica frente a cada controversia.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'La controversia como especialidad',
    body: 'No esquivamos los casos difíciles: los buscamos. Empresas e instituciones nos confían sus asuntos más complejos y de mayor exposición, donde la estrategia legal se cruza con la reputación y la continuidad del negocio.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
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
        <meta name="description" content="Especialistas en asesoría legal para empresas privadas y entidades públicas. Veinte años de trayectoria en Lima, Perú." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amprimo.netlify.app/el-estudio" />
        <meta property="og:title" content="El Estudio | Amprimo, Flury, Barboza & Rodríguez Abogados" />
        <meta property="og:description" content="Especialistas en asesoría legal para empresas privadas y entidades públicas. Veinte años de trayectoria en Lima, Perú." />
        <meta property="og:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Amprimo, Flury, Barboza & Rodríguez Abogados" />
        <meta property="og:site_name" content="Amprimo Abogados" />
        <meta property="og:locale" content="es_PE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <link rel="preload" as="image" href="/images/hero-el-estudio.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main id="main-content">

        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-950">
          {/* TODO (obs. 24): reemplazar por la nueva foto (la mejor de las adjuntas),
              editada/limpia de "ruido" y de forma que el texto no se pierda sobre ella. */}
          <img
            src="/images/hero-el-estudio.webp"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/50" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/80 text-xs uppercase tracking-widest2 font-semibold font-sans">Quiénes Somos</span>
            </div>
            <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-[3.25rem] font-medium max-w-3xl leading-tight">
              El Estudio
            </h1>
            <p className="mt-6 text-white/65 text-base lg:text-lg max-w-3xl leading-relaxed font-light">
              Desde 2006 acompañamos a empresas, instituciones y personas en los asuntos legales más
              exigentes del país, combinando profundidad técnica, experiencia en el sector público y una
              vocación litigante que nos define.
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
                  <em className="not-italic text-gold-500">excelencia</em>
                </h2>
                <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mb-5">
                  Nacimos en 2006 de la mano de litigantes con una convicción clara: defender cada caso
                  con rigor, profundidad y compromiso total. Con los años crecimos hasta convertirnos en
                  un estudio que cubre todas las áreas del derecho, sin perder nunca ese enfoque que nos
                  define.
                </p>
                <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mb-5">
                  Nuestra fortaleza nace de un equipo que conoce el derecho desde dentro y desde fuera del
                  Estado. Entre nuestros socios contamos con trayectoria en el Congreso, en ministerios y
                  en los más altos tribunales del país — una perspectiva que nos permite anticipar
                  escenarios y asesorar con criterio en las decisiones más críticas.
                </p>
                <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                  Nuestra mayor fortaleza está en el litigio constitucional. Hemos conducido procesos
                  emblemáticos ante el Tribunal Constitucional y el Poder Judicial, defendiendo derechos
                  fundamentales y el orden constitucional en casos de alcance nacional — un terreno en el
                  que pocos estudios del país pueden mostrar nuestra trayectoria y nuestros resultados.
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
            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-center lg:items-stretch">

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
                    Para nosotros, ese compromiso se expresa, ante todo, en la defensa del orden constitucional
                    y el fortalecimiento de la institucionalidad democrática del país. A lo largo de los años,
                    el Estudio ha participado de forma recurrente y ad honorem como <em>amicus curiae</em> en
                    procesos de inconstitucionalidad de relevancia nacional. Esta vocación nace de la trayectoria
                    de nuestros socios como reconocidos constitucionalistas, cuya voz independiente ha sido
                    convocada en debates de alcance público — desde infraestructura y servicios públicos hasta
                    la preservación de tradiciones populares.
                  </p>
                  <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                    Ese reconocimiento explica que gremios como la Sociedad Nacional de Industrias, la Cámara de
                    Comercio y la Sociedad Nacional de Minería, Petróleo y Energía — e incluso el propio Congreso —
                    recurran a nuestra firma para evaluar la constitucionalidad de proyectos de ley en materia
                    minera, ambiental y económica.
                  </p>
                  <p className="animate-on-scroll text-navy-600 text-base leading-relaxed">
                    Nuestro compromiso va más allá del análisis técnico. Impulsamos litigio estratégico —
                    principalmente mediante acciones de amparo — para generar impacto estructural: cambios
                    normativos en ámbitos como la salud, precedentes judiciales y transformación de políticas
                    públicas. Contribuir al debate público con rigor técnico e independencia es parte de nuestra
                    identidad y de nuestro compromiso con la cautela del Estado de Derecho y la Democracia.
                  </p>
                </div>
              </div>

              {/* Acento visual — en desktop se estira a la altura del texto */}
              <div className="animate-on-scroll flex items-center justify-center lg:items-stretch lg:justify-end">
                <div className="relative bg-navy-950 px-12 py-16 lg:px-16 lg:py-20 lg:w-full lg:flex lg:flex-col lg:justify-center">
                  <div className="absolute top-0 left-0 w-16 h-px bg-gold-500" />
                  <div className="absolute top-0 left-0 h-16 w-px bg-gold-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-px bg-gold-500" />
                  <div className="absolute bottom-0 right-0 h-16 w-px bg-gold-500" />
                  <p className="font-serif text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-right">
                    RESPON-<br />
                    SABILIDAD<br />
                    <span className="text-gold-500">SOCIAL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
