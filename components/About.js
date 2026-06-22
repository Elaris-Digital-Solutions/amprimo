import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { hoverPrefetch } from '../lib/prefetchHero'

// Carrusel de citas de directorios legales.
// TODO (obs. 12): reemplazar/ampliar con las citas oficiales que enviará el cliente.
// Cada cita lleva versión en inglés y español (ambas en cursiva, diferenciadas por
// color/fuente) y la fuente del directorio. El distintivo (estrella) es común.
const directoryQuotes = [
  {
    en: 'A reliable firm offering support and reassurance to its clients. Very serious and committed in the attention they give to the matters and the information they provide.',
    es: 'Una firma confiable que ofrece respaldo y tranquilidad a sus clientes. Muy seria y comprometida en la atención que brinda a los asuntos y en la información que entrega.',
    source: 'Chambers & Partners',
  },
  {
    en: 'Highly adept at advising on regulatory and intellectual property mandates.',
    es: 'Altamente competentes en la asesoría sobre mandatos regulatorios y de propiedad intelectual.',
    source: 'Chambers & Partners',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [quoteFading, setQuoteFading] = useState(false)

  const nextQuote = useCallback(() => {
    setQuoteFading(true)
    setTimeout(() => {
      setQuoteIndex(i => (i + 1) % directoryQuotes.length)
      setQuoteFading(false)
    }, 280)
  }, [])

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="estudio" ref={sectionRef} className="bg-white">

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* Columna izquierda: texto */}
          <div>
            <p className="animate-on-scroll section-label mb-4">El Estudio</p>
            <div className="divider-gold mb-8 animate-on-scroll" />
            <h2 className="animate-on-scroll section-title text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] mb-8">
              Veinte años litigando los casos
              <span className="italic text-navy-700"> más complejos</span> del país.
            </h2>
            <p className="animate-on-scroll text-navy-600 leading-relaxed text-base mb-6">
              Desde 2006 acompañamos a empresas, instituciones y personas en los asuntos legales
              que más importan: aquellos donde la complejidad técnica se cruza con la reputación,
              la continuidad del negocio y la gestión de crisis.
            </p>
            <p className="animate-on-scroll text-navy-600 leading-relaxed text-base mb-6">
              Nacimos como un grupo de litigantes con la clara convicción de defender cada caso
              con rigor, profundidad y compromiso total. Con los años crecimos hasta convertirnos
              en un estudio que cubre todas las áreas del derecho, sin perder nunca ese enfoque
              que nos define.
            </p>
            <p className="animate-on-scroll text-navy-600 leading-relaxed text-base mb-10">
              Hoy contamos con un equipo sólido y multidisciplinario, con profundo dominio del
              derecho público y privado. A lo largo de estos años hemos consolidado una experiencia
              que combina rigor técnico, visión estratégica y un conocimiento del sector público y
              privado que nos permite anticipar escenarios y brindar asesoría en las decisiones más
              exigentes.
            </p>

            <Link href="/equipo" {...hoverPrefetch('/equipo')} className="animate-on-scroll btn-primary">
              Conocer el Equipo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Columna derecha: cita fundador */}
          <div className="animate-on-scroll flex flex-col">

            <div className="relative bg-cream border-l-4 border-gold-500 p-8 lg:p-10">
              <blockquote className="font-serif text-base lg:text-lg text-navy-800 leading-relaxed italic mb-8">
                Nuestro Estudio nació con la idea de ser un referente en temas constitucionales y
                litigios. Hoy, con veinte años en el mercado, contamos con un equipo con amplia
                experiencia en todas las áreas de práctica, pero siempre con un fuerte enfoque en
                materias constitucionales y litigios, lo que nos permite brindar soluciones
                integrales y personalizadas a nuestros clientes.
              </blockquote>

              <div className="flex items-center gap-5">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-navy-200 overflow-hidden flex-shrink-0 ring-1 ring-gold-500/30">
                  <img
                    src="/images/NATALE-AMPRIMO-2.webp"
                    alt="Natale Amprimo"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-base">Natale Amprimo</p>
                  <p className="text-navy-500 text-xs uppercase tracking-wider mt-0.5">Socio Fundador</p>
                </div>
              </div>
            </div>

            {/* Carrusel de citas de directorios legales (bilingüe) */}
            <div className="mt-6 flex-1 flex flex-col p-6 border border-navy-100 bg-white relative">
              {/* Distintivo: estrella — TODO (obs. 12): sustituir por el logo del directorio si se prefiere */}
              <div className="flex items-center gap-1 mb-4 text-gold-500" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <div
                className="flex-1 min-h-[12rem] transition-opacity duration-[280ms]"
                style={{ opacity: quoteFading ? 0 : 1 }}
              >
                {/* Inglés — serif, navy */}
                <p className="font-serif text-navy-800 text-base italic leading-relaxed mb-3">
                  &ldquo;{directoryQuotes[quoteIndex].en}&rdquo;
                </p>
                {/* Español — sans, celeste (gold = azul de marca) para diferenciar */}
                <p className="font-sans text-gold-600 text-sm italic leading-relaxed">
                  &ldquo;{directoryQuotes[quoteIndex].es}&rdquo;
                </p>
              </div>

              <div
                className="transition-opacity duration-[280ms] mt-4"
                style={{ opacity: quoteFading ? 0 : 1 }}
              >
                <p className="text-navy-400 text-xs uppercase tracking-widest font-semibold">
                  — {directoryQuotes[quoteIndex].source}
                </p>
              </div>

              {/* Flecha siguiente */}
              <button
                onClick={nextQuote}
                aria-label="Siguiente cita"
                className="absolute bottom-4 right-4 text-navy-200 hover:text-gold-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
