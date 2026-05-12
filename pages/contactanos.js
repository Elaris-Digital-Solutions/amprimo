import Head from 'next/head'
import Navbar  from '../components/Navbar'
import Contact from '../components/Contact'
import Footer  from '../components/Footer'

export default function ContactanosPage() {
  return (
    <>
      <Head>
        <title>Contáctanos | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content="Si te encuentras ante alguna consulta o necesitas abordar un asunto legal, el equipo de Amprimo, Flury, Barboza & Rodríguez Abogados está preparado para brindarte asistencia y orientación." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/images/hero-contactanos.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Preconnects para Google Maps */}
        <link rel="preconnect" href="https://maps.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//maps.gstatic.com" />
      </Head>

      <Navbar />

      <main>
        <section className="relative mt-20 min-h-[65vh] flex items-end overflow-hidden">
          <img
            src="/images/hero-contactanos.webp"
            alt="Contáctanos"
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
