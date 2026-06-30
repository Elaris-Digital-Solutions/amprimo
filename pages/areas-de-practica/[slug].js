import Seo from '../../components/Seo'
import Link from 'next/link'
import Navbar     from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import Footer     from '../../components/Footer'
import { areas }  from '../../components/PracticeAreas'
import { serviceSchema, breadcrumbSchema } from '../../lib/schema'

export default function AreaPage({ area, prev, next }) {
  return (
    <>
      <Seo
        title={`${area.title} | Amprimo, Flury, Barboza & Rodríguez Abogados`}
        description={area.description}
        path={`/areas-de-practica/${area.slug}`}
        schema={[
          serviceSchema(area),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Áreas de Práctica', path: '/areas-de-practica' },
            { name: area.title, path: `/areas-de-practica/${area.slug}` },
          ]),
        ]}
      />

      <Navbar />

      <main id="main-content">
        <PageHeader label="Práctica Legal" title={area.title} />

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="grid lg:grid-cols-3 gap-16">

              {/* Contenido principal */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {area.body.map((paragraph, i) => (
                    <p key={i} className="text-navy-600 text-base lg:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Navegación entre áreas */}
                <div className="mt-16 pt-10 border-t border-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {prev ? (
                    <Link
                      href={`/areas-de-practica/${prev.slug}`}
                      className="flex items-center gap-3 text-navy-500 hover:text-gold-600 transition-colors duration-200 group"
                    >
                      <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="text-sm font-medium">{prev.title}</span>
                    </Link>
                  ) : <div />}

                  {next ? (
                    <Link
                      href={`/areas-de-practica/${next.slug}`}
                      className="flex items-center gap-3 text-navy-500 hover:text-gold-600 transition-colors duration-200 group sm:flex-row-reverse"
                    >
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="text-sm font-medium">{next.title}</span>
                    </Link>
                  ) : <div />}
                </div>
              </div>

              {/* Sidebar: todas las áreas */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="text-xs uppercase tracking-widest font-semibold text-navy-400 mb-5">
                    Todas las áreas
                  </p>
                  <nav className="space-y-1">
                    {areas.map(a => (
                      <Link
                        key={a.slug}
                        href={`/areas-de-practica/${a.slug}`}
                        className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 border-l-2 ${
                          a.slug === area.slug
                            ? 'border-gold-500 text-navy-900 font-medium bg-cream'
                            : 'border-transparent text-navy-500 hover:text-navy-900 hover:border-navy-200'
                        }`}
                      >
                        {a.title}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-8">
                    <Link href="/areas-de-practica" className="btn-outline w-full justify-center">
                      Ver todas
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: areas.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const index = areas.findIndex(a => a.slug === params.slug)
  if (index === -1) return { notFound: true }

  const area = areas[index]
  const prev = index > 0 ? areas[index - 1] : null
  const next = index < areas.length - 1 ? areas[index + 1] : null

  return {
    props: {
      area: { id: area.id, title: area.title, slug: area.slug, description: area.description, body: area.body },
      prev: prev ? { title: prev.title, slug: prev.slug } : null,
      next: next ? { title: next.title, slug: next.slug } : null,
    },
  }
}
