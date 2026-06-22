// Fuente única de los reconocimientos (directorios legales).
// Se usa en: componente Recognitions (landing) y páginas /reconocimientos/[slug].
//
// `about`  → descripción factual del directorio (lista para publicar).
// `logo`   → sellos optimizados a webp (ver scripts/optimize-logos.js).
//            Los badges van a color real sobre la sección oscura; Chambers se
//            procesó a blanco sin fondo para verse igual que su predecesor.
// TODO (obs. 14): completar el contenido ESPECÍFICO de la firma que enviará el
//   cliente: `areas` (prácticas/abogados reconocidos y años), `quotes` (citas
//   del directorio) y `officialUrl` (perfil oficial de la firma).

export const recognitions = [
  {
    slug: 'chambers-and-partners',
    name: 'Chambers & Partners',
    // ?v evita que el caché "immutable" sirva el sello anterior (mismo nombre).
    logo: '/images/chambers.webp?v=2026b',
    logoStyle: {},
    about:
      'Directorio legal británico fundado en 1990 que clasifica a los principales estudios de abogados y profesionales del derecho del mundo, a partir de una investigación independiente basada en entrevistas a clientes y pares.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
  {
    slug: 'legal-500',
    name: 'The Legal 500',
    logo: '/images/legal-500.webp?v=2026',
    logoStyle: {},
    about:
      'Guía internacional que, desde 1987, analiza las capacidades de los estudios de abogados en más de 150 jurisdicciones, reconociendo a las firmas y abogados líderes en cada área de práctica.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
  {
    slug: 'leaders-league',
    name: 'Leaders League',
    logo: '/images/ranked-firm.webp',
    logoStyle: {},
    about:
      'Firma internacional de rankings y calificación que evalúa y distingue a los principales estudios de abogados y profesionales en América Latina y el mundo.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
  {
    slug: 'latin-lawyer',
    name: 'Latin Lawyer 250',
    logo: '/images/latin-lawyer.webp',
    logoStyle: {},
    about:
      'Guía de referencia de los principales estudios de abogados de América Latina, elaborada a partir de una investigación independiente del mercado legal de la región.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
  {
    slug: 'world-tax',
    name: 'World Tax',
    logo: '/images/world-tax.webp',
    logoStyle: {},
    about:
      'Guía internacional elaborada por el International Tax Review (ITR) que reconoce a las principales firmas de asesoría tributaria del mundo.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
  {
    slug: 'lacca',
    name: 'LACCA Thought Leaders',
    logo: '/images/lacca.webp',
    logoStyle: {},
    about:
      'Reconocimiento de LACCA (Latin America Corporate Counsel Association) a los principales abogados y firmas de la región, a partir de la valoración de los asesores legales internos de las grandes corporaciones de América Latina.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
  {
    slug: 'best-lawyers',
    name: 'Best Lawyers',
    logo: '/images/best-lawyers.webp',
    logoStyle: { maxWidth: '160px' },
    about:
      'Uno de los sistemas de evaluación entre pares más antiguos y respetados de la profesión legal, que reconoce a los abogados destacados por especialidad y jurisdicción.',
    officialUrl: '',
    areas: [],
    quotes: [],
  },
]

export function getRecognitionBySlug(slug) {
  return recognitions.find(r => r.slug === slug) || null
}
