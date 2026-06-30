import Seo from '../../components/Seo'
import Link from 'next/link'
import Navbar     from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import Footer     from '../../components/Footer'
import { recognitions, getRecognitionBySlug } from '../../lib/recognitions'
import { breadcrumbSchema } from '../../lib/schema'

export async function getStaticPaths() {
  return {
    paths: recognitions.map(r => ({ params: { slug: r.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const recognition = getRecognitionBySlug(params.slug)
  if (!recognition) return { notFound: true }
  return { props: { recognition } }
}

export default function RecognitionPage({ recognition }) {
  return (
    <>
      <Seo
        title={`${recognition.name} — Reconocimiento | Amprimo, Flury, Barboza & Rodríguez Abogados`}
        description={`${recognition.name}: ${recognition.about} El Estudio Amprimo figura entre las firmas reconocidas.`}
        path={`/reconocimientos/${recognition.slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Reconocimientos', path: '/#reconocimientos' },
            { name: recognition.name, path: `/reconocimientos/${recognition.slug}` },
          ]),
        ]}
      />

      <Navbar />

      <main id="main-content">
        <PageHeader label="Reconocimiento" title={recognition.name} subtitle={recognition.about} subtitleMaxW="max-w-3xl" />

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">

            {/* Sello sobre panel oscuro (los logos usan blend/invert para fondo oscuro) */}
            <div className="bg-navy-950 flex items-center justify-center p-12 lg:p-16 mb-12">
              <img
                src={recognition.logo}
                alt={recognition.name}
                style={recognition.logoStyle}
                className="h-28 lg:h-36 w-auto object-contain"
              />
            </div>

            {/* Áreas / abogados reconocidos — TODO (obs. 14): contenido de la firma */}
            {recognition.areas.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-gold-500" />
                  <span className="section-label">Reconocimientos a la firma</span>
                </div>
                <ul className="space-y-2">
                  {recognition.areas.map(area => (
                    <li key={area} className="flex items-start gap-3 text-navy-600 text-base">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Citas del directorio */}
            {recognition.quotes.length > 0 && (
              <div className="space-y-6 mb-12">
                {recognition.quotes.map((q, i) => (
                  <blockquote key={i} className="bg-cream border-l-4 border-gold-500 p-6 lg:p-8 font-serif text-navy-800 text-lg italic leading-relaxed">
                    &ldquo;{q}&rdquo;
                    <cite className="block not-italic font-sans text-navy-400 text-xs uppercase tracking-widest font-semibold mt-4">
                      — {recognition.name}
                    </cite>
                  </blockquote>
                ))}
              </div>
            )}

            {/* Enlace al ranking oficial (si existe) */}
            {recognition.officialUrl && (
              <a
                href={recognition.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Ver ranking oficial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {/* Volver */}
            <div className="mt-12 pt-8 border-t border-navy-100">
              <Link
                href="/#reconocimientos"
                className="inline-flex items-center gap-2 text-navy-500 hover:text-gold-600 transition-colors duration-200 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium uppercase tracking-widest">Volver a reconocimientos</span>
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
