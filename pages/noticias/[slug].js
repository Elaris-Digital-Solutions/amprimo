import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { newsPosts, tagColors, getPostBySlug, getRelatedPosts } from '../../lib/newsPosts'
import { hoverPrefetch } from '../../lib/prefetchHero'

export async function getStaticPaths() {
  return {
    paths: newsPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { notFound: true }
  const related = getRelatedPosts(params.slug, 3)
  return { props: { post, related } }
}

/* ── Renderiza un bloque de contenido según su tipo ────────────────── */
function ContentBlock({ block }) {
  if (block.type === 'p') {
    return <p className="text-navy-700 text-base leading-relaxed mb-6">{block.text}</p>
  }
  if (block.type === 'h2') {
    return <h2 className="font-serif text-navy-900 text-2xl lg:text-3xl font-medium mt-12 mb-5">{block.text}</h2>
  }
  if (block.type === 'ul') {
    return (
      <ul className="list-disc pl-6 space-y-3 mb-6 text-navy-700 text-base leading-relaxed marker:text-gold-500">
        {block.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  if (block.type === 'source') {
    return (
      <p className="mt-8 pt-6 border-t border-navy-100 text-navy-700 text-sm">
        {block.label}{' '}
        <a href={block.href} target="_blank" rel="noopener noreferrer"
          className="text-gold-600 underline underline-offset-2 hover:text-gold-700 break-words">
          aquí
        </a>.
      </p>
    )
  }
  if (block.type === 'table') {
    return (
      <div className="my-8 overflow-x-auto border border-navy-100">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          {block.headers && (
            <thead className="bg-navy-50">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 font-semibold text-navy-900 border-b border-navy-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-navy-100 last:border-b-0 align-top">
                {row.map((cell, ci) => {
                  // soporte para rowspan { rowspan, text }
                  if (cell && typeof cell === 'object' && cell.rowspan) {
                    return (
                      <td key={ci} rowSpan={cell.rowspan}
                        className="px-4 py-3 bg-navy-50/50 font-semibold text-navy-900 border-r border-navy-100 align-middle">
                        {cell.text}
                      </td>
                    )
                  }
                  // soporte para { strong, text }
                  if (cell && typeof cell === 'object' && (cell.strong || cell.text)) {
                    return (
                      <td key={ci} className="px-4 py-3 text-navy-700 border-r border-navy-100 last:border-r-0">
                        {cell.strong && <strong className="text-navy-900">{cell.strong}</strong>}
                        {cell.text}
                      </td>
                    )
                  }
                  return (
                    <td key={ci}
                      className={`px-4 py-3 border-r border-navy-100 last:border-r-0 ${
                        ci === 0 ? 'font-semibold text-navy-900 bg-navy-50/50' : 'text-navy-700'
                      }`}>
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

export default function NewsDetail({ post, related }) {
  const sectionRef = useRef(null)

  // Re-ejecuta cuando cambia el slug (Next.js reutiliza el mismo componente entre [slug] params)
  useEffect(() => {
    if (!sectionRef.current) return

    // Reset: limpiar .visible de animaciones previas (DOM se reusa entre transiciones)
    const items = sectionRef.current.querySelectorAll('.animate-on-scroll')
    items.forEach(el => el.classList.remove('visible'))

    // Scroll al inicio en cambios de slug
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'auto' })

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
          })
        }
      }),
      { threshold: 0.05 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [post.slug])

  const ogTitle = `${post.title} | Amprimo Abogados`
  const url = `https://amprimo.netlify.app/noticias/${post.slug}`

  return (
    <>
      <Head>
        <title>{post.title} | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Amprimo Abogados" />
        <meta property="og:locale" content="es_PE" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <section className="relative mt-20 bg-navy-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,123,181,0.08),transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-16 lg:pb-20">
            <Link
              href="/noticias"
              {...hoverPrefetch('/noticias')}
              className="inline-flex items-center gap-2 text-white/55 text-xs uppercase tracking-widest font-semibold hover:text-gold-400 transition-colors duration-200 mb-10"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Noticias
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 border ${tagColors[post.tag] || 'bg-navy-50 text-navy-600 border-navy-200'}`}>
                {post.tag}
              </span>
              <span className="text-white/55 text-xs">{post.date}</span>
            </div>

            <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15]">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Contenido */}
        <article ref={sectionRef} className="bg-white py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            {post.content.map((block, i) => (
              <div key={i} className="animate-on-scroll">
                <ContentBlock block={block} />
              </div>
            ))}

            {/* Compartir */}
            <div className="mt-12 pt-8 border-t border-navy-100 flex flex-wrap items-center gap-4">
              <span className="text-navy-500 text-xs uppercase tracking-widest font-semibold">Compartir</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank" rel="noopener noreferrer"
                aria-label="Compartir en LinkedIn"
                className="w-10 h-10 border border-navy-200 flex items-center justify-center text-navy-700 hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
                target="_blank" rel="noopener noreferrer"
                aria-label="Compartir en X"
                className="w-10 h-10 border border-navy-200 flex items-center justify-center text-navy-700 hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`}
                target="_blank" rel="noopener noreferrer"
                aria-label="Compartir en WhatsApp"
                className="w-10 h-10 border border-navy-200 flex items-center justify-center text-navy-700 hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Posts relacionados */}
        {related.length > 0 && (
          <section className="bg-cream py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-end justify-between gap-6 mb-10">
                <h2 className="font-serif text-navy-900 text-2xl lg:text-3xl font-medium">
                  Otras <span className="italic text-navy-700">publicaciones</span>
                </h2>
                <Link
                  href="/noticias"
                  {...hoverPrefetch('/noticias')}
                  className="hidden sm:inline-flex items-center gap-2 text-navy-700 text-xs uppercase tracking-widest font-semibold hover:text-gold-600 transition-colors duration-200"
                >
                  Ver todas
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    href={`/noticias/${r.slug}`}
                    className="group bg-white p-6 border border-transparent hover:border-navy-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 border ${tagColors[r.tag] || 'bg-navy-50 text-navy-600 border-navy-200'}`}>
                        {r.tag}
                      </span>
                      <span className="text-navy-400 text-xs">{r.date}</span>
                    </div>
                    <h3 className="font-serif text-navy-900 text-base font-medium leading-snug mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {r.title}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed line-clamp-2">
                      {r.excerpt}
                    </p>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 group-hover:w-full transition-all duration-500" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
