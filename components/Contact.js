import { useEffect, useRef, useState, useCallback, useId, cloneElement } from 'react'

const motives = [
  'Deseo agendar una reunión con un especialista',
  'Quiero formar parte del equipo',
  'Solicito asesoría legal',
  'Otro',
]

/* ─── Floating Label wrapper ─────────────────────────────────── */
function FloatLabel({ label, required, value, children }) {
  const [focused, setFocused] = useState(false)
  const id = useId()
  const active = focused || (value !== '' && value !== undefined && value !== null)

  // Inyecta id + aria-required al input/textarea hijo
  const child = cloneElement(children, {
    id,
    'aria-required': required ? 'true' : undefined,
    onFocus: (e) => { setFocused(true); children.props.onFocus?.(e) },
    onBlur:  (e) => { setFocused(false); children.props.onBlur?.(e) },
  })

  return (
    <div
      className={`relative border transition-colors duration-200
        ${focused ? 'border-gold-500' : 'border-navy-200'}`}
    >
      <label
        htmlFor={id}
        className={`absolute left-3 pointer-events-none bg-white transition-all duration-200 z-10
          ${active
            ? '-top-2.5 text-[11px] px-1 text-gold-600'
            : 'top-3.5 text-sm text-navy-400'
          }`}
      >
        {label}{required && <span className="ml-0.5 text-gold-500" aria-hidden="true">*</span>}
      </label>
      {child}
    </div>
  )
}

/* ─── Clases base para los campos ────────────────────────────── */
const fieldCls = 'w-full px-3 pt-5 pb-2.5 bg-transparent text-navy-900 text-sm outline-none'

