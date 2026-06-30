import Seo from '../components/Seo'
import Navbar  from '../components/Navbar'
import Contact from '../components/Contact'
import Footer  from '../components/Footer'
import { organizationSchema, breadcrumbSchema } from '../lib/schema'

export default function ContactanosPage() {
  return (
    <>
      <Seo
        title="Contáctanos | Amprimo, Flury, Barboza & Rodríguez Abogados"
        description="Contacta al Estudio Amprimo en Lima, Perú. Oficinas en el Centro Empresarial Panorama, Santiago de Surco. Teléfono (01) 208 0130. El equipo está preparado para brindarte asistencia y orientación legal."
        path="/contactanos"
        preloadImage="/images/hero-contactanos.webp"
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Contáctanos', path: '/contactanos' },
          ]),
        ]}
      >
        {/* Preconnects para Google Maps */}
        <link rel="preconnect" href="https://maps.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//maps.gstatic.com" />
      </Seo>

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
              <span className="text-white/80 text-xs uppercase tracking-widest2 font-semibold font-sans">Atención al Cliente</span>
            </div>
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
              Contáctanos
            </h1>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-4 max-w-3xl">
              Nuestro equipo está preparado para brindarte asistencia y orientación en todos
              los aspectos legales que necesites. Estamos comprometidos con ofrecer respuestas
              ágiles, claras y adaptadas a cada situación particular de nuestros clientes.
            </p>
          </div>
        </section>
        <Contact />
      </main>

      <Footer />
    </>
  )
}
