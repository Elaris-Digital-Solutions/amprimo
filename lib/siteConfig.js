// ─────────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE VERDAD DEL SITIO (SEO / GEO / AEO)
//
// Si algún día se decide usar "www" en vez del apex, o cambia el dominio,
// basta con editar SITE_URL aquí: todo el SEO (canonical, sitemap, Open Graph,
// structured data, llms.txt) se actualiza desde este archivo.
// ─────────────────────────────────────────────────────────────────────────────

// Dominio canónico definitivo (sin slash final). Apex, sin "www".
export const SITE_URL = 'https://amprimoabogados.com'

// Nombre comercial completo y variantes con las que la gente busca a la firma.
// `alternateName` alimenta el structured data → ayuda a que Google asocie
// "Amprimo", "Amprimo Abogados", "Estudio Amprimo", etc. con esta web.
export const SITE_NAME = 'Amprimo, Flury, Barboza & Rodríguez Abogados'
export const SITE_SHORT_NAME = 'Amprimo Abogados'
export const LEGAL_NAME =
  'Amprimo, Flury, Barboza & Rodríguez Abogados Sociedad Civil de R.L.'

export const ALTERNATE_NAMES = [
  'Amprimo',
  'Amprimo Abogados',
  'Estudio Amprimo',
  'Amprimo Flury',
  'Amprimo Flury Barboza & Rodríguez',
  'Amprimo, Flury, Barboza & Rodríguez',
  'Estudio Amprimo Abogados',
]

export const RUC = '20513696885'
export const FOUNDING_YEAR = '2006'

export const SITE_DESCRIPTION =
  'Amprimo, Flury, Barboza & Rodríguez Abogados (Estudio Amprimo) es una firma legal de alto perfil en Lima, Perú, especializada en derecho constitucional, arbitraje, litigios y asesoría corporativa. Reconocida por Chambers & Partners, The Legal 500, Best Lawyers, Leaders League y Latin Lawyer.'

// Palabras clave de marca y de práctica (búsqueda por firma y por abogado).
export const SITE_KEYWORDS = [
  'Amprimo',
  'Amprimo Abogados',
  'Estudio Amprimo',
  'Amprimo Flury Barboza Rodríguez',
  'abogados Lima',
  'estudio de abogados Perú',
  'derecho constitucional Perú',
  'arbitraje Perú',
  'litigios Perú',
  'asesoría legal corporativa',
  'Natale Amprimo',
  'abogados constitucionalistas Perú',
]

// Contacto / ubicación (NAP — Name, Address, Phone — consistente con el footer).
export const CONTACT = {
  email: 'administracion@amprimoabogados.com',
  phone: '+51 1 208 0130',
  phoneTel: '+5112080130',
  streetAddress:
    'Av. Circunvalación del Golf Los Incas 134, Centro Empresarial Panorama, Torre 1, Oficina 1405',
  addressLocality: 'Santiago de Surco',
  addressRegion: 'Lima',
  postalCode: '15023',
  addressCountry: 'PE',
  // Coordenadas aproximadas del Centro Empresarial Panorama (Golf Los Incas, Surco).
  latitude: -12.1051,
  longitude: -76.969,
}

// Perfiles oficiales → `sameAs` del structured data (refuerza la entidad).
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/amprimo-&-flury-abogados/',
  'https://www.instagram.com/amprimoabogados',
  'https://x.com/amprimoabogados',
]

// Imagen para compartir en redes (Open Graph / Twitter).
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const LOGO_URL = `${SITE_URL}/favicon-512x512.png`

// Verificación de Google Search Console. Cuando tengas el código del meta-tag
// "google-site-verification", pégalo aquí y se inyectará automáticamente.
export const GOOGLE_SITE_VERIFICATION = ''

// Helper: arma una URL absoluta canónica a partir de una ruta ("/equipo" → "https://…/equipo").
export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${clean}`
}
