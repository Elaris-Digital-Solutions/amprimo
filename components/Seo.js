import Head from 'next/head'
import {
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  OG_IMAGE,
  GOOGLE_SITE_VERIFICATION,
  absoluteUrl,
} from '../lib/siteConfig'
import { graph } from '../lib/schema'

/**
 * <Seo> — centraliza TODO el <head> orientado a SEO de cada página:
 * título, descripción, canonical, Open Graph, Twitter, fuentes y JSON-LD.
 *
 * Props:
 *   title        título completo del documento (<title> y og:title)
 *   description  meta description (por defecto, la global)
 *   path         ruta de la página ("/equipo") → canonical + og:url
 *   type         og:type ('website' | 'article' | 'profile')
 *   image        imagen para compartir (por defecto og-image)
 *   preloadImage ruta de imagen a precargar (hero LCP) — opcional
 *   noindex      true → no indexar (páginas privadas) — opcional
 *   schema       array de nodos JSON-LD (Schema.org) — opcional
 *   article      { publishedTime, section } para og:type="article" — opcional
 *   keywords     override de keywords — opcional
 *   children     etiquetas <head> adicionales (p. ej. preconnects de Maps)
 */
export default function Seo({
  title,
  description = SITE_DESCRIPTION,
  path = '/',
  type = 'website',
  image = OG_IMAGE,
  preloadImage,
  noindex = false,
  schema,
  article,
  keywords,
  children,
}) {
  const canonical = absoluteUrl(path)
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)
  const kw = (keywords || SITE_KEYWORDS).join(', ')

  return (
    <Head>
      {/* ── Básicos ─────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={kw} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={SITE_NAME} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <link rel="canonical" href={canonical} />
      {GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      )}

      {/* ── Open Graph (Facebook / WhatsApp / LinkedIn) ─────── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:site_name" content={SITE_SHORT_NAME} />
      <meta property="og:locale" content="es_PE" />
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* ── Twitter / X ─────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Rendimiento: fuentes (igual en todas las páginas) ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {preloadImage && (
        <link rel="preload" as="image" href={preloadImage} type="image/webp" />
      )}

      {/* ── Datos estructurados (JSON-LD) ───────────────────── */}
      {schema && schema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph(schema)) }}
        />
      )}

      {children}
    </Head>
  )
}
