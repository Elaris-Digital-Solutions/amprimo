import Head from 'next/head'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import About        from '../components/About'
import PracticeAreas from '../components/PracticeAreas'
import Recognitions from '../components/Recognitions'
import Footer       from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Amprimo, Flury, Barboza &amp; Rodríguez Abogados | Lima, Perú</title>
        <meta name="description" content="Firma boutique de alto perfil especializada en derecho constitucional, litigios y asesoría corporativa. Reconocida por Chambers & Partners, Legal 500, Best Lawyers y Leaders League." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / WhatsApp / Social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amprimo.netlify.app/" />
        <meta property="og:title" content="Amprimo, Flury, Barboza & Rodríguez Abogados | Lima, Perú" />
        <meta property="og:description" content="Firma boutique de alto perfil especializada en derecho constitucional, litigios y asesoría corporativa. Reconocida por Chambers & Partners, Legal 500, Best Lawyers y Leaders League." />
        <meta property="og:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Amprimo, Flury, Barboza & Rodríguez Abogados" />
        <meta property="og:site_name" content="Amprimo Abogados" />
        <meta property="og:locale" content="es_PE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://amprimo.netlify.app/og-image.jpg" />
        <link rel="preload" as="image" href="/images/hero-inicio.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Recognitions />
        <PracticeAreas preview={true} />
      </main>

      <Footer />

      {/* WhatsApp flotante */}
    </>
  )
}
