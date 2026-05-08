export default function PageHeader({ title, subtitle, label, subtitleMaxW }) {
  return (
    <section className="relative bg-navy-950 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0f2035]" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {label && (
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 text-xs uppercase tracking-widest2 font-semibold font-sans">
              {label}
            </span>
          </div>
        )}
        <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className={`text-white/55 text-base lg:text-lg leading-relaxed mt-4 ${subtitleMaxW || 'max-w-2xl'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
