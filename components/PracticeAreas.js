import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { hoverPrefetch } from '../lib/prefetchHero'

// ── Áreas de práctica (obs. 16) ───────────────────────────────────────────────
// Las 6 primeras (en negrita en el documento) son las que se muestran en el landing.
// Descripciones 1-6: textos definitivos enviados por el cliente.
// Descripciones 7-16 y los `body` no marcados: provisionales — TODO (obs. 16/18):
//   reemplazar por el contenido definitivo que enviará el cliente.
// `image`: foto alusiva de fondo de cada tarjeta — TODO (obs. 17): pendiente de
//   recibir las imágenes; mientras tanto se muestra un degradado de marca.
const areas = [
  {
    id: 1,
    title: 'Derecho Constitucional',
    slug: 'derecho-constitucional',
    image: '',
    description:
      'Defendemos los derechos fundamentales y el orden constitucional de empresas, entidades y particulares, conduciendo procesos constitucionales ante el Poder Judicial y el Tribunal Constitucional con una estrategia que integra rigor jurídico y conocimiento del funcionamiento del Estado.',
    body: [
      'Defendemos los derechos fundamentales y el orden constitucional de empresas, entidades y particulares, conduciendo procesos constitucionales ante el Poder Judicial y el Tribunal Constitucional con una estrategia que integra rigor jurídico y conocimiento del funcionamiento del Estado.',
      'Brindamos asesoría especializada sobre la aplicación e interpretación de leyes, decretos legislativos, decretos de urgencia, tratados internacionales y reglamentos en el marco jurídico de la Constitución.',
      'Patrocinamos a nuestros clientes en procesos de inconstitucionalidad, de amparo, de cumplimiento, de acción popular y demás acciones de garantías ante el Poder Judicial y el Tribunal Constitucional.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Solución de Controversias',
    slug: 'solucion-de-controversias',
    image: '',
    description:
      'Diseñamos la estrategia y asumimos la representación integral en conflictos judiciales, administrativos y extrajudiciales, acompañando al cliente desde la evaluación del conflicto hasta su resolución definitiva.',
    body: [
      'Diseñamos la estrategia y asumimos la representación integral en conflictos judiciales, administrativos y extrajudiciales, acompañando al cliente desde la evaluación del conflicto hasta su resolución definitiva.',
      'Nuestra práctica se caracteriza por el tecnicismo y detalle en la elaboración, desarrollo e implementación de estrategias procesales, el alto nivel de eficiencia y eficacia en la resolución de los procesos y el estricto rigor ético de los profesionales que la conforman.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Arbitraje',
    slug: 'arbitraje',
    image: '',
    description:
      'Patrocinamos a empresas en arbitrajes nacionales e internacionales de alta complejidad. Nuestros abogados son referentes del medio, altamente requeridos como litigantes, árbitros de prestigio y peritos en las disputas más relevantes del país.',
    body: [
      'Patrocinamos a empresas en arbitrajes nacionales e internacionales de alta complejidad. Nuestros abogados son referentes del medio, altamente requeridos como litigantes, árbitros de prestigio y peritos en las disputas más relevantes del país.',
      'Nuestros profesionales integran las listas de árbitros de los principales centros de arbitraje nacionales e internacionales, habiendo participado en arbitrajes de diversa índole y en condición tanto de litigantes como de árbitros y peritos.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Derecho Administrativo y Regulatorio',
    slug: 'derecho-administrativo-y-regulatorio',
    image: '',
    description:
      'Asesoramos a empresas e instituciones en su relación con el Estado: regulación de servicios públicos, concesiones, contratación pública, procedimientos administrativos y eliminación de barreras burocráticas, defendiendo los intereses de nuestros clientes ante la administración y en la vía contencioso-administrativa.',
    body: [
      'Asesoramos a empresas e instituciones en su relación con el Estado: regulación de servicios públicos, concesiones, contratación pública, procedimientos administrativos y eliminación de barreras burocráticas, defendiendo los intereses de nuestros clientes ante la administración y en la vía contencioso-administrativa.',
      'Ofrecemos servicios especializados a las entidades de la Administración Pública para que desarrollen sus funciones en el marco de la legalidad, así como a los administrados que se relacionan con ellas.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Derecho Inmobiliario y Construcción',
    slug: 'derecho-inmobiliario-y-construccion',
    image: '',
    description:
      'Asesoramos a desarrolladores y empresas en proyectos inmobiliarios y de construcción, desde el diseño y estructuración de la inversión hasta la obtención de permisos y la resolución de controversias, acompañando cada etapa con un enfoque que combina conocimiento del sector y solidez en la gestión de proyectos.',
    body: [
      'Asesoramos a desarrolladores y empresas en proyectos inmobiliarios y de construcción, desde el diseño y estructuración de la inversión hasta la obtención de permisos y la resolución de controversias, acompañando cada etapa con un enfoque que combina conocimiento del sector y solidez en la gestión de proyectos.',
      'Estamos familiarizados con el mercado inmobiliario peruano y sus jugadores estratégicos, involucrándonos en el desarrollo de algunos de los proyectos inmobiliarios y de infraestructura más sofisticados y complejos del país.',
      'Nuestra práctica se vale de un equipo interdisciplinario que combina conocimientos de derecho urbanístico, tributario, civil contractual, financiero y ambiental, entre otros.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Derecho Civil Contractual',
    slug: 'derecho-civil-contractual',
    image: '',
    description:
      'Asesoramos a empresas y particulares en el diseño, redacción, revisión y negociación de contratos complejos, acompañando cada etapa de la relación contractual con un enfoque preventivo que anticipa riesgos y brinda seguridad jurídica a sus operaciones y negocios.',
    body: [
      'Asesoramos a empresas y particulares en el diseño, redacción, revisión y negociación de contratos complejos, acompañando cada etapa de la relación contractual con un enfoque preventivo que anticipa riesgos y brinda seguridad jurídica a sus operaciones y negocios.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Derecho Corporativo y Societario',
    slug: 'derecho-corporativo-y-societario',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Proveemos servicios legales para el desarrollo de actividades empresariales: constitución de sociedades, estatutos, juntas, reorganizaciones societarias, fusiones y adquisiciones, pactos entre accionistas y el diseño de los contratos que estructuran cada operación.',
    body: [
      'Proveemos servicios legales para el desarrollo de actividades empresariales en general: constitución de sociedades, desarrollo de estatutos, elaboración de actas, poderes, representación, pactos entre accionistas, diseño de contratos y desarrollo de diversos documentos empresariales.',
      'Estructuramos y realizamos operaciones de transferencia de empresas, fusiones, escisiones y otras formas de reorganización societaria; asimismo asesoramos en ofertas públicas de adquisición, liquidación de empresas y procedimientos concursales.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Derecho Civil no Patrimonial',
    slug: 'derecho-civil-no-patrimonial',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Asesoramos y patrocinamos a personas y familias en asuntos de derecho de familia y demás materias civiles no patrimoniales, con especial sensibilidad social y sólidos principios de justicia y honestidad.',
    body: [
      'Asesoramos a nuestros clientes en la toma de decisiones que les permitan resolver asuntos de derecho de familia y otras materias civiles no patrimoniales, con especial sensibilidad social y sólidos principios de justicia y honestidad.',
      'Patrocinamos causas relacionadas con alimentos, tenencia, régimen de visitas, patria potestad, separación de patrimonios, disolución del vínculo matrimonial, filiación, adopción y demás asuntos vinculados a la relación familiar y paterno-filial.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Derecho de la Competencia y Propiedad Intelectual',
    slug: 'derecho-de-la-competencia-y-propiedad-intelectual',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Asesoramos en libre y leal competencia, publicidad y protección al consumidor, y gestionamos el registro y la defensa de marcas, patentes y demás elementos de la propiedad industrial e intelectual.',
    body: [
      'Nuestra actividad se centra en el asesoramiento en materias de libre y leal competencia, dumping y publicidad, y en el debido cumplimiento de la legislación de protección al consumidor.',
      'Nos dedicamos también al registro, renovación, cancelación, nulidad, oposición y actos de modificación de cualquier elemento de la propiedad industrial (patentes, marcas, nombres comerciales, entre otros).',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Derecho Minero',
    slug: 'derecho-minero',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Asesoramos en todas las etapas de la actividad minera, desde el otorgamiento de concesiones y autorizaciones hasta la exploración, explotación y comercialización, acompañando a los titulares en su relación con el Estado y en la gestión regulatoria del sector.',
    body: [
      'Asesoramos en todas las etapas de la actividad minera, desde el otorgamiento de concesiones y autorizaciones hasta la exploración, explotación y comercialización, acompañando a los titulares en su relación con el Estado y en la gestión regulatoria del sector.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 11,
    title: 'Derecho de Energía e Hidrocarburos',
    slug: 'derecho-de-energia-e-hidrocarburos',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Brindamos asesoría especializada en los sectores de energía e hidrocarburos: concesiones, regulación, contratos sectoriales y la protección de los derechos de los agentes del mercado en sus operaciones de producción, transporte, distribución y comercialización.',
    body: [
      'Brindamos asesoría especializada en los sectores de energía e hidrocarburos: concesiones, regulación, contratos sectoriales y la protección de los derechos de los agentes del mercado en sus operaciones de producción, transporte, distribución y comercialización.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 12,
    title: 'Derecho Ambiental',
    slug: 'derecho-ambiental',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Acompañamos a nuestros clientes en el cumplimiento de la normativa ambiental, la obtención y gestión de instrumentos ambientales y la atención de procedimientos ante las autoridades de fiscalización y regulación ambiental.',
    body: [
      'Acompañamos a nuestros clientes en el cumplimiento de la normativa ambiental, la obtención y gestión de instrumentos ambientales y la atención de procedimientos ante las autoridades de fiscalización y regulación ambiental.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
      </svg>
    ),
  },
  {
    id: 13,
    title: 'Derecho Farmacéutico',
    slug: 'derecho-farmaceutico',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Asesoramos a la industria farmacéutica y de la salud en materia regulatoria, sanitaria y de cumplimiento, acompañando a nuestros clientes en su relación con las autoridades del sector.',
    body: [
      'Asesoramos a la industria farmacéutica y de la salud en materia regulatoria, sanitaria y de cumplimiento, acompañando a nuestros clientes en su relación con las autoridades del sector.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 14,
    title: 'Derecho Tributario',
    slug: 'derecho-tributario',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Absolvemos consultas sobre los efectos impositivos de las transacciones, inversiones y negocios de empresas nacionales y extranjeras, y patrocinamos procesos de fiscalización y procedimientos contencioso-tributarios ante la administración y el Poder Judicial.',
    body: [
      'Absolvemos consultas sobre los efectos impositivos de las diferentes transacciones, inversiones y negocios que realizan o proyectan realizar en el país empresas nacionales o extranjeras.',
      'Asesoramos a nuestros clientes durante procesos de fiscalización y en procedimientos contenciosos tributarios, así como en la planificación fiscal de grupos empresariales, con énfasis en la interpretación y aplicación de Convenios de Doble Imposición.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 15,
    title: 'Derecho Laboral Individual y Colectivo',
    slug: 'derecho-laboral-individual-y-colectivo',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Asesoramos en todos los ámbitos de la relación laboral, individual y colectiva: gestión de recursos humanos, seguridad y salud en el trabajo, contratación de personal nacional y extranjero, y el patrocinio en procedimientos administrativos y procesos judiciales laborales.',
    body: [
      'Asesoramos a nuestros clientes en todos los niveles y ámbitos de la relación laboral, individual y colectiva, elaborando planeamientos y propuestas de mejora en la gestión de recursos humanos, así como en seguridad y salud en el trabajo y contratación de trabajadores nacionales y extranjeros.',
      'Asesoramos y patrocinamos en procedimientos administrativo-laborales y en procesos judiciales relacionados con beneficios sociales, impugnación de sanciones y terminación de la relación laboral.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 16,
    title: 'Protección de Datos Personales y Ciberseguridad',
    slug: 'proteccion-de-datos-personales-y-ciberseguridad',
    image: '',
    // TODO (obs. 18): descripción/contenido definitivo pendiente.
    description:
      'Asesoramos a las organizaciones en el cumplimiento de la normativa de protección de datos personales y en la prevención y gestión de riesgos de ciberseguridad, desde las políticas internas hasta la atención de incidentes y procedimientos ante la autoridad.',
    body: [
      'Asesoramos a las organizaciones en el cumplimiento de la normativa de protección de datos personales y en la prevención y gestión de riesgos de ciberseguridad, desde las políticas internas hasta la atención de incidentes y procedimientos ante la autoridad.',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

export { areas }

export default function PracticeAreas({ preview = false }) {
  const sectionRef = useRef(null)

  // En el landing solo se muestran las 6 áreas principales (obs. 16).
  const displayed = preview ? areas.slice(0, 6) : areas

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60)
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

        {/* Encabezado — solo en vista previa del home (obs. 15) */}
        {preview && (
        <div className="max-w-2xl mb-12">
          <p className="animate-on-scroll section-label mb-4">Práctica Legal</p>
          <div className="divider-gold mb-8 animate-on-scroll" />
          <h2 className="animate-on-scroll section-title text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2]">
            Áreas de<span className="italic text-navy-700"> Práctica</span>
          </h2>
          <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mt-6">
            A través de nuestras dieciséis áreas de práctica, brindamos una asesoría legal completa
            y especializada que cubre todos los aspectos legales esenciales para el éxito y desarrollo
            de negocios en Perú.
          </p>
        </div>
        )}

        {/* Grid de áreas — tarjetas con foto alusiva y revelado al hover (obs. 17).
            Compacto: 3 columnas en el landing (6 áreas) y 4 en la página completa
            (16 áreas), de modo que el segmento se vea en una sola vista (obs. 19). */}
        <div className={`grid grid-cols-2 ${preview ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-3 lg:grid-cols-4'} gap-3 lg:gap-4`}>
          {displayed.map(area => (
            <Link
              key={area.id}
              href={`/areas-de-practica/${area.slug}`}
              className="practice-card group relative block overflow-hidden aspect-[4/3] bg-navy-900"
            >
              {/* Fondo: foto alusiva o degradado de marca como placeholder */}
              {area.image ? (
                <img
                  src={area.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" aria-hidden="true" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/20" />

              {/* Estado base: ícono + nombre del área sobre la foto */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-gold-400 mb-3">{area.icon}</div>
                <h3 className="font-serif text-white text-base lg:text-lg font-medium leading-snug">
                  {area.title}
                </h3>
                <div className="w-8 h-px mt-3 bg-gold-500" />
              </div>

              {/* Hover: se devela el resumen (obs. 17 / tamaño de letra obs. 20) */}
              <div className="absolute inset-0 bg-navy-950/92 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-serif text-white text-base lg:text-lg font-medium leading-snug mb-3">
                  {area.title}
                </h3>
                <div className="w-8 h-px mb-4 bg-gold-500" />
                <p className="text-white/75 text-sm leading-relaxed line-clamp-5">
                  {area.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-gold-400 text-xs uppercase tracking-widest font-semibold" aria-hidden="true">
                  Ver más
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón "ver todas" en preview */}
        {preview && (
          <div className="mt-10 text-center">
            <Link href="/areas-de-practica" {...hoverPrefetch('/areas-de-practica')} className="btn-outline">
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
