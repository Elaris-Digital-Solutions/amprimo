export function toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const partners = [
  {
    name: 'Natale Amprimo Pla',
    role: 'Socio Fundador',
    img: '/images/NATALE-AMPRIMO-2.webp',
    speciality: 'Derecho Constitucional · Procesal · Arbitraje',
    areas: ['Derecho Constitucional', 'Derecho Procesal', 'Arbitraje y Solución de Controversias'],
    email: 'namprimo@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/natale-amprimo-b023a73a/',
    education: 'Abogado por la Universidad de Lima, con más de treinta años de ejercicio profesional, es una de las voces más reconocidas del país en materia constitucional. Su criterio es frecuentemente consultado por los principales medios nacionales —y por los gremios empresariales más representativos del país— sobre los asuntos jurídicos y políticos de mayor relevancia. Es columnista estable de El Comercio, uno de los diarios de mayor circulación del Perú.',
    bio: 'Ha conducido procesos constitucionales de alcance nacional, defendiendo derechos fundamentales ante el Poder Judicial y el Tribunal Constitucional. Entre ellos destaca la defensa del Arzobispado de Lima en el emblemático caso sobre la herencia de José de la Riva-Agüero, así como el patrocinio de diversas acciones de inconstitucionalidad de relevancia pública.\n\nEn el ámbito arbitral es reconocido como uno de los árbitros más destacados del medio. Ha asesorado y resuelto controversias emblemáticas, y fue recientemente nombrado miembro del Consejo Superior de Arbitraje de la Cámara de Comercio de Lima (2025-2027) —la institución arbitral más prestigiosa del país—, además de integrar las listas de árbitros de los principales centros nacionales e internacionales.\n\nAnteriormente fue Congresista de la República (2001-2006), donde se desempeñó como Primer Vicepresidente del Congreso y presidió la Comisión de Constitución, Reglamento y Acusaciones Constitucionales, así como la Comisión de Transportes, Comunicaciones, Vivienda y Construcción. Entre 1996 y 2000 fue abogado de la Municipalidad Metropolitana de Lima. Esta trayectoria le otorga un conocimiento profundo del funcionamiento del Estado que enriquece cada caso que asume.\n\nEs catedrático de Derecho Constitucional en la Universidad de Lima desde 1991 y, desde 2018, miembro de la Comisión de Ética de la CONMEBOL.',
  },
  {
    name: 'Hans Flury',
    role: 'Socio',
    img: '/images/HANS-FLURY-1.webp',
    speciality: 'Derecho Minero · Hidrocarburos · Corporativo',
    areas: ['Derecho Minero', 'Hidrocarburos', 'Derecho Corporativo', 'Derecho Civil Patrimonial'],
    email: 'hflury@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/hans-flury-27ba46102/',
    education: 'Abogado por la Pontificia Universidad Católica del Perú, con estudios de especialización y post-grado en la Escuela Superior de Administración de Negocios (ESAN), en la Universidad de Texas, así como en la Escuela de Administración y Negocios de la Universidad de Virginia.',
    bio: 'Especialista en Derecho Minero, Hidrocarburos, Derecho Corporativo y Civil Patrimonial.\n\nMinistro de Energía y Minas por el período 2003 a 2004, ex presidente y actual miembro del Consejo Directivo de la Sociedad Nacional de Minería, Petróleo y Energía (SNMPE). Ha sido Director Legal de Southern Perú Copper Corporation, Sucursal del Perú, así como miembro del Estudio Ferrero y Consejero del Estudio Rodrigo, Elías y Medrano, Abogados.\n\nMiembro del Directorio de varias asociaciones gremiales tales como la Confederación Nacional de Instituciones Empresariales Privadas (CONFIEP), Sociedad Nacional de Industrias (SNI), y otras instituciones de desarrollo gremial.',
  },
  {
    name: 'Eduardo Barboza',
    role: 'Socio',
    img: '/images/EDUARDO-BARBOZA-1.webp',
    speciality: 'Civil Patrimonial · Construcción · Arbitraje',
    areas: ['Derecho Civil Patrimonial', 'Derecho de la Construcción e Inmobiliario', 'Arbitraje'],
    email: 'ebarboza@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/eduardo-barboza-304b5b159/',
    education: 'Abogado por la Pontificia Universidad Católica del Perú, con Maestría en Derecho (LL.M.) en la Universidad de Virginia. Especialista en Derecho Civil Patrimonial, Derecho de la Construcción e Inmobiliario, así como en Arbitraje, habiendo asesorado en la estructura, negociación y ejecución de diversos proyectos inmobiliarios, y participado como consultor y árbitro en diversos arbitrajes locales e internacionales.',
    bio: 'Ha sido socio principal del Estudio Echecopar, Baker & McKenzie International, habiendo liderado por casi 30 años las área de Derecho Civil Patrimonial y Derecho Inmobiliario. Asimismo, ha formado parte de la práctica latinoamericana de Wilmer Cutler Pickering Hale and Dorr LLP.\n\nIntegra la lista de árbitros del Centro de Arbitraje de la Cámara de Comercio de Lima, del Centro Internacional de Arbitraje de la Cámara de Comercio Americana del Perú (AMCHAM – PERÚ). Asimismo, ha participado como árbitro y experto legal en arbitrajes internacionales de inversión.\n\nProfesor ordinario desde hace más de 20 años del curso de Contratos Privados en la Pontificia Universidad Católica del Perú.',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Socio',
    img: '/images/CARLOS-RODRIGUEZ-1.webp',
    speciality: 'Derecho Administrativo · Gestión Pública',
    areas: ['Derecho Administrativo', 'Contratación Pública', 'Derecho Urbanístico'],
    email: 'crodriguez@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/carlos-e-rodr%C3%ADguez-manrique-90935810b/',
    education: 'Abogado por la Pontificia Universidad Católica del Perú (2001), Master en Gestión Pública por la Universidad Autónoma de Barcelona, Universidad Pompeu Fabra y la Escuela Superior de Administración y Dirección de Empresas – ESADE (2006), con estudios de posgrado en Derecho de las Concesiones por la Universidad Peruana de Ciencias Aplicadas (2009) y Derecho de la Construcción por la Universidad del Pacífico (2014).',
    bio: 'Es árbitro integrante del listado del Centro de Arbitraje Nacional e Internacional de la Cámara de Comercio de Lima, profesor de Derecho Administrativo en la Universidad de Lima, profesor de Derecho Urbanístico en la Escuela de Gestión Pública de la Universidad del Pacífico.',
  },
  {
    name: 'Eduardo Joo',
    role: 'Socio',
    img: '/images/EDUARDO-JOO-1.webp',
    speciality: 'Derecho Tributario · Corporativo y Comercial',
    areas: ['Derecho Tributario', 'Derecho Corporativo y Comercial'],
    email: 'ejoo@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/eduardo-joo-garfias/',
    education: 'Abogado por la Universidad Peruana de Ciencias Aplicadas, y especialista en Derecho Tributario, Corporativo y Comercial. Ha representado a diversas personas y empresas en procedimientos contenciosos ante el Tribunal Fiscal así como en procesos judiciales ante el Poder Judicial, especialmente en el fuero constitucional.',
    bio: 'Ha formado parte del área tributaria del Estudio Olaechea, y de Rubio, Leguía, Normand, así como del área de Tax & Legal Services de PricewaterhouseCoopers.\n\nHa intervenido en diversas oportunidades como expositor en foros de tributación nacionales, tales como las Jornadas Nacionales de Derecho Tributario, y participa regularmente como profesor invitado en la cátedra de Derecho Tributario en la Universidad Peruana de Ciencias Aplicadas, Universidad Nacional Mayor de San Marcos, entre otras.\n\nMiembro de la Asociación Fiscal Internacional y del Instituto Peruano de Derecho Tributario.',
  },
  {
    name: 'Christa Caro',
    role: 'Socia',
    img: '/images/CHRISTA-CARO-1.webp',
    speciality: 'Derecho Laboral · Organización de Personas',
    areas: ['Derecho Laboral', 'Organización y Dirección de Personas'],
    email: 'ccaro@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/abogada-laboralista-christa-caro/',
    education: 'Abogada (2010) por la Universidad Nacional Mayor de San Marcos, Perú; certificada como Especialista en Derecho Laboral Empresarial (2016) por la Universidad ESAN, Perú, y Magister en Organización y Dirección de Personas (2021) por la misma casa de estudios.',
    bio: 'Reconocida como abogada laboralista destacada en Perú desde el 2018 por la guía internacional Chambers and Partners, y forma parte del ranking de Best Lawyer en la práctica del Derecho Laboral desde el 2021.',
  },
]

