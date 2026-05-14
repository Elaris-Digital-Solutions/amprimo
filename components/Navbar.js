import { useState, useEffect, useRef, useId } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { hoverPrefetch } from '../lib/prefetchHero'

const navItems = [
  { label: 'Inicio',            href: '/' },
  { label: 'El Estudio',        href: '/el-estudio' },
  { label: 'Equipo',            href: '/equipo' },
  { label: 'Áreas de Práctica', href: '/areas-de-practica' },
  { label: 'Noticias',          href: '/noticias' },
  { label: 'Contáctanos',       href: '/contactanos' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const router = useRouter()
  const menuId = useId()
  const triggerRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Cerrar menú al navegar
  useEffect(() => { setMenuOpen(false) }, [router.pathname])

  // Escape cierra el menú + bloqueo de scroll del body + foco al primer link
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); triggerRef.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Mover foco al primer link del menú
    const t = setTimeout(() => firstLinkRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [menuOpen])

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-500 bg-navy-950 py-5
          ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center" {...hoverPrefetch('/')}>
            <img
              src="/images/amprimo-logo.webp"
              alt="Amprimo Abogados"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navegación desktop */}
          <nav aria-label="Principal" className="hidden lg:block ml-auto">
            <ul className="flex items-center gap-8">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    {...hoverPrefetch(item.href)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`nav-link text-[0.8rem] uppercase tracking-widest font-medium transition-colors duration-200
                      after:bg-gold-500
                      ${isActive(item.href)
                        ? 'text-white after:w-full'
                        : 'text-white/75 hover:text-white'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger mobile */}
          <button
            ref={triggerRef}
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            <span aria-hidden="true" className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span aria-hidden="true" className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span aria-hidden="true" className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-navy-950 flex flex-col justify-center px-10 transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-500/30" aria-hidden="true" />

        <nav aria-label="Principal">
          <ul className="flex flex-col gap-8">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : null}
                  href={item.href}
                  {...hoverPrefetch(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`font-serif text-3xl transition-colors duration-200
                    ${isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Teléfono</p>
          <a href="tel:+5112080130" className="text-white/80 text-sm hover:text-gold-400 transition-colors">
            (01) 208 0130
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-500/30" />
      </div>
    </>
  )
}
