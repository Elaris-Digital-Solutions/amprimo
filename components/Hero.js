import { useEffect, useState } from 'react'
import Link from 'next/link'

const recognitions = [
  'Chambers & Partners',
  'Legal 500',
  'Best Lawyers',
  'ITR World Tax',
  'Leaders League',
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-navy-950 min-h-screen"
      id="inicio"
    >
      {/* Fondo: imagen hero */}
      <img
        src="/images/hero-inicio.webp"
        alt=""
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-900/30" />

      {/* Línea decorativa izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/15 to-transparent hidden lg:block" />

      {/* Número decorativo de fondo */}
      <div className="absolute right-8 bottom-20 font-serif text-[12rem] font-bold text-white/[0.025] leading-none select-none pointer-events-none hidden xl:block">
        17
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24">

          {/* Etiqueta superior */}
          <div
            className={`flex items-center gap-4 mb-10 transition-all duration-700
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label text-gold-500">Lima, Perú · Fundada en 2007</span>
          </div>

          {/* Título principal */}
          <h1
            className={`font-serif text-white transition-all duration-700
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '350ms' }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-3">
              Amprimo, Flury,
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light italic text-gold-400/90 leading-[1.1]">
              Barboza &amp; Rodríguez.
            </span>
          </h1>

          {/* Descripción */}
          <p
            className={`mt-8 text-white/60 text-base lg:text-lg leading-relaxed max-w-2xl font-light transition-all duration-700
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Con una historia que se remonta hace 17 años, Amprimo, Flury, Barboza &amp; Rodríguez
            ha establecido una reputación sólida en la resolución efectiva de disputas legales complejas.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '650ms' }}
          >
            <Link href="/areas-de-practica" className="btn-primary">
              Áreas de Práctica
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contactanos" className="btn-outline-white">
              Consulta Legal
            </Link>
          </div>

      </div>

    </section>
  )
}
