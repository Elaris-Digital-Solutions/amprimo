import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { hoverPrefetch } from '../lib/prefetchHero'
import { newsPosts, tagColors } from '../lib/newsPosts'

export default function Blog({ preview = false }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featured = newsPosts.find(p => p.featured)
  const rest     = preview
    ? newsPosts.filter(p => !p.featured).slice(0, 3)
    : newsPosts.filter(p => !p.featured)

  return (
    <section id="noticias" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="animate-on-scroll section-label mb-4">Publicaciones</p>
            <div className="divider-gold mb-8 animate-on-scroll" />
            <h2 className="animate-on-scroll section-title text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2]">
              Noticias &amp;<span className="italic text-navy-700"> Actualizaciones</span>
            </h2>
          </div>
          {/* "Ver todas" solo en preview (home), no en la propia /noticias */}
          {preview && (
            <Link
              href="/noticias"
              {...hoverPrefetch('/noticias')}
              className="animate-on-scroll btn-outline self-start lg:self-auto"
            >
              Ver todas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>

        {/* Layout: featured + lista */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Artículo destacado */}
          {featured && (
            <Link
              href={`/noticias/${featured.slug}`}
              className="animate-on-scroll lg:col-span-2 bg-navy-950 p-8 lg:p-10 flex flex-col group cursor-pointer hover:bg-navy-900 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 border ${tagColors[featured.tag]}`}>
                  {featured.tag}
                </span>
                <span className="text-white/55 text-xs">{featured.date}</span>
              </div>
              <h3 className="font-serif text-white text-xl lg:text-2xl font-medium leading-snug mb-5 group-hover:text-gold-300 transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold">
                <span>Leer más</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          )}

          {/* Lista de artículos */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {rest.map(post => (
              <Link
                key={post.id}
                href={`/noticias/${post.slug}`}
                className="animate-on-scroll bg-white p-6 group cursor-pointer hover:shadow-md active:shadow-sm active:scale-[0.995] transition-all duration-300 border border-navy-100 hover:border-navy-200 relative overflow-hidden block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 border ${tagColors[post.tag] || 'bg-navy-50 text-navy-600 border-navy-200'}`}>
                        {post.tag}
                      </span>
                      <span className="text-navy-500 text-xs">{post.date}</span>
                    </div>
                    <h3 className="font-serif text-navy-900 text-base font-medium leading-snug mb-2 group-hover:text-gold-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-gold-500 group-hover:text-gold-600 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
