import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

const chambersQuotes = [
  'A reliable firm offering support and reassurance to its clients. Very serious and committed in the attention they give to the matters and the information they provide.',
  'Highly adept at advising on regulatory and intellectual property mandates.',
]

export default function About() {
  const sectionRef = useRef(null)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [quoteFading, setQuoteFading] = useState(false)

  const nextQuote = useCallback(() => {
    setQuoteFading(true)
    setTimeout(() => {
      setQuoteIndex(i => (i + 1) % chambersQuotes.length)
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
              Una firma boutique con visión
              <span className="italic text-navy-700"> integral</span> del derecho.
            </h2>
            <p className="animate-on-scroll text-navy-600 leading-relaxed text-base mb-6">
              Con una historia que se remonta hace 17 años, Amprimo, Flury, Barboza &amp; Rodríguez
              ha establecido una reputación sólida en la resolución efectiva de disputas legales complejas.
            </p>
            <p className="animate-on-scroll text-navy-600 leading-relaxed text-base mb-10">
              Nuestro estudio nació con la idea de ser una boutique en temas constitucionales y litigios.
              Hoy contamos con un equipo con amplia experiencia en todas las áreas de práctica, siempre
              con un fuerte enfoque en materias constitucionales y litigios, lo que nos permite brindar
              soluciones integrales y personalizadas a nuestros clientes.
            </p>

            <Link href="/equipo" className="animate-on-scroll btn-primary">
              Conocer el Equipo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Columna derecha: cita fundador */}
          <div className="animate-on-scroll flex flex-col">

            <div className="relative bg-cream border-l-4 border-gold-500 p-8 lg:p-10 overflow-visible">
              {/* Comillas decorativas — dentro del recuadro, solapadas */}
              <div className="absolute -top-8 left-6 font-serif text-[8rem] text-gold-400/30 leading-none select-none pointer-events-none z-10">
                &ldquo;
              </div>

              <blockquote className="relative z-10 font-serif text-lg lg:text-xl text-navy-800 leading-relaxed italic mb-8">
                Nuestro Estudio nació con la idea de ser una boutique en temas constitucionales y litigios.
                Hoy, con más de 17 años en el mercado, contamos con un equipo con amplia experiencia en
                todas las áreas de práctica, pero siempre con un fuerte enfoque en materias constitucionales
                y litigios, lo que nos permite brindar soluciones integrales y personalizadas a nuestros clientes.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-navy-200 overflow-hidden flex-shrink-0">
                  <img
                    src="/images/NATALE-AMPRIMO-2.webp"
                    alt="Natale Amprimo Pla"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Natale Amprimo Pla</p>
                  <p className="text-navy-500 text-xs uppercase tracking-wider mt-0.5">Socio Fundador</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex-1 flex flex-col p-6 border border-navy-100 bg-white relative">
              <div
                className="flex-1 min-h-[10rem] transition-opacity duration-[280ms]"
                style={{ opacity: quoteFading ? 0 : 1 }}
              >
                <p className="font-serif text-navy-700 text-base italic leading-relaxed mb-3">
                  &ldquo;{chambersQuotes[quoteIndex]}&rdquo;
                </p>
              </div>

              <div
                className="transition-opacity duration-[280ms]"
                style={{ opacity: quoteFading ? 0 : 1 }}
              >
                <p className="text-navy-400 text-xs uppercase tracking-widest font-semibold">
                  — Chambers &amp; Partners
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
