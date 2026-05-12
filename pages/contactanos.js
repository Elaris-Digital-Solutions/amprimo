import Head from 'next/head'
import Navbar     from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Contact    from '../components/Contact'
import Footer     from '../components/Footer'

export default function ContactanosPage() {
  return (
    <>
      <Head>
        <title>Contáctanos | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content="Si te encuentras ante alguna consulta o necesitas abordar un asunto legal, el equipo de Amprimo, Flury, Barboza & Rodríguez Abogados está preparado para brindarte asistencia y orientación." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Preconnects para Google Maps — reducen tiempo de carga del iframe */}
        <link rel="preconnect" href="https://maps.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//maps.gstatic.com" />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          label="Atención al Cliente"
          title="Contáctanos"
          subtitle="Si te encuentras ante alguna consulta o necesitas abordar un asunto legal, el equipo de Amprimo, Flury, Barboza &amp; Rodríguez Abogados está preparado para brindarte asistencia y orientación."
        />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
