import Seo from '../components/Seo'
import Navbar     from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer     from '../components/Footer'
import { breadcrumbSchema } from '../lib/schema'

const paragraphs = [
  'En cumplimiento de lo dispuesto por la Ley N° 29733, Ley de Protección de Datos Personales y su Reglamento aprobado por Decreto Supremo N° 003-2013-JUS, AMPRIMO, FLURY, BARBOZA & RODRÍGUEZ ABOGADOS SOCIEDAD CIVIL DE R.L. ("Estudio Amprimo") identificada con RUC N° 20513696885, ubicada en Av. Circunvalación del Golf Los Incas 134, Centro Empresarial Panorama, Torre 1, Oficina 1405, distrito de Santiago de Surco, provincia y departamento de Lima, pone en conocimiento de sus clientes (los "Titulares") la política aplicable al tratamiento de sus datos personales.',
  'Los datos personales de los Titulares serán almacenados en el banco de datos denominado "Clientes" con la finalidad de preparar, celebrar y ejecutar la relación contractual entablada con aquellos, así como atender sus reclamaciones, dudas o comentarios en el proceso de posventa. Además, los datos podrán ser tratados para finalidades accesorias tales como finalidades publicitarias o de marketing digital, solo si contamos con su consentimiento previo, expreso, libre e informado.',
  'Los datos personales que serán objeto de tratamiento son los siguientes: nombres y apellidos, dirección de domicilio, dirección de correo electrónico, teléfono y DNI (Datos de carácter identificativo); datos bancarios (datos económicos).',
  'Si los Titulares deciden brindar sus datos, por medio de la presente declaran y certifican que ellos les corresponden; que toda la información proporcionada es verdadera, completa y exacta, y, que asumen la responsabilidad sobre la veracidad, exactitud, integridad y vigencia de esta.',
  'En caso de que los datos personales no sean facilitados por el Titular, el Estudio Amprimo no podrá cumplir con llevarla a cabo el cumplimiento de la finalidad descrita.',
  'Sus datos personales sólo serán utilizados con propósitos limitados, según lo expuesto precedentemente. No se realizan transferencias nacionales o internacionales, salvo medie su consentimiento expreso y/u obligación legal.',
  'Los Titulares tienen el derecho de acceder, rectificar, suprimir, cancelar o bien oponerse a su tratamiento para fines específicos. Los Titulares podrán en todo momento revocar el consentimiento otorgado expresamente, tanto como limitar el uso o divulgación de sus datos personales, de corresponder, para lo cual podrán enviar su solicitud al correo electrónico administración@amprimoabogados.com o a la dirección física indicada líneas arriba.',
  'De considerar que no ha sido atendido en el ejercicio de sus derechos puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales dirigiéndose a la mesa de partes del Ministerio de Justicia y Derechos Humanos: Calle Scipion Llona 350, Miraflores, Lima, Perú llenando el formulario publicado en el siguiente enlace https://www.minjus.gob.pe/wp-content/uploads/2018/12/FORMULARIO-DE-PROCEDIMIENTO-TRILATERAL-DE-TUTELA.pdf.',
  'Los datos personales serán conservados mientras dure la relación contractual entre los Titulares y el Estudio Amprimo; y, hasta diez (10) años contados desde la fecha en que culminó su vigencia. Este tiempo de conservación se encuentra estrictamente relacionado a los plazos de prescripción existentes en el ordenamiento jurídico peruano, pues podría exigirse al Estudio Amprimo algún tipo de responsabilidad derivada de la relación contractual u otro. Adicionalmente, en caso de habernos brindado su consentimiento para finalidades adicionales, los datos personales serán conservados hasta que revoque su consentimiento.',
  'En estricta aplicación del Principio de Seguridad en el tratamiento de datos personales, el Estudio Amprimo proporcionará de forma razonable las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los datos personales de los usuarios evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. La obligación y responsabilidad del Estudio Amprimo se limita a disponer razonablemente de los medios adecuados para este fin.',
  'Los datos personales suministrados por el usuario son tratados con total confidencialidad por parte del Estudio Amprimo y todos los actores que intervienen en el tratamiento de los datos personales, bajo las condiciones que se indican en esta Política.',
  'El Estudio Amprimo se reserva el derecho a modificar la presente Política con el objeto de adaptarla a cambios legislativos o jurídicos dentro del marco de la Ley de Protección de Datos Personales, lo cual le será informado, según corresponda.',
]

export default function PoliticaDeDatos() {
  return (
    <>
      <Seo
        title="Política de Datos | Amprimo, Flury, Barboza & Rodríguez Abogados"
        description="Política de Protección de Datos Personales del Estudio Amprimo, conforme a la Ley N° 29733 y su Reglamento."
        path="/politica-de-datos"
        schema={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Política de Datos', path: '/politica-de-datos' },
          ]),
        ]}
      />

      <Navbar />

      <main id="main-content">
        <PageHeader
          label="Legal"
          title="Política de Datos"
          subtitle="Política de Protección de Datos Personales conforme a la Ley N° 29733."
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-navy-600 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
