import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-navy-950 shadow-lg shadow-black/20 py-3'
            : 'bg-navy-950 py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/amprimo-logo.webp"
              alt="Amprimo Abogados"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-[0.8rem] uppercase tracking-widest font-medium transition-colors duration-200
                  after:bg-gold-500
                  ${isActive(item.href)
                    ? 'text-white after:w-full'
                    : 'text-white/75 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950 flex flex-col justify-center px-10 transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-500/30" />

        <nav className="flex flex-col gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-serif text-3xl transition-colors duration-200
                ${isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
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
