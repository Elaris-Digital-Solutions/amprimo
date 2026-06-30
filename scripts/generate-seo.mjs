// ─────────────────────────────────────────────────────────────────────────────
// Generador de sitemap.xml y robots.txt
//
// Se ejecuta automáticamente antes de `next build` (ver package.json) para que
// el sitemap SIEMPRE refleje las rutas reales del sitio: si se agrega un abogado,
// un área, una noticia o un reconocimiento, aparece solo sin tocar nada más.
//
// Lee los slugs directamente de los archivos de datos (no importa módulos, para
// evitar problemas con JSX/ESM) y escribe los archivos estáticos en /public,
// de modo que funcionan en cualquier hosting (Netlify, Hostinger, etc.).
// ─────────────────────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const PUBLIC = join(ROOT, 'public')

const read = (rel) => readFileSync(join(ROOT, rel), 'utf8')

// Dominio canónico → se toma de lib/siteConfig.js (fuente única de verdad).
const siteConfig = read('lib/siteConfig.js')
const SITE_URL = (siteConfig.match(/SITE_URL\s*=\s*'([^']+)'/) || [])[1] || 'https://amprimoabogados.com'

const today = new Date().toISOString().slice(0, 10)

// ── slugify idéntico al de data/lawyers.js ──────────────────────────────────
function toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Extrae todas las coincidencias de un patrón global (grupo 1).
function matchAll(text, regex) {
  return [...text.matchAll(regex)].map((m) => m[1])
}

// ── Recolectar rutas dinámicas ──────────────────────────────────────────────
const lawyersSrc = read('data/lawyers.js')
const lawyerSlugs = matchAll(lawyersSrc, /name:\s*'([^']+)'/g).map(toSlug)

const areasSrc = read('components/PracticeAreas.js')
const areaSlugs = matchAll(areasSrc, /slug:\s*'([^']+)'/g)

const newsSrc = read('lib/newsPosts.js')
const newsSlugs = matchAll(newsSrc, /slug:\s*'([^']+)'/g)
// fecha ISO de cada noticia, en el mismo orden que los slugs.
const newsDates = matchAll(newsSrc, /isoDate:\s*'([^']+)'/g)

const recogSrc = read('lib/recognitions.js')
const recogSlugs = matchAll(recogSrc, /slug:\s*'([^']+)'/g)

// ── Construir la lista de URLs del sitemap ──────────────────────────────────
const urls = []
const add = (path, { priority = 0.7, changefreq = 'monthly', lastmod = today } = {}) =>
  urls.push({ loc: `${SITE_URL}${path}`, priority, changefreq, lastmod })

// Páginas principales
add('/', { priority: 1.0, changefreq: 'weekly' })
add('/el-estudio', { priority: 0.9, changefreq: 'monthly' })
add('/equipo', { priority: 0.9, changefreq: 'monthly' })
add('/areas-de-practica', { priority: 0.9, changefreq: 'monthly' })
add('/noticias', { priority: 0.8, changefreq: 'weekly' })
add('/contactanos', { priority: 0.8, changefreq: 'yearly' })

// Abogados
lawyerSlugs.forEach((s) => add(`/equipo/${s}`, { priority: 0.8, changefreq: 'monthly' }))
// Áreas de práctica
areaSlugs.forEach((s) => add(`/areas-de-practica/${s}`, { priority: 0.8, changefreq: 'monthly' }))
// Noticias
newsSlugs.forEach((s, i) =>
  add(`/noticias/${s}`, { priority: 0.6, changefreq: 'yearly', lastmod: newsDates[i] || today })
)
// Reconocimientos
recogSlugs.forEach((s) => add(`/reconocimientos/${s}`, { priority: 0.5, changefreq: 'yearly' }))
// Legal
add('/politica-de-datos', { priority: 0.3, changefreq: 'yearly' })

// ── Escribir sitemap.xml ────────────────────────────────────────────────────
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url>\n` +
        `    <loc>${u.loc}</loc>\n` +
        `    <lastmod>${u.lastmod}</lastmod>\n` +
        `    <changefreq>${u.changefreq}</changefreq>\n` +
        `    <priority>${u.priority.toFixed(1)}</priority>\n` +
        `  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`

writeFileSync(join(PUBLIC, 'sitemap.xml'), sitemap, 'utf8')

// ── Escribir robots.txt ─────────────────────────────────────────────────────
// Se permite explícitamente a los rastreadores de IA (GEO/AEO): así la firma
// puede aparecer citada en ChatGPT, Perplexity, Gemini, Claude, etc.
const robots = `# robots.txt — Amprimo, Flury, Barboza & Rodríguez Abogados
# Generado por scripts/generate-seo.mjs

User-agent: *
Allow: /
Disallow: /__forms.html

# Rastreadores de motores generativos (IA) — bienvenidos
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

writeFileSync(join(PUBLIC, 'robots.txt'), robots, 'utf8')

console.log(
  `[generate-seo] sitemap.xml (${urls.length} URLs) + robots.txt generados para ${SITE_URL}`
)
console.log(
  `[generate-seo] ${lawyerSlugs.length} abogados · ${areaSlugs.length} áreas · ${newsSlugs.length} noticias · ${recogSlugs.length} reconocimientos`
)
