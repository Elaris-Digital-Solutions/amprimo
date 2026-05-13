import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { hoverPrefetch } from '../lib/prefetchHero'

const stats = [
  { value: 19, suffix: '',  label: 'Años en el Mercado' },
  { value: 16, suffix: '',  label: 'Áreas de Práctica' },
  { value: 49, suffix: '%', label: 'Presencia Femenina' },
  { value: 85, suffix: '%', label: 'Casos Exitosos' },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const hasAnimated = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!loaded || hasAnimated.current) return
    hasAnimated.current = true
    const timeout = setTimeout(() => {
      const duration = 1800
      const startTime = performance.now()
      const frame = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        setCounts(stats.map(s => Math.round(ease * s.value)))
        if (progress < 1) requestAnimationFrame(frame)
      }
      requestAnimationFrame(frame)
    }, 800)
    return () => clearTimeout(timeout)
  }, [loaded])

  return (
    <section
      className="relative mt-20 overflow-hidden bg-navy-950 h-[calc(100vh-5rem)] flex flex-col"
      id="inicio"
    >
      {/* Fondo: imagen hero */}
      <img
        src="/images/hero-inicio.webp"
        alt=""
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-900/30" />

      {/* Líneas decorativas */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/15 to-transparent hidden lg:block" />

      {/* Área de contenido — flex-1 para que ocupe exactamente el espacio sobre las métricas */}
      <div className="relative z-10 flex-1 min-h-0">

        {/* Bloque de texto — top-[18%] es % del área de contenido, nunca toca las métricas */}
        <div className="absolute inset-x-0 top-[18%] sm:top-[20%]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* Etiqueta superior */}
            <div
              className={`flex items-center gap-4 transition-all duration-700
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/80 text-xs uppercase tracking-widest2 font-semibold font-sans">Lima, Perú · Fundada en 2007</span>
            </div>

            {/* Logo como título */}
            <div
              className={`mt-8 lg:mt-10 transition-all duration-700
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '350ms' }}
            >
              <img
                src="/images/amprimo-logo.webp"
                alt="Amprimo, Flury, Barboza & Rodríguez Abogados"
                className="h-16 lg:h-24 w-auto"
              />
            </div>

            {/* Descripción */}
            <p
              className={`mt-6 lg:mt-8 text-white/60 text-base lg:text-lg leading-relaxed max-w-2xl font-light transition-all duration-700
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '500ms' }}
            >
              Con una historia que se remonta hace 17 años, Amprimo, Flury, Barboza &amp; Rodríguez
              ha establecido una reputación sólida en la resolución efectiva de disputas legales complejas.
            </p>

            {/* CTAs */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '650ms' }}
            >
              <Link href="/areas-de-practica" {...hoverPrefetch('/areas-de-practica')} className="btn-primary">
                Áreas de Práctica
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contactanos" {...hoverPrefetch('/contactanos')} className="btn-outline-white">
                Consulta Legal
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Métricas — flujo normal al fondo del flex, sin línea separadora */}
      <div
        className={`relative z-10 transition-all duration-700
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '900ms' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center lg:px-10"
              >
                <span className="font-serif text-4xl lg:text-6xl font-semibold text-white mb-1 lg:mb-2">
                  {counts[i]}{s.suffix}
                </span>
                <span className="text-white/45 text-[10px] lg:text-xs uppercase tracking-widest font-sans leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
