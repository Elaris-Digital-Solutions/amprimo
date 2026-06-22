import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { recognitions } from '../lib/recognitions'

// Segmento de Logros y Reconocimientos replicado en el landing (obs. 13).
// Cada sello abre su página interna /reconocimientos/[directorio] (obs. 14).
// Los sellos y su contenido viven en lib/recognitions.js.

export default function Recognitions() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
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
    <section
      id="reconocimientos"
      ref={sectionRef}
      className="bg-navy-950 py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,123,181,0.08),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label block mb-4">Distinción Internacional</span>
          <h2 className="animate-on-scroll font-serif text-white text-3xl lg:text-4xl font-medium mb-4">
            Nuestros Logros y Reconocimientos
          </h2>
          <p className="animate-on-scroll text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
            Hemos obtenido importantes reconocimientos en los más prestigiosos directorios legales
            internacionales, los cuales han distinguido nuestras áreas de práctica entre las
            principales del mercado peruano.
          </p>
        </div>

        {/* En desktop: una sola fila (flex-nowrap) con Best Lawyers al centro.
            En móvil/tablet: grid de 2/3 columnas. */}
        <div className="animate-on-scroll grid grid-cols-2 md:grid-cols-3 place-items-center gap-10 md:gap-12 lg:flex lg:flex-nowrap lg:justify-center lg:items-center lg:gap-6 xl:gap-10">
          {orderedSeals.map(seal => (
            <Link
              key={seal.slug}
              href={`/reconocimientos/${seal.slug}`}
              aria-label={`Ver reconocimiento de ${seal.name}`}
              className="block flex-shrink-0 transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
            >
              <img
                src={seal.logo}
                alt={seal.name}
                style={seal.logoStyle}
                className="h-24 md:h-28 lg:h-24 xl:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
