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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/images/hero-inicio.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main>
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
