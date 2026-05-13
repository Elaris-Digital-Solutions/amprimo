import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { hoverPrefetch } from '../lib/prefetchHero'

const logos = [
  {
    src: '/images/chambers.webp',
    alt: 'Chambers & Partners',
    style: { filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' },
  },
  {
    src: '/images/legal-500.webp',
    alt: 'Legal 500',
    // fondo negro desaparece con screen; contenido blanco se mantiene
    style: { mixBlendMode: 'screen' },
  },
  {
    src: '/images/ranked-firm2024.webp',
    alt: 'Ranked Firm 2024',
    // multiply: fondo blanco × fondo oscuro del sitio → desaparece
    style: { mixBlendMode: 'multiply' },
  },
]

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
      className="bg-navy-950 py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,123,181,0.08),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Columna izquierda: texto — 55% */}
          <div className="lg:w-[55%] flex-shrink-0">
            <h2 className="animate-on-scroll font-serif text-white text-2xl lg:text-3xl font-medium leading-snug mb-4">
              Logros y Reconocimientos
            </h2>
            <p className="animate-on-scroll text-white/50 text-sm leading-relaxed mb-7">
              Hemos obtenido importantes reconocimientos en los más prestigiosos directorios legales
              internacionales, los cuales han distinguido nuestras áreas de práctica entre las
              principales del mercado peruano.
            </p>
            <Link
              href="/el-estudio#logros-y-reconocimientos"
              {...hoverPrefetch('/el-estudio#logros-y-reconocimientos')}
              className="animate-on-scroll inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold hover:text-gold-300 transition-colors duration-200"
            >
              Ver más
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Columna derecha: logos — 55% */}
          <div className="animate-on-scroll grid grid-cols-3 gap-3 w-full lg:flex lg:w-[45%] lg:items-center lg:justify-around lg:gap-10">
            {logos.map(logo => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={logo.style}
                className="w-full h-auto max-h-24 sm:max-h-32 lg:max-h-none lg:h-40 lg:w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