/* ─── Custom Select (combobox accesible) ─────────────────────── */
function CustomSelect({ label, required, name, value, onChange, options }) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const wrapRef = useRef(null)
  const triggerRef = useRef(null)
  const listRef = useRef(null)
  const labelId = useId()
  const listboxId = useId()

  useEffect(() => {
    const handler = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Al abrir, posiciona el activeIndex en el valor actual (o el primero)
  useEffect(() => {
    if (open) {
      const idx = options.indexOf(value)
      setActiveIndex(idx >= 0 ? idx : 0)
    }
  }, [open, value, options])

  // Cuando cambia activeIndex con el panel abierto, scroll a la opción
  useEffect(() => {
    if (open && activeIndex >= 0 && listRef.current) {
      const opt = listRef.current.querySelector(`[data-index="${activeIndex}"]`)
      if (opt) opt.scrollIntoView({ block: 'nearest' })
    }
  }, [open, activeIndex])

  const select = option => {
    onChange({ target: { name, value: option } })
    setOpen(false)
    triggerRef.current?.focus()
  }

  const onKeyDown = (e) => {
    const key = e.key
    if (!open) {
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === ' ') {
        e.preventDefault()
        setOpen(true)
      }
      return
    }
    if (key === 'Escape') { e.preventDefault(); setOpen(false); triggerRef.current?.focus(); return }
    if (key === 'ArrowDown') { e.preventDefault(); setActiveIndex(i => Math.min(options.length - 1, i + 1)); return }
    if (key === 'ArrowUp')   { e.preventDefault(); setActiveIndex(i => Math.max(0, i - 1)); return }
    if (key === 'Home')      { e.preventDefault(); setActiveIndex(0); return }
    if (key === 'End')       { e.preventDefault(); setActiveIndex(options.length - 1); return }
    if (key === 'Enter' || key === ' ') {
      e.preventDefault()
      if (activeIndex >= 0) select(options[activeIndex])
      return
    }
    if (key === 'Tab') { setOpen(false) }
  }

  const active = open || value !== ''
  const activeId = activeIndex >= 0 ? `${listboxId}-opt-${activeIndex}` : undefined

  return (
    <div ref={wrapRef} className="relative">
      {/* Trigger (combobox) */}
      <div
        className={`relative border transition-colors duration-200 select-none
          ${open ? 'border-gold-500' : 'border-navy-200'}`}
      >
        <span
          id={labelId}
          className={`absolute left-3 pointer-events-none bg-white transition-all duration-200 z-10
            ${active ? '-top-2.5 text-[11px] px-1 text-gold-600' : 'top-3.5 text-sm text-navy-400'}`}
        >
          {label}{required && <span className="ml-0.5 text-gold-500" aria-hidden="true">*</span>}
        </span>
        <button
          ref={triggerRef}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-labelledby={labelId}
          aria-required={required ? 'true' : undefined}
          aria-activedescendant={open ? activeId : undefined}
          onClick={() => setOpen(o => !o)}
          onKeyDown={onKeyDown}
          className="w-full flex items-center justify-between px-3 pt-5 pb-2.5 min-h-[52px] text-left bg-transparent cursor-pointer outline-none"
        >
          <span className={`text-sm ${value ? 'text-navy-900' : 'text-navy-400'}`}>
            {value || ''}
          </span>
          <svg
            className={`w-4 h-4 text-navy-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Panel (listbox) */}
      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          className="absolute top-full left-0 right-0 z-50 bg-white border border-navy-100 border-t-0 shadow-lg overflow-hidden"
        >
          {options.map((opt, i) => {
            const isSelected = value === opt
            const isActive   = activeIndex === i
            return (
              <li
                key={opt}
                id={`${listboxId}-opt-${i}`}
                data-index={i}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => select(opt)}
                className={`px-4 py-3 text-sm cursor-pointer transition-colors duration-150
                  ${isSelected
                    ? 'bg-navy-50 text-navy-900 font-medium border-l-2 border-gold-500'
                    : isActive
                      ? 'bg-cream text-navy-900'
                      : 'text-navy-600 hover:bg-cream hover:text-navy-900'
                  }`}
              >
                {opt}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

/* ─── Componente principal ───────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', motivo: '', consulta: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Envío a Netlify Forms (obs. 7). Los destinatarios (administración, Joo y
  // Emilio) se configuran como notificaciones del formulario "contacto" en el
  // panel de Netlify → Forms → Notifications.
  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setError(false)
    const body = new URLSearchParams({ 'form-name': 'contacto', ...formData }).toString()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        setSubmitted(true)
      })
      .catch(() => setError(true))
      .finally(() => setSending(false))
  }

  return (
    <section id="contacto" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Dos columnas: info + formulario */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Columna izquierda: info */}
          <div>
            <h2 className="animate-on-scroll section-title text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] mb-6">
              Estamos aquí
              <span className="italic text-navy-700"> para ayudarte.</span>
            </h2>
            <p className="animate-on-scroll text-navy-600 text-base leading-relaxed mb-12">
              Si te encuentras ante alguna consulta o necesitas abordar un asunto legal,
              el equipo de Amprimo, Flury, Barboza &amp; Rodríguez Abogados está
              preparado para brindarte asistencia y orientación personalizada.
            </p>

            {/* Datos de contacto */}
            <div className="animate-on-scroll space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Dirección',
                  value: 'Circunvalación del Golf los Incas 134 (Centro Empresarial Panorama), Torre 1, Oficina 1405, Santiago de Surco, Lima 15023, Perú.',
                  href: null,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Correo',
                  value: 'administracion@amprimoabogados.com',
                  href: 'mailto:administracion@amprimoabogados.com',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Teléfono',
                  value: '(01) 208 0130',
                  href: 'tel:+5112080130',
                },
              ].map(item => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cream flex items-center justify-center text-navy-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-navy-700 text-sm hover:text-gold-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-700 text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="animate-on-scroll">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="h-full flex flex-col items-center justify-center text-center py-20 border border-navy-100 bg-cream"
              >
                <div className="w-14 h-14 bg-navy-700 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-navy-900 text-2xl font-medium mb-3">¡Mensaje enviado!</h3>
                <p className="text-navy-500 text-sm leading-relaxed max-w-xs">
                  Gracias por contactarnos. Nuestro equipo se comunicará contigo a la brevedad.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-8 btn-outline">
                  Nuevo mensaje
                </button>
              </div>
            ) : (
              <form
                name="contacto"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Campos requeridos por Netlify Forms */}
                <input type="hidden" name="form-name" value="contacto" />
                <p className="hidden">
                  <label>No llenar si eres humano: <input name="bot-field" onChange={handleChange} /></label>
                </p>
                {/* Espejo del select custom para que Netlify registre el campo */}
                <input type="hidden" name="motivo" value={formData.motivo} />

                <div className="mb-8">
                  <h3 className="font-serif text-navy-900 text-2xl font-medium mb-2">Escríbanos</h3>
                  <p className="text-navy-500 text-sm">
                    Complete el formulario y nos pondremos en contacto en menos de 24 horas.
                  </p>
                </div>

                {/* Fila 1 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <FloatLabel label="Nombre completo" required value={formData.nombre}>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className={fieldCls}
                    />
                  </FloatLabel>

                  <FloatLabel label="Correo electrónico" required value={formData.email}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={fieldCls}
                    />
                  </FloatLabel>
                </div>

                {/* Fila 2 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <FloatLabel label="Teléfono" value={formData.telefono}>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={fieldCls}
                    />
                  </FloatLabel>

                  <CustomSelect
                    label="Motivo de consulta"
                    required
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    options={motives}
                  />
                </div>

                {/* Consulta */}
                <FloatLabel label="Su consulta" required value={formData.consulta}>
                  <textarea
                    name="consulta"
                    value={formData.consulta}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={750}
                    className={`${fieldCls} resize-none`}
                  />
                </FloatLabel>
                {formData.consulta.length > 700 && (
                  <p className="text-right text-gold-600 text-xs -mt-4">
                    {formData.consulta.length}/750
                  </p>
                )}

                <button type="submit" disabled={sending} className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? 'Enviando…' : 'Enviar Consulta'}
                  {!sending && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>

                {error && (
                  <p role="alert" className="text-red-600 text-sm text-center">
                    Ocurrió un error al enviar. Por favor, inténtelo nuevamente o escríbanos a
                    <a href="mailto:administracion@amprimoabogados.com" className="text-gold-600 hover:underline ml-1">administracion@amprimoabogados.com</a>.
                  </p>
                )}

                <p className="text-navy-400 text-xs text-center leading-relaxed">
                  Sus datos serán tratados de forma confidencial conforme a nuestra
                  <a href="/politica-de-datos" className="text-gold-600 hover:underline ml-1">Política de Datos</a>.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Mapa ancho completo — enmarcado para que cuadre con el resto del sitio (obs. 22) */}
        <div className="animate-on-scroll mt-16">
          <a
            href="https://www.google.com/maps?cid=1508750377694368175&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es&gl=LT&source=embed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ubicación en Google Maps (se abre en una pestaña nueva)"
            className="block group relative border border-navy-100 overflow-hidden"
          >
            <iframe
              src="https://maps.google.com/maps?cid=1508750377694368175&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block', pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Amprimo Abogados"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-navy-950/10 transition-colors duration-300 flex items-end justify-end p-4">
              <span
                aria-hidden="true"
                className="bg-navy-950 text-white text-xs uppercase tracking-widest px-4 py-2 font-semibold flex items-center gap-2 shadow-lg shadow-black/30"
              >
                Ver en Google Maps
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
