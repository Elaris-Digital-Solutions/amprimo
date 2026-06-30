import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Team   from '../components/Team'
import Footer from '../components/Footer'
import { allLawyers, toSlug } from '../data/lawyers'
import { breadcrumbSchema, itemListSchema } from '../lib/schema'

export default function EquipoPage() {
  return (
    <>
      <Seo
        title="Nuestro Equipo | Amprimo, Flury, Barboza & Rodríguez Abogados"
        description="Diecisiete abogados con sólida formación y experiencia en el sector público y privado. Conoce a los socios y asociados del Estudio Amprimo, especialistas en todas las áreas del derecho."
        path="/equipo"
        preloadImage="/images/hero-contactanos.webp"
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Nuestro Equipo', path: '/equipo' },
          ]),
          itemListSchema(
            allLawyers.map(l => ({ name: l.name, path: `/equipo/${toSlug(l.name)}` }))
          ),
        ]}
      />

      <Navbar />

      <main id="main-content">
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-950">
          <img
            src="/images/hero-contactanos.webp"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-900/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/80 text-xs uppercase tracking-widest2 font-semibold font-sans">Directorio</span>
            </div>
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
              Nuestro Equipo
            </h1>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-4 max-w-3xl">
              Diecisiete abogados con sólida formación y experiencia en el sector público y privado,
              unidos por una misma forma de ejercer el derecho: con rigor, profundidad y compromiso total.
            </p>
          </div>
        </section>
        <Team />
      </main>

      <Footer />
    </>
  )
}
