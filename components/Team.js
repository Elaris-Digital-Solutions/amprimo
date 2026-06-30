import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { partners, associates, toSlug } from '../data/lawyers'

function TeamCard({ person }) {
  const slug = toSlug(person.name)

  return (
    <Link
      href={`/equipo/${slug}`}
      className="group relative overflow-hidden bg-navy-100 aspect-[3/4] block"
    >
      {/* Foto */}
      <img
        src={person.img}
        alt={person.name}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        onError={e => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />

      {/* Placeholder si no hay imagen */}
      <div
        className="absolute inset-0 bg-navy-800 hidden items-center justify-center"
        style={{ display: 'none' }}
      >
        <svg className="w-16 h-16 text-navy-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </div>

      {/* Overlay inferior — se oculta al hacer hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-transparent pt-16 pb-5 px-5 transition-opacity duration-300 group-hover:opacity-0">
        <p className="font-serif text-white text-sm font-medium leading-tight">{person.name}</p>
        <p className="text-gold-400 text-xs uppercase tracking-wider mt-1">{person.role}</p>
      </div>

      {/* Overlay en hover */}
      <div className="absolute inset-0 bg-navy-950/90 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-serif text-white text-base font-medium mb-1">{person.name}</p>
        <p className="text-gold-400 text-xs uppercase tracking-wider mb-3">{person.role}</p>
        <div className="w-8 h-px bg-gold-500 mb-3" />
        <div className="flex flex-col gap-1 mb-4">
          {(person.areas || []).slice(0, 4).map(area => (
            <span key={area} className="text-white/65 text-xs leading-snug">{area}</span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-gold-400 text-xs uppercase tracking-widest font-semibold">
          Ver perfil
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function Team() {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('todos')

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

  const displayedPartners   = filter === 'asociados' ? [] : partners
  const displayedAssociates = filter === 'socios'    ? [] : associates

  const tabs = [
    { key: 'todos',     label: 'Todos' },
    { key: 'socios',    label: 'Socios' },
    { key: 'asociados', label: 'Asociados' },
  ]

  return (
    <section id="equipo" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <p className="animate-on-scroll section-label mb-4">Talento y Experiencia</p>
            <div className="divider-gold mb-8 animate-on-scroll" />
            <h2 className="animate-on-scroll section-title text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2]">
              Nuestro<span className="italic text-navy-700"> Equipo</span>
            </h2>
            <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mt-5">
              Varios de nuestros abogados han ocupado cargos de alta responsabilidad en el sector
              público y privado, una trayectoria que aporta a cada caso una mirada estratégica del
              funcionamiento del Estado y de los negocios. A ello sumamos una generación de abogados
              con sólida formación y vocación litigante, que asegura la continuidad y profundidad de
              nuestro trabajo.
            </p>
          </div>

          {/* Filtros */}
          <div className="animate-on-scroll flex items-center gap-1 p-1 border border-navy-100 self-start lg:self-auto">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300
                  ${filter === tab.key
                    ? 'bg-navy-950 text-white'
                    : 'text-navy-500 hover:text-navy-900'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid unificado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedPartners.map((p) => (
            <TeamCard key={p.name} person={p} />
          ))}
          {displayedAssociates.map((p) => (
            <TeamCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
