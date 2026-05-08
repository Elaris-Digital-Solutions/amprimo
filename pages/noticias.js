import Head from 'next/head'
import Navbar     from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Blog       from '../components/Blog'
import Footer     from '../components/Footer'

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
        <PageHeader
          label="Publicaciones"
          title="Noticias &amp; Actualizaciones"
          subtitle="¡Bienvenido/a! Te mantendremos al día con las noticias y anuncios importantes del Estudio."
        />
        <Blog preview={false} />
      </main>

      <Footer />
    </>
  )
}
