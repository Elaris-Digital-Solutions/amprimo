import Seo from '../components/Seo'
import Navbar        from '../components/Navbar'
import PracticeAreas, { areas } from '../components/PracticeAreas'
import Footer        from '../components/Footer'
import { breadcrumbSchema, itemListSchema } from '../lib/schema'

export default function AreasDePracticaPage() {
  return (
    <>
      <Seo
        title="Áreas de Práctica | Amprimo, Flury, Barboza & Rodríguez Abogados"
        description="Las dieciséis áreas de práctica del Estudio Amprimo: derecho constitucional, arbitraje, solución de controversias, administrativo, corporativo, tributario, laboral, minero, ambiental y más. Asesoría legal integral en el Perú."
        path="/areas-de-practica"
        preloadImage="/images/hero-areas-especializacion.webp"
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Áreas de Práctica', path: '/areas-de-practica' },
          ]),
          itemListSchema(
            areas.map(a => ({ name: a.title, path: `/areas-de-practica/${a.slug}` }))
          ),
        ]}
      />

      <Navbar />

      <main id="main-content">
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-950">
          <img
            src="/images/hero-areas-especializacion.webp"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-900/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/80 text-xs uppercase tracking-widest2 font-semibold font-sans">Práctica Legal</span>
            </div>
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
              Áreas de Práctica
            </h1>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-4 max-w-3xl">
              A través de nuestras dieciséis áreas de práctica, brindamos una asesoría legal completa
              y especializada que cubre todos los aspectos legales esenciales para el éxito y
              desarrollo de negocios en el Perú.
            </p>
          </div>
        </section>
        <PracticeAreas preview={false} />
      </main>

      <Footer />
    </>
  )
}
