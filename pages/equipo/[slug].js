import Head from 'next/head'
import Link from 'next/link'
import Navbar  from '../../components/Navbar'
import Footer  from '../../components/Footer'
import { getLawyerBySlug, getAllSlugs, toSlug, allLawyers } from '../../data/lawyers'

export async function getStaticPaths() {
  const slugs = getAllSlugs()
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const lawyer = getLawyerBySlug(params.slug)
  if (!lawyer) return { notFound: true }

  // Get adjacent lawyers for prev/next navigation
  const index   = allLawyers.findIndex(l => toSlug(l.name) === params.slug)
  const prev     = index > 0 ? allLawyers[index - 1] : null
  const next     = index < allLawyers.length - 1 ? allLawyers[index + 1] : null

  return {
    props: {
      lawyer,
      prevLawyer: prev ? { name: prev.name, slug: toSlug(prev.name), role: prev.role } : null,
      nextLawyer: next ? { name: next.name, slug: toSlug(next.name), role: next.role } : null,
    },
  }
}

export default function LawyerProfile({ lawyer, prevLawyer, nextLawyer }) {
  const educationParagraphs = lawyer.education ? lawyer.education.trim().split('\n\n') : []
  const bioParagraphs = lawyer.bio ? lawyer.bio.trim().split('\n\n').filter(Boolean) : []
  const allParagraphs = [...educationParagraphs, ...bioParagraphs]

  return (
    <>
      <Head>
        <title>{lawyer.name} | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content={`Perfil de ${lawyer.name}, ${lawyer.role} en Amprimo, Flury, Barboza & Rodríguez Abogados. ${lawyer.speciality}.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main id="main-content">
        {/* Hero del perfil */}
        <section className="relative bg-navy-950 pt-32 pb-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0f2035]" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-10 text-white/40 text-xs uppercase tracking-widest">
              <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/equipo" className="hover:text-white/70 transition-colors">Equipo</Link>
              <span>/</span>
              <span className="text-white/60">{lawyer.name}</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-end pb-0">
              {/* Foto */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="relative w-64 h-80 lg:w-72 lg:h-96 overflow-hidden">
                  <img
                    src={lawyer.img}
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="absolute inset-0 bg-navy-800 hidden items-center justify-center" style={{ display: 'none' }}>
                    <svg className="w-20 h-20 text-navy-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  {/* Borde decorativo */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500" />
                </div>
              </div>

              {/* Info básica */}
              <div className="lg:col-span-2 pb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-gold-500" />
                  <span className="text-gold-400 text-xs uppercase tracking-widest2 font-semibold font-sans">
                    {lawyer.role}
                  </span>
                </div>

                <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6">
                  {lawyer.name}
                </h1>

                <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl">
                  {lawyer.speciality}
                </p>

                {/* Áreas de práctica */}
                {lawyer.areas && lawyer.areas.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {lawyer.areas.map(area => (
                      <span
                        key={area}
                        className="text-white/50 text-xs border border-white/15 px-3 py-1.5 tracking-wide"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}

                {/* Contacto links */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gold-500 text-white text-sm font-semibold tracking-wide hover:bg-gold-600 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {lawyer.email}
                  </a>

                  <a
                    href={lawyer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-white/20 text-white/70 text-sm font-semibold tracking-wide hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biografía */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16">

              {/* Columna principal: bio */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-gold-500" />
                  <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold font-sans">Biografía</span>
                </div>

                <div className="space-y-5">
                  {allParagraphs.map((para, i) => (
                    <p key={i} className="text-navy-600 text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Columna lateral: contacto y áreas */}
              <div className="lg:col-span-1">
                {/* Card de contacto */}
                <div className="bg-cream border border-navy-100 p-7 mb-8">
                  <h3 className="font-serif text-navy-900 text-lg font-medium mb-6">Contacto directo</h3>

                  <div className="space-y-5">
                    <div>
                      <p className="text-navy-400 text-xs uppercase tracking-wider mb-2">Correo electrónico</p>
                      <a
                        href={`mailto:${lawyer.email}`}
                        className="flex items-center gap-2 text-navy-700 text-sm hover:text-gold-600 transition-colors group"
                      >
                        <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="break-all">{lawyer.email}</span>
                      </a>
                    </div>

                    <div className="h-px bg-navy-100" />

                    <div>
                      <p className="text-navy-400 text-xs uppercase tracking-wider mb-2">LinkedIn</p>
                      <a
                        href={lawyer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-navy-700 text-sm hover:text-gold-600 transition-colors"
                      >
                        <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Ver perfil en LinkedIn
                      </a>
                    </div>

                    <div className="h-px bg-navy-100" />

                    <div>
                      <p className="text-navy-400 text-xs uppercase tracking-wider mb-2">Teléfono de la firma</p>
                      <a href="tel:+5112080130" className="flex items-center gap-2 text-navy-700 text-sm hover:text-gold-600 transition-colors">
                        <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (01) 208 0130
                      </a>
                    </div>
                  </div>
                </div>

                {/* Áreas de práctica */}
                {lawyer.areas && lawyer.areas.length > 0 && (
                  <div className="border border-navy-100 p-7">
                    <h3 className="font-serif text-navy-900 text-lg font-medium mb-5">Áreas de especialización</h3>
                    <div className="space-y-2">
                      {lawyer.areas.map(area => (
                        <div key={area} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                          <span className="text-navy-600 text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Navegación entre abogados */}
        <section className="bg-navy-50 border-t border-navy-100 py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between">
              {prevLawyer ? (
                <Link
                  href={`/equipo/${prevLawyer.slug}`}
                  className="group flex items-center gap-3 text-navy-600 hover:text-navy-900 transition-colors"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div>
                    <p className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">Anterior</p>
                    <p className="font-serif text-sm font-medium">{prevLawyer.name}</p>
                    <p className="text-xs text-navy-400">{prevLawyer.role}</p>
                  </div>
                </Link>
              ) : <div />}

              <Link
                href="/equipo"
                className="flex flex-col items-center gap-1 text-navy-500 hover:text-navy-900 transition-colors"
              >
                <div className="grid grid-cols-3 gap-0.5 w-7 h-7">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-current rounded-sm" />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-wider">Directorio</span>
              </Link>

              {nextLawyer ? (
                <Link
                  href={`/equipo/${nextLawyer.slug}`}
                  className="group flex items-center gap-3 text-navy-600 hover:text-navy-900 transition-colors text-right"
                >
                  <div>
                    <p className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">Siguiente</p>
                    <p className="font-serif text-sm font-medium">{nextLawyer.name}</p>
                    <p className="text-xs text-navy-400">{nextLawyer.role}</p>
                  </div>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
