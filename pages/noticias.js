import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Blog   from '../components/Blog'
import Footer from '../components/Footer'
import { newsPosts } from '../lib/newsPosts'
import { breadcrumbSchema, itemListSchema } from '../lib/schema'

export default function NoticiasPage() {
  return (
    <>
      <Seo
        title="Noticias & Actualizaciones | Amprimo, Flury, Barboza & Rodríguez Abogados"
        description="Noticias, actualizaciones legales y reconocimientos del Estudio Amprimo (Amprimo, Flury, Barboza & Rodríguez Abogados). Análisis del derecho constitucional, tributario, laboral y corporativo en el Perú."
        path="/noticias"
        preloadImage="/images/hero-noticias.webp"
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Noticias', path: '/noticias' },
          ]),
          itemListSchema(
            newsPosts.map(p => ({ name: p.title, path: `/noticias/${p.slug}` }))
          ),
        ]}
      />

      <Navbar />

      <main id="main-content">
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-950">
          <img
            src="/images/hero-noticias.webp"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-900/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/80 text-xs uppercase tracking-widest2 font-semibold font-sans">Publicaciones</span>
            </div>
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
              Noticias &amp; Actualizaciones
            </h1>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-4 max-w-3xl">
              Te mantendremos al día con las noticias, publicaciones y anuncios más importantes
              del Estudio. Descubre nuestros reconocimientos, análisis legales y las novedades
              que marcan el rumbo del derecho en el Perú.
            </p>
          </div>
        </section>
        <Blog preview={false} />
      </main>

      <Footer />
    </>
  )
}
