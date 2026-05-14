import Head from 'next/head'
import Navbar from '../components/Navbar'
import Blog   from '../components/Blog'
import Footer from '../components/Footer'

export default function NoticiasPage() {
  return (
    <>
      <Head>
        <title>Noticias | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content="Mantente al día con las últimas noticias, actualizaciones legales y reconocimientos del estudio Amprimo, Flury, Barboza & Rodríguez Abogados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amprimo.netlify.app/noticias" />
        <meta property="og:title" content="Noticias | Amprimo, Flury, Barboza & Rodríguez Abogados" />
        <meta property="og:description" content="Mantente al día con las últimas noticias, actualizaciones legales y reconocimientos del estudio Amprimo, Flury, Barboza & Rodríguez Abogados." />
        <meta property="og:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Amprimo, Flury, Barboza & Rodríguez Abogados" />
        <meta property="og:site_name" content="Amprimo Abogados" />
        <meta property="og:locale" content="es_PE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <link rel="preload" as="image" href="/images/hero-noticias.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main id="main-content">
        <section className="relative mt-20 min-h-[65vh] flex items-end overflow-hidden bg-navy-950">
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
