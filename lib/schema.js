// ─────────────────────────────────────────────────────────────────────────────
// Constructores de datos estructurados (JSON-LD / Schema.org)
//
// Estos objetos alimentan a Google (rich results, knowledge panel) y a los
// motores generativos (GEO/AEO: ChatGPT, Perplexity, Gemini) para que entiendan
// QUÉ es la firma, QUIÉNES son los abogados y QUÉ hace cada área.
// ─────────────────────────────────────────────────────────────────────────────
import {
  SITE_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  LEGAL_NAME,
  ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  FOUNDING_YEAR,
  CONTACT,
  SOCIAL_PROFILES,
  LOGO_URL,
  OG_IMAGE,
  RUC,
  absoluteUrl,
} from './siteConfig'

// @id estable de la organización → permite referenciarla desde otros nodos.
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: CONTACT.streetAddress,
  addressLocality: CONTACT.addressLocality,
  addressRegion: CONTACT.addressRegion,
  postalCode: CONTACT.postalCode,
  addressCountry: CONTACT.addressCountry,
}

// LegalService es subtipo de LocalBusiness → habilita ficha local + mapa.
export function organizationSchema() {
  return {
    '@type': ['LegalService', 'Organization'],
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    alternateName: ALTERNATE_NAMES,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    image: OG_IMAGE,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    foundingDate: FOUNDING_YEAR,
    taxID: RUC,
    vatID: RUC,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CONTACT.latitude,
      longitude: CONTACT.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${CONTACT.latitude},${CONTACT.longitude}`,
    areaServed: { '@type': 'Country', name: 'Perú' },
    priceRange: '$$$',
    knowsLanguage: ['es', 'en'],
    sameAs: SOCIAL_PROFILES,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: ALTERNATE_NAMES,
    description: SITE_DESCRIPTION,
    inLanguage: 'es-PE',
    publisher: { '@id': ORG_ID },
  }
}

// Migas de pan → sitelinks de breadcrumb en los resultados de Google.
export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  }
}

// Person → clave para que al buscar el NOMBRE de un abogado aparezca su perfil.
export function personSchema(lawyer, slug) {
  const url = absoluteUrl(`/equipo/${slug}`)
  const sameAs = []
  if (lawyer.linkedin) sameAs.push(lawyer.linkedin)

  return {
    '@type': 'Person',
    '@id': `${url}#person`,
    name: lawyer.name,
    url,
    image: lawyer.img ? absoluteUrl(lawyer.img) : undefined,
    jobTitle: lawyer.role,
    email: lawyer.email ? `mailto:${lawyer.email}` : undefined,
    telephone: CONTACT.phone,
    worksFor: { '@id': ORG_ID },
    knowsAbout: lawyer.areas && lawyer.areas.length ? lawyer.areas : undefined,
    knowsLanguage: ['es', 'en'],
    sameAs: sameAs.length ? sameAs : undefined,
    address: postalAddress,
  }
}

// Service → describe cada área de práctica como un servicio de la firma.
export function serviceSchema(area) {
  return {
    '@type': 'Service',
    '@id': absoluteUrl(`/areas-de-practica/${area.slug}`) + '#service',
    name: area.title,
    description: area.description,
    serviceType: area.title,
    url: absoluteUrl(`/areas-de-practica/${area.slug}`),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Perú' },
  }
}

// Artículo de noticias / actualización legal.
export function articleSchema(post) {
  const url = absoluteUrl(`/noticias/${post.slug}`)
  return {
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: OG_IMAGE,
    datePublished: post.isoDate || undefined,
    dateModified: post.isoDate || undefined,
    inLanguage: 'es-PE',
    articleSection: post.category,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isAccessibleForFree: true,
  }
}

// CollectionPage / lista de elementos (equipo, áreas) → contexto para AEO.
export function itemListSchema(items) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.path),
    })),
  }
}

// FAQPage → puede ganar el bloque de "preguntas frecuentes" en Google y es
// muy efectivo para respuestas en motores generativos (AEO).
export function faqSchema(qa) {
  return {
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

// Envuelve uno o varios nodos en un documento JSON-LD con @context y @graph.
export function graph(nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  }
}
