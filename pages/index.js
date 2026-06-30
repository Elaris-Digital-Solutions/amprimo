import Seo          from '../components/Seo'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import About        from '../components/About'
import PracticeAreas from '../components/PracticeAreas'
import Recognitions from '../components/Recognitions'
import Footer       from '../components/Footer'
import { organizationSchema, websiteSchema } from '../lib/schema'

export default function Home() {
  return (
    <>
      <Seo
        title="Amprimo, Flury, Barboza & Rodríguez Abogados | Estudio de Abogados en Lima, Perú"
        description="Estudio Amprimo (Amprimo, Flury, Barboza & Rodríguez Abogados): firma de alto perfil en Lima, Perú, especializada en derecho constitucional, arbitraje, litigios y asesoría corporativa. Reconocida por Chambers & Partners, Legal 500, Best Lawyers y Leaders League."
        path="/"
        preloadImage="/images/hero-inicio.webp"
        schema={[organizationSchema(), websiteSchema()]}
      />

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
