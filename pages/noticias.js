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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <img
            src="/images/hero-noticias.webp"
            alt="Noticias"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-900/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span className="section-label">Publicaciones</span>
            </div>
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
              Noticias &amp; Actualizaciones
            </h1>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-4 max-w-2xl">
              Te mantendremos al día con las noticias y anuncios importantes del Estudio.
            </p>
          </div>
        </section>
        <Blog preview={false} />
      </main>

      <Footer />
    </>
  )
}
