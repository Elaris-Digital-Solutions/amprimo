import Head from 'next/head'
import Navbar      from '../components/Navbar'
import PageHeader  from '../components/PageHeader'
import Team        from '../components/Team'
import Footer      from '../components/Footer'

export default function EquipoPage() {
  return (
    <>
      <Head>
        <title>Equipo | Amprimo, Flury, Barboza &amp; Rodríguez Abogados</title>
        <meta name="description" content="Conoce a los socios y asociados de Amprimo, Flury, Barboza & Rodríguez Abogados. Un equipo de abogados con amplia experiencia en todas las áreas del derecho." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          label="Directorio"
          title="Nuestro Equipo"
          subtitle="Nuestra excelencia se sustenta en la sólida formación y amplia experiencia de nuestros abogados, quienes han ocupado cargos de alta responsabilidad en la administración pública y el sector privado."
        />
        <Team />
      </main>

      <Footer />
    </>
  )
}
