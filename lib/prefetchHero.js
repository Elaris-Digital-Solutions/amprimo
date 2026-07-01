// Mapa de rutas → imagen hero. Sólo las rutas que tienen hero descargable.
const HEROES = {
  '/':                      '/images/inicio-hero.webp',
  '/el-estudio':            '/images/hero-el-estudio.webp',
  '/equipo':                '/images/hero-contactanos.webp',
  '/areas-de-practica':     '/images/hero-areas-especializacion.webp',
  '/noticias':              '/images/hero-noticias.webp',
  '/contactanos':           '/images/hero-contactanos.webp',
}

// Caché en memoria para no disparar dos veces el mismo prefetch
const prefetched = new Set()

/**
 * Dispara el browser para descargar el hero de una ruta al caché HTTP.
 * Se llama desde onMouseEnter / onFocus / onTouchStart de un Link.
 */
export function prefetchHero(href) {
  if (typeof window === 'undefined' || !href) return
  // Quitar hash y query (p. ej. /el-estudio#logros)
  const path = href.split('#')[0].split('?')[0]
  const src = HEROES[path]
  if (!src || prefetched.has(src)) return
  prefetched.add(src)

  const img = new Image()
  // Sugerencia al browser que es alta prioridad
  if ('fetchPriority' in img) img.fetchPriority = 'high'
  img.decoding = 'async'
  img.src = src
}

/**
 * Helper para spread en un <Link>:
 *   <Link href="/equipo" {...hoverPrefetch('/equipo')}>...</Link>
 *
 * Cubre mouse (hover), keyboard (focus) y touch (mobile).
 */
export function hoverPrefetch(href) {
  const handler = () => prefetchHero(href)
  return {
    onMouseEnter: handler,
    onFocus:      handler,
    onTouchStart: handler,
  }
}
