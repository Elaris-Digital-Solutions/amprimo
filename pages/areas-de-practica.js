import Head from 'next/head'
import Navbar        from '../components/Navbar'
import PageHeader    from '../components/PageHeader'
import PracticeAreas from '../components/PracticeAreas'
import Footer        from '../components/Footer'

export default function AreasDePracticaPage() {
  return (
    <>
      <Head>
        <title>Áreas de Práctica | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content="A través de nuestras diez áreas de práctica, brindamos una asesoría legal completa y especializada en todos los aspectos legales esenciales para el éxito de negocios en el Perú." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          label="Práctica Legal"
          title="Áreas de Práctica"
          subtitle="A través de nuestras diez áreas de práctica, brindamos una asesoría legal completa y especializada que cubre todos los aspectos legales esenciales para el éxito y desarrollo de negocios en el Perú. Nuestro objetivo es proporcionar un conocimiento profundo y orientación legal en una variedad de áreas, para contribuir al éxito sostenible de nuestros clientes en el país."
          subtitleMaxW="max-w-[60rem]"
        />
        <PracticeAreas preview={false} />
      </main>

      <Footer />
    </>
  )
}
