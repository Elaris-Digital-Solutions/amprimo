import { useEffect, useRef } from 'react'
import Link from 'next/link'

const areas = [
  {
    id: 1,
    title: 'Derecho Constitucional',
    slug: 'derecho-constitucional',
    description:
      'Brindamos asesoría especializada sobre la aplicación e interpretación de leyes, decretos legislativos, decretos de urgencia, tratados internacionales y reglamentos en el marco jurídico de la Constitución.',
    body: [
      'Brindamos asesoría especializada sobre la aplicación e interpretación de leyes, decretos legislativos, decretos de urgencia, tratados internacionales y reglamentos en el marco jurídico de la Constitución.',
      'Asimismo, patrocinamos a nuestros clientes en procesos de inconstitucionalidad, de amparo, de cumplimiento, de acción popular y demás acciones de garantías ante el Poder Judicial y el Tribunal Constitucional.',
      'Por otro lado, prestamos asesoría técnico-legal para la elaboración de anteproyectos de normas con rango de ley y proyectos de normas reglamentarias.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.95 5.05l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Procesal, Solución de Controversias y Arbitraje',
    slug: 'procesal-solucion-de-controversias-y-arbitraje',
    description:
      'Tecnicismo y detalle para la elaboración, desarrollo e implementación de estrategias procesales, el alto nivel de eficiencia en la resolución de los procesos y por el estricto rigor ético de los profesionales que conforman la misma.',
    body: [
      'Nuestra área Procesal y de Solución de Controversias está conformada por profesionales de reconocido prestigio que han participado en diversos casos tanto a nivel judicial como arbitral, participando en el patrocinio de procesos de diversa índole, así como también habiendo sido designados como árbitros en arbitrajes de diversas materias.',
      'La práctica de nuestra Firma en materia Procesal y de Solución de Controversias se caracteriza principalmente por el tecnicismo y detalle para la elaboración, desarrollo e implementación de estrategias procesales, el alto nivel de eficiencia y eficacia en la resolución de los procesos y por el estricto rigor ético de los profesionales que conforman la misma.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Derecho Corporativo y Patrimonial',
    slug: 'derecho-corporativo-y-patrimonial',
    description:
      'Proveemos servicios legales para el desarrollo de actividades empresariales que comprenden aspectos como: constitución de sociedades, desarrollo de estatutos, elaboración de actas, poderes y desarrollo de diversos documentos.',
    body: [
      'Proveemos servicios legales para el desarrollo de actividades empresariales en general, los que comprenden aspectos como: constitución de sociedades, desarrollo de estatutos, elaboración de actas, poderes, representación, pactos entre accionistas, diseño de contratos y desarrollo de diversos documentos empresariales.',
      'Estructuramos y realizamos operaciones de transferencias de empresas, fusiones, escisiones y otras formas de reorganización societaria.',
      'También asesoramos en casos de ofertas públicas de adquisición, liquidación de empresas y procedimientos concursales.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Inversiones, Regulaciones y Recursos Naturales',
    slug: 'inversiones-regulaciones-y-recursos-naturales',
    description:
      'Proporcionamos asesoría en aspectos jurídicos vinculados al aprovechamiento de los recursos naturales por parte de agentes privados, otorgamiento de concesiones y autorizaciones para la explotación de estos.',
    body: [
      'Proporcionamos asesoría en aspectos jurídicos vinculados al aprovechamiento de los recursos naturales por parte de agentes privados, otorgamiento de concesiones y autorizaciones para la explotación de estos, así como para garantizar su adecuada exploración, producción, transporte, distribución y comercialización, según corresponda al tipo de recurso.',
      'En esa línea, complementamos estas prácticas con la asesoría en temas ambientales y, en el caso de servicios públicos, asesoramos en temas de regulación y en la protección de los derechos de los usuarios.',
      'Los ámbitos en materia de recursos naturales e inversiones en que nos especializamos son: energía, hidrocarburos, minería, agua, transportes e infraestructura, telecomunicaciones, pesca y recursos forestales.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Derecho Administrativo y Contratación Pública',
    slug: 'derecho-administrativo-y-contratacion-publica',
    description:
      'Asesoramos a las entidades del Estado en el diseño de sus estructuras organizativas y herramientas de gestión; el desarrollo de su proceso de ejecución presupuestal; operaciones de inversión pública, a nivel de todas sus etapas.',
    body: [
      'Ofrecemos servicios especializados a las entidades de la Administración Pública, con el fin de que éstas desarrollen sus funciones en el marco de la legalidad.',
      'En tal sentido, asesoramos a las entidades del Estado en el diseño de sus estructuras organizativas y herramientas de gestión; el desarrollo de su proceso de ejecución presupuestal; la gestión de personal; operaciones de inversión pública, a nivel de todas sus etapas (elaboración de bases, observaciones, impugnaciones y resolución de conflictos).',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Derecho Tributario y Financiero',
    slug: 'derecho-tributario-y-financiero',
    description:
      'Absolvemos consultas sobre los efectos impositivos de las diferentes transacciones, inversiones y negocios que realizan o proyectan realizar en el país empresas nacionales o extranjeras.',
    body: [
      'Absolvemos consultas sobre los efectos impositivos de las diferentes transacciones, inversiones y negocios que realizan o proyectan realizar en el país empresas nacionales o extranjeras.',
      'Asesoramos a nuestros clientes durante procesos de fiscalización y en procedimientos contenciosos tributarios.',
      'Brindamos asesoramiento integral en consultoría tributaria, específicamente en la elaboración de informes altamente especializados, así como en la implementación de proyectos de planificación fiscal para grupos empresariales, con énfasis en la interpretación y aplicación de Convenios de Doble Imposición.',
      'Asimismo, nos encargamos de la estructuración de estrategias, incluyendo el posterior monitoreo de procesos contencioso tributarios ante entidades administrativas y el Poder Judicial.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Derecho Laboral',
    slug: 'derecho-laboral',
    description:
      'Elaboramos planeamientos y propuestas de mejoras en la gestión de recursos humanos, así como en asuntos relacionados a la seguridad y salud en el trabajo, contratación de trabajadores nacionales y extranjeros, entre otros.',
    body: [
      'Asesoramos a nuestros clientes en todos los niveles y ámbitos de la relación laboral de carácter individual y/o colectivo, elaborando planeamientos y propuestas de mejoras en la gestión de sus recursos humanos, así como en asuntos relacionados a la seguridad y salud en el trabajo, contratación de trabajadores nacionales y extranjeros, entre otros.',
      'Asesoramos y patrocinamos a nuestros clientes en procedimientos administrativo-laborales, así como en procesos judiciales relacionados a pagos de beneficios sociales, impugnación de sanciones y terminación de la relación laboral.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Derecho de la Competencia y Propiedad Intelectual',
    slug: 'derecho-de-la-competencia-y-propiedad-intelectual',
    description:
      'Asesoramiento del debido cumplimiento de la legislación de protección al consumidor y el registro, renovación, cancelación, nulidad, oposición y actos de modificación de cualquier elemento de la propiedad industrial.',
    body: [
      'Nuestra actividad se centra en el asesoramiento en materias de la libre y leal competencia, dumping y publicidad.',
      'Aconsejamos a nuestros clientes para el debido cumplimiento de la legislación de protección al consumidor.',
      'Nos dedicamos también al registro, renovación, cancelación, nulidad, oposición y actos de modificación de cualquier elemento de la propiedad industrial (patentes, marcas, nombres comerciales, etc.).',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Derecho de Familia',
    slug: 'derecho-de-familia',
    description:
      'Asesoramos a nuestros clientes en la toma de decisiones que le permitan resolver asuntos de Derecho de Familia, brindándoles herramientas y mecanismos esenciales a fin de lograr resolver sus conflictos, con especial sensibilidad social y sólidos principios de justicia y honestidad.',
    body: [
      'Asesoramos a nuestros clientes en la toma de decisiones que le permitan resolver asuntos de Derecho de Familia, brindándoles herramientas y mecanismos esenciales a fin de lograr resolver sus conflictos, con especial sensibilidad social y sólidos principios de justicia y honestidad.',
      'Patrocinamos causas judiciales relacionadas con alimentos, tenencia, régimen de visitas, patria potestad (extinción y pérdida), separación de patrimonios, extinción de sociedad de gananciales, disolución del vínculo matrimonial, filiación extramatrimonial, adopción de menores, permiso de viaje de menores, entre otros temas relacionados a asuntos que converjan en la relación matrimonial y paterno-filial.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Derecho Inmobiliario',
    slug: 'derecho-inmobiliario',
    description:
      'Brindamos asesoría a fondos inmobiliarios, constructoras y corporaciones inmobiliarias para el financiamiento de sus portafolios, activos y proyectos. Además, de asesorar a nuestros clientes en las etapas de su inversión inmobiliaria.',
    body: [
      'Estamos familiarizados con el mercado inmobiliario peruano y sus jugadores estratégicos, involucrándonos en el desarrollo de algunos de los proyectos inmobiliarios y de infraestructura más sofisticados y complejos en el Perú.',
      'Brindamos asesoría a fondos inmobiliarios, constructoras y corporaciones inmobiliarias para el financiamiento de sus portafolios, activos y proyectos.',
      'Además, brindamos asesoría a nuestros clientes en las demás etapas de su inversión inmobiliaria, desde el análisis técnico-legal de la operación, así como durante su negociación y cierre, incluyendo nuestro patrocinio en la fase de su ejecución contractual y resolución de sus controversias ante todo foro de solución de conflictos.',
      'Nuestra práctica se vale de un equipo interdisciplinario que combina conocimientos de derecho urbanístico, derecho tributario, derecho civil contractual, derecho financiero y derecho ambiental, entre otros.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
  },
]

export { areas }

export default function PracticeAreas({ preview = false }) {
  const sectionRef = useRef(null)

  const displayed = preview ? areas.slice(0, 6) : areas

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="areas" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado — solo en vista previa del home */}
        {preview && (
        <div className="max-w-2xl mb-16">
          <p className="animate-on-scroll section-label mb-4">Práctica Legal</p>
          <div className="divider-gold mb-8 animate-on-scroll" />
          <h2 className="animate-on-scroll section-title text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2]">
            Áreas de<span className="italic text-navy-700"> Práctica</span>
          </h2>
          <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mt-6">
            A través de nuestras diez áreas de práctica, brindamos una asesoría legal completa
            y especializada que cubre todos los aspectos legales esenciales para el éxito y desarrollo
            de negocios en Perú. Nuestro objetivo es proporcionar un conocimiento profundo y orientación
            legal en una variedad de áreas, para contribuir al éxito sostenible de nuestros clientes en el país.
          </p>
        </div>
        )}

        {/* Grid de áreas */}
        {(() => {
          const remainder = displayed.length % 3
          return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-navy-100">
          {displayed.map((area, idx) => {
            // Centrar si es el único en la última fila
            const isAlone  = remainder === 1 && idx === displayed.length - 1
            const colStart = isAlone ? 'lg:col-start-2' : ''
            const card = (
            <Link
              key={area.id}
              href={`/areas-de-practica/${area.slug}`}
              className={`animate-on-scroll relative bg-white p-8 group cursor-pointer transition-colors duration-300 practice-card overflow-hidden hover:bg-navy-950 border-r border-b border-navy-100 ${colStart}`}
            >
              {/* Ícono */}
              <div className="mb-5 text-navy-700 transition-colors duration-300 group-hover:text-gold-400">
                {area.icon}
              </div>

              {/* Título */}
              <h3 className="font-serif text-base font-medium leading-snug mb-3 text-navy-900 transition-colors duration-300 group-hover:text-white">
                {area.title}
              </h3>

              <div className="w-8 h-px mb-4 bg-navy-200 transition-colors duration-300 group-hover:bg-gold-500" />

              {/* Descripción */}
              <p className="text-xs leading-relaxed text-navy-500 transition-colors duration-300 group-hover:text-white/65">
                {area.description}
              </p>

              {/* Ver más */}
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-navy-300 transition-colors duration-300 group-hover:text-gold-400">
                <span>Ver más</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Línea bottom al hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gold-500 w-0 transition-all duration-500 group-hover:w-full" />
            </Link>
            )
            // Rellenos invisibles para evitar borde suelto cuando hay un ítem solo
            if (isAlone) {
              return [
                <div key="filler-l" className="hidden lg:block border-r border-b border-navy-100" aria-hidden="true" />,
                card,
                <div key="filler-r" className="hidden lg:block border-r border-b border-navy-100" aria-hidden="true" />,
              ]
            }
            return card
          })}
          </div>
          )
        })()}

        {/* Botón "ver todas" en preview */}
        {preview && (
          <div className="mt-10 text-center">
            <Link href="/areas-de-practica" className="btn-outline">
              Ver todas las áreas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
