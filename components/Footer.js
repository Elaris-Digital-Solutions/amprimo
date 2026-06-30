import Link from 'next/link'
import { hoverPrefetch } from '../lib/prefetchHero'

const navLinks = [
  { label: 'El Estudio',        href: '/el-estudio' },
  { label: 'Nuestro Equipo',    href: '/equipo' },
  { label: 'Áreas de Práctica', href: '/areas-de-practica' },
  { label: 'Noticias',          href: '/noticias' },
  { label: 'Contáctanos',       href: '/contactanos' },
]

const practiceLinks = [
  { label: 'Derecho Constitucional',                    href: '/areas-de-practica/derecho-constitucional' },
  { label: 'Solución de Controversias',                 href: '/areas-de-practica/solucion-de-controversias' },
  { label: 'Arbitraje',                                 href: '/areas-de-practica/arbitraje' },
  { label: 'Derecho Administrativo y Regulatorio',      href: '/areas-de-practica/derecho-administrativo-y-regulatorio' },
  { label: 'Derecho Inmobiliario y Construcción',       href: '/areas-de-practica/derecho-inmobiliario-y-construccion' },
  { label: 'Derecho Civil Contractual',                 href: '/areas-de-practica/derecho-civil-contractual' },
  { label: 'Derecho Corporativo y Societario',          href: '/areas-de-practica/derecho-corporativo-y-societario' },
  { label: 'Competencia y Propiedad Intelectual',       href: '/areas-de-practica/derecho-de-la-competencia-y-propiedad-intelectual' },
  { label: 'Derecho Tributario',                        href: '/areas-de-practica/derecho-tributario' },
  { label: 'Derecho Laboral',                           href: '/areas-de-practica/derecho-laboral-individual-y-colectivo' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white/60">

      {/* Franja top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] gap-10 lg:gap-12">

          {/* Marca */}
          <div className="lg:col-span-1">
            {/* TODO (obs. 21): reemplazar por la versión del logo "con el celeste",
                la misma que debe usarse arriba en el navbar. Sin texto añadido. */}
            <div className="mb-6">
              <img
                src="/images/amprimo-logo.webp"
                alt="Amprimo Abogados"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/65 text-xs leading-relaxed">
              Firma de alto perfil especializada en derecho constitucional, litigios
              y asesoría corporativa desde 2006.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/amprimo-&-flury-abogados/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 border border-white/30 flex items-center justify-center hover:border-gold-500 hover:text-gold-400 transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/amprimoabogados" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-white/30 flex items-center justify-center hover:border-gold-500 hover:text-gold-400 transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://x.com/amprimoabogados" target="_blank" rel="noopener noreferrer"
                aria-label="X"
                className="w-11 h-11 border border-white/30 flex items-center justify-center hover:border-gold-500 hover:text-gold-400 transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">El Estudio</h2>
            <ul className="space-y-3">
              {navLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} {...hoverPrefetch(item.href)} className="text-white/75 text-sm hover:text-gold-400 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas */}
          <div>
            <h2 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Áreas de Práctica</h2>
            <ul className="space-y-3">
              {practiceLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} {...hoverPrefetch(item.href)} className="text-white/75 text-sm hover:text-gold-400 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Contacto</h2>
            <div className="space-y-5">
              <div>
                <p className="text-white/65 text-xs uppercase tracking-wider mb-1">Dirección</p>
                <p className="text-white/75 text-sm leading-relaxed">
                  Circunvalación del Golf los Incas 134,<br />
                  Torre 1, Oficina 1405,<br />
                  Santiago de Surco, Lima 15023, Perú.
                </p>
              </div>
              <div>
                <p className="text-white/65 text-xs uppercase tracking-wider mb-1">Teléfono</p>
                <a href="tel:+5112080130" className="text-white/75 text-sm hover:text-gold-400 transition-colors">
                  (01) 208 0130
                </a>
              </div>
              <div>
                <p className="text-white/65 text-xs uppercase tracking-wider mb-1">Correo</p>
                <a href="mailto:administracion@amprimoabogados.com"
                  className="text-white/55 text-sm hover:text-gold-400 transition-colors whitespace-nowrap">
                  administracion@amprimoabogados.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs">
            © {year} Amprimo, Flury, Barboza &amp; Rodríguez Abogados. Todos los derechos reservados.{' '}
            Desarrollado por{' '}
            <a href="https://elarisdigitalsolutions.com" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-white/40 hover:text-white/80 hover:decoration-white/60 transition-colors duration-200">
              Elaris Digital Solutions
            </a>.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/politica-de-datos" className="text-white/60 text-xs hover:text-white/85 transition-colors">Política de Datos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