export const associates = [
  {
    name: 'Ana Angulo Carvallo',
    role: 'Asociada',
    img: '/images/ANA-ANGULO-2.webp',
    speciality: 'Ambiental · Recursos Naturales · Regulación de Servicios Públicos · Administrativo',
    areas: ['Derecho Ambiental', 'Recursos Naturales', 'Regulación de Servicios Públicos', 'Derecho Administrativo'],
    email: 'aangulo@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/angulocarvalloana/',
    education: 'Abogada por la Pontificia Universidad Católica del Perú, con maestría en Derecho Administrativo Económico por la Universidad del Pacífico y con estudios de especialización en Derecho Ambiental y de los Recursos Naturales, Derecho de la Energía y Derecho de la Competencia. Con experiencia en el sector público (INDECOPI – OEFA) y privado (Luz del Sur – COES); docente a tiempo parcial en la facultad de derecho de la Universidad de San Martín de Porres.',
    bio: '',
  },
  {
    name: 'Jaqueline Ganiku',
    role: 'Asociada',
    img: '/images/JAQUELINE-GANIKU-1.webp',
    speciality: 'Civil · Familia · Procesal',
    areas: ['Derecho Civil', 'Derecho de Familia', 'Procesal y Solución de Controversias'],
    email: 'jganiku@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/sechan-ganiku-9209b8198/',
    education: 'Abogada por la Universidad De San Martín de Porres, habiendo obtenido el título profesional de abogada en 1995. Maestría en Derecho con especialidad en Familia.',
    bio: 'Como abogada cuenta con más de 20 años de ejercicio de la profesión en el sector público y privado. Con conocimiento en la especialidad de Familia y Civil, Conciliadora Extrajudicial acreditada. Ponente y Panelista en seminarios y cursos en el sector Público en la especialización de Familia y Civil.',
  },
  {
    name: 'Karla Figueroa',
    role: 'Asociada',
    img: '/images/KARLA-FIGEROA-1.webp',
    speciality: 'Corporativo · Contractual',
    areas: ['Derecho Corporativo', 'Derecho Contractual'],
    email: 'kfigueroa@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/karla-figueroa-mendoza-345a1051/',
    education: 'Abogada por la Pontificia Universidad Católica del Perú y titulada por esa misma casa de estudios, con Maestría en Finanzas y Derecho Corporativo por la Universidad ESAN. Tiene amplia experiencia en asesoría legal en el sector privado, con énfasis en derecho corporativo y contractual.',
    bio: 'Antes de ser integrante de nuestra Firma, se ha desempeñado como Gerente Legal de la empresa Perú Masivo S.A., empresa concesionaria del Metropolitano; Asistente Legal en el Estudio Payet, Rey, Cauvi, Pérez Abogados y ha formado parte del área legal de Repsol YPF.',
  },
  {
    name: 'Cindy Vargas',
    role: 'Asociada',
    img: '/images/CINDY-VARGAS-1.webp',
    speciality: 'Propiedad Intelectual · Competencia · Administrativo',
    areas: ['Derecho Administrativo y Regulatorio', 'Derechos de Autor', 'Derecho de la Competencia', 'Propiedad Industrial'],
    email: 'cvargas@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/cindy-vargas-rojas/',
    education: 'Abogada por la Pontificia Universidad Católica del Perú (PUCP) y titulada por esa misma casa de estudios.',
    bio: 'Especialista en las áreas de Propiedad Intelectual, Derecho de la Competencia, así como en Derecho Administrativo. Ha formado parte de la Oficina de Propiedad Intelectual de la PUCP y ha trabajado en la Dirección de Signos Distintivos del INDECOPI.\n\nAsimismo, ha participado en diversos proyectos en calidad de consultora en propiedad intelectual, se ha desempeñado como adjunta de docencia del curso de Propiedad Industrial en la Facultad de Derecho de la PUCP y como docente de formación continua en la misma casa de estudios.',
  },
  {
    name: 'Kepler Panduro',
    role: 'Asociado',
    img: '/images/KEPLER-PANDURO-1.webp',
    speciality: 'Civil · Procesal y Controversias',
    areas: ['Derecho Civil', 'Procesal y Solución de Controversias'],
    email: 'kpanduro@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/kepler-panduro-palacios-a4077157/',
    education: 'Abogado graduado de la Pontificia Universidad Católica del Perú, especialista en Derecho Procesal y Solución de Controversias. Ha participado en diversos procesos judiciales y arbitrales en materia civil y constitucional.',
    bio: 'Kepler cuenta con una amplia experiencia en la estructuración y desarrollo de estrategias procesales así como en la intervención en arbitrajes privados y ante entidades públicas.\n\nAntes de incorporarse al Estudio, Kepler ha trabajado como abogado asociado del Estudio Rodrigo, Elías & Medrano.',
  },
  {
    name: 'Alfredo Sotomayor',
    role: 'Asociado',
    img: '/images/ALFREDO-SOTOMAYOR-2.webp',
    speciality: 'Administrativo · Corporativo · Penal',
    areas: ['Derecho Administrativo y Regulatorio', 'Derecho Corporativo', 'Derecho Civil', 'Procesal y Solución de Controversias', 'Derecho Penal'],
    email: 'asotomayor@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/alfredo-sotomayor-34488719a/',
    education: 'Abogado por la Universidad de Lima y titulado en dicha casa de estudios. Actualmente, cursa estudios de maestría en Derecho de la Empresa en la UPC.',
    bio: 'Abogado especialista en el área de Derecho Administrativo y Regulatorio, asesorando a empresas en el marco de procedimientos administrativos y procesos contenciosos administrativos. Asimismo, asesora empresas en el desarrollo de proyectos inmobiliarios, incluyendo los estudios de titulación, la obtención de licencias y habilitaciones urbanas.\n\nHa sido asistente de cátedra en el Curso de Acto Jurídico (2009-2010) en la Universidad de Lima y en la UNMSM.',
  },
  {
    name: 'Gabriela Polo',
    role: 'Asociada',
    img: '/images/GABRIELA-POLO-1.webp',
    speciality: 'Procesal · Administrativo',
    areas: ['Procesal y Solución de Controversias', 'Derecho Administrativo y Regulatorio'],
    email: 'gpolo@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/gabriela-polo-bustillos-9956139a/',
    education: 'Abogada egresada y titulada de la Facultad de Derecho de la Universidad de Lima.',
    bio: 'Su práctica profesional se concentra en brindar asesoría integral a diversos clientes en las áreas de derecho procesal y solución de controversias, así como de derecho administrativo.\n\nGabriela forma parte del estudio desde el año 2017.',
  },
  {
    name: 'Rodolfo Núñez',
    role: 'Asociado',
    img: '/images/RODOLFO-NUNES-1-1.webp',
    speciality: 'Procesal · Civil · Constitucional · Arbitraje · Ciberseguridad',
    areas: ['Derecho Procesal', 'Derecho Civil', 'Derecho Constitucional', 'Derecho Administrativo', 'Arbitraje', 'Ciberseguridad'],
    email: 'rnunez@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/rodolfo-n%C3%BA%C3%B1ez-robinson-b5065389/',
    education: 'Abogado por la Pontificia Universidad Católica del Perú, con especialidad en Derecho Procesal. Cuenta con un Master of Laws (LL.M.) in Cybercrime, Cybersecurity and International Law por UPEACE, y una especialización en gestión de riesgos de ciberseguridad por Harvard University.',
    bio: 'Es miembro del Silicon Valley Arbitration and Mediation Center (SVAMC) y de la Asociación Latinoamericana de Derecho de la Construcción.\n\nHa asesorado a diversas empresas en la prevención de conflictos en materia civil, societaria, contractual e inmobiliaria. Asimismo, posee amplia experiencia en el diseño y ejecución de estrategias procesales complejas en los ámbitos civil, societario, constitucional, administrativo y laboral.',
  },
  {
    name: 'Ana Paula Quispe Rojo',
    role: 'Asociada',
    img: '/images/ANA-PAULA-2.webp',
    speciality: 'Laboral · Procesal Laboral · Seguridad Social',
    areas: ['Derecho Laboral', 'Procesal Laboral', 'Seguridad Social'],
    email: 'aquispe@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/ana-paula-quispe-rojo-7a2487113/',
    education: 'Abogada con título de segunda especialidad en Derecho del Trabajo y Seguridad Social por la PUCP. Cuenta con experiencia en absolución de consultas en materia de contratación de personal, procesos de desvinculación de trabajadores, hostigamiento sexual, entre otros.',
    bio: 'Se especializa en Derecho Laboral, Procesal Laboral y Seguridad Social.',
  },
  {
    name: 'Emilio Noguerol',
    role: 'Asociado',
    img: '/images/EMILIO-NOGUEROL-1.webp',
    speciality: 'Administrativo · Procesal · Gestión Pública',
    areas: ['Derecho Administrativo', 'Procesal y Solución de Controversias', 'Gestión Pública'],
    email: 'enoguerol@amprimoabogados.com',
    linkedin: 'https://www.linkedin.com/in/emilio-noguerol-45775416a/',
    education: 'Abogado Summa Cum Laude por la Universidad de Lima, con especialidad en solución de controversias. Cuenta con Diplomatura en Gestión Pública por la Escuela de Gobierno de la Pontificia Universidad Católica del Perú y actualmente cursa la Maestría en Derecho Administrativo Económico de la Escuela de Gestión Pública de la Universidad del Pacífico.',
    bio: 'Ha sido becario de Associazione Diplomatici, NGO del ECOSOC de la ONU y actualmente es miembro del Consejo Consultivo del Diario Perú Legal.',
  },
]

export const allLawyers = [...partners, ...associates]

export function getLawyerBySlug(slug) {
  return allLawyers.find(l => toSlug(l.name) === slug) || null
}

export function getAllSlugs() {
  return allLawyers.map(l => toSlug(l.name))
}
