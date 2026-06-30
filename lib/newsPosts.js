// Estructura de contenido por bloques.
// Tipos: 'p' (párrafo), 'ul' (lista), 'h2' (subtítulo), 'table' (tabla), 'source' (enlace fuente)

export const newsPosts = [
  {
    slug: 'reconocimiento-leaders-league-latin-america',
    id: 1,
    category: 'Reconocimiento',
    date: 'Abril 2024',
    isoDate: '2024-04-01',
    title: 'Reconocimiento de Leaders League Latin America a nuestro equipo legal',
    excerpt:
      'Orgullosos de haber sido nuevamente distinguidos por Leaders League como una de las mejores firmas del país en Litigios Administrativos, Litigios Civiles, Opinión Legal, Arbitraje y Litigios de Construcción.',
    featured: true,
    tag: 'Destacado',
    content: [
      { type: 'p', text:
        'Orgullosos de haber sido nuevamente distinguidos por Leaders League como una de las mejores firmas del país en Litigios Administrativos, Litigios Civiles, Opinión Legal, Arbitraje y Litigios de Construcción.' },
      { type: 'p', text:
        'Este reconocimiento refleja el compromiso del estudio con la excelencia técnica, la dedicación de nuestros abogados y la confianza que nuestros clientes han depositado en nosotros a lo largo de estos años.' },
    ],
  },

  {
    slug: 'decreto-supremo-015-2022-tr-inspeccion-de-trabajo',
    id: 2,
    category: 'Actualización Legal',
    date: 'Abril 16, 2024',
    isoDate: '2024-04-16',
    title: 'Decreto Supremo N° 015-2022-TR: Modifican el Reglamento de Inspección de Trabajo',
    excerpt:
      'Modifican el Reglamento de la Ley General de Inspección de Trabajo mediante el Decreto Supremo N° 015-2022-TR.',
    featured: false,
    tag: 'Laboral',
    content: [
      { type: 'p', text:
        'Mediante Decreto Supremo N° 015-2022-TR, publicado el día de hoy 17 de agosto de 2022, en el Diario Oficial "El Peruano", se modifica el Reglamento de la Ley General de Inspección de Trabajo, aprobado por Decreto Supremo N° 019-2006-TR, incorporando disposiciones relacionadas a la fiscalización laboral de la tercerización de servicios y su nuevo marco normativo.' },
      { type: 'p', text: 'En tal sentido, la norma bajo comentario establece lo siguiente:' },
      { type: 'table',
        headers: ['', 'Artículos', 'Detalle'],
        rows: [
          ['Modificación', '34.7',
            { strong: 'Infracción muy grave:', text: ' el uso de la figura de tercerización laboral en las actividades que forman parte del núcleo del negocio.' }],
          [{ rowspan: 5, text: 'Incorporación' }, '33.5',
            { strong: 'Infracción grave:', text: ' no incluir el contenido especificado en la norma en los contratos de trabajo de los trabajadores de la empresa tercerizadora, tales como la actividad empresarial a ejecutar y a la unidad productiva o ámbito de la empresa principal en la que se realizará la actividad.' }],
          ['33.6',
            { strong: 'Infracción grave:', text: ' no informar a los trabajadores encargados de la ejecución de la obra o servicio, a sus representantes, organizaciones sindicales y a los trabajadores de la empresa principal, por parte de la empresa tercerizadora o la empresa principal, según corresponda, los temas regulados en el artículo 6° de la Ley N° 29245.' }],
          ['34.8',
            { strong: 'Infracción muy grave:', text: ' el uso de la tercerización laboral para el desarrollo de actividades distintas a las actividades principales.' }],
          ['34.9',
            { strong: 'Infracción muy grave:', text: ' el uso de la tercerización laboral para la simple provisión de personal.' }],
          ['Undécima Disposición Final y Transitoria',
            { strong: 'Infracción muy grave:', text: ' la extinción de los contratos de trabajo de los trabajadores que hubieran sido desplazados para el desarrollo de actividades que forman parte del núcleo del negocio, por causas vinculadas con la adecuación al Decreto Supremo N° 001-2022-TR, salvo que la empresa principal contrate directamente a dichos trabajadores.' }],
        ],
      },
      { type: 'p', text:
        'Adicionalmente, corresponde señalar que en virtud de lo establecido en el Reglamento de la Ley General de Inspección del Trabajo, la cuantía y aplicación de sanciones relativas a una infracción grave puede ser sancionada con hasta S/120,152.00 (Ciento veinte mil ciento cincuenta y dos con 00/100 Soles); y, en caso de una infracción muy grave, ésta puede ascender hasta S/ 241,638.00 (Doscientos cuarenta y un mil seiscientos treinta y ocho con 00/100 Soles), considerando para tal efecto el número de trabajadores afectados.' },
    ],
  },

  {
    slug: 'decreto-legislativo-1545-presuncion-intereses',
    id: 3,
    category: 'Actualización Legal',
    date: 'Abril 16, 2024',
    isoDate: '2024-04-16',
    title: 'Decreto Legislativo N° 1545: Modifican norma relativa a la presunción de intereses para el Impuesto a la Renta',
    excerpt:
      'Modifican norma relativa a la presunción de intereses para el cómputo del Impuesto a la Renta.',
    featured: false,
    tag: 'Tributario',
    content: [
      { type: 'p', text:
        'Mediante Decreto Legislativo N° 1545, publicado el día de hoy en el Diario Oficial El Peruano, se modifica el artículo 26 de la Ley del Impuesto a la Renta, relativo a la presunción de intereses para efectos de dicho impuesto. El mencionado Decreto Legislativo se emite en el marco de la delegación de facultades para legislar en materia tributaria y otros, efectuada mediante Ley N° 31696.' },
      { type: 'p', text: 'Al respecto debemos indicar:' },
      { type: 'ul', items: [
        'El artículo 26 de la Ley del Impuesto a la Renta establece la presunción de que todo préstamo en dinero devenga un interés no inferior a la tasa activa de mercado promedio mensual en moneda nacional (TAMN) que publique la SBS, salvo prueba en contrario.',
        'El Decreto Legislativo bajo comentario modifica la tasa de referencia para aplicar la presunción en los casos de préstamos en moneda extranjera, sustituyendo la tasa LIBOR por la tasa activa de mercado promedio mensual en moneda extranjera (TAMEX).',
        'Se establece que, tanto en los préstamos en moneda nacional como extranjera, dichas tasas de referencia (TAMN y TAMEX), deberán ser multiplicadas por un factor de ajuste de 0.42 y 0.65, respectivamente. Dichos factores de ajuste podrán ser actualizados mediante decreto supremo.',
        'Finalmente, al tratarse de una modificación respecto de un tributo de periodicidad anual (Impuesto a la Renta), ésta entra en vigencia a partir del 1 de enero de 2024.',
      ]},
      { type: 'source',
        label: 'Para acceder al texto completo de la Decreto Legislativo N° 1545, pueden ingresar',
        href: 'https://busquedas.elperuano.pe/dispositivo/NL/2160368-1' },
    ],
  },

  {
    slug: 'decreto-legislativo-1527-incrementos-patrimoniales',
    id: 4,
    category: 'Actualización Legal',
    date: 'Abril 16, 2024',
    isoDate: '2024-04-16',
    title: 'Decreto Legislativo N° 1527: Modifican disposiciones relativas a incrementos patrimoniales no justificados',
    excerpt:
      'Modifican disposiciones relativas a incrementos patrimoniales no justificados en materia tributaria.',
    featured: false,
    tag: 'Tributario',
    content: [
      { type: 'p', text:
        'Mediante Decreto Legislativo Nº 1527, publicado el día de hoy en el Diario Oficial "El Peruano", se modifica la Ley del Impuesto a la Renta (LIR), a efectos de perfeccionar las disposiciones de ésta referidas a los "incrementos patrimoniales no justificados".' },
      { type: 'p', text:
        'Como se recordará, mediante Ley N° 31380, publicado con fecha 27 de diciembre en el Diario Oficial El Peruano, se delegó la facultad de legislar en materia tributaria, fiscal, financiera y de reactivación económica a favor del Poder Ejecutivo durante el plazo de noventa (90) días, contados desde la publicación de la norma, en virtud del artículo 104º de la Constitución Política y el artículo 90º del Reglamento del Congreso.' },
      { type: 'p', text:
        'Dentro de dicho marco, el Poder Ejecutivo ha emitido el decreto legislativo antes mencionado, cuyas principales disposiciones son las siguientes:' },
      { type: 'ul', items: [
        'Se modifica el artículo 52º de la LIR, indicando que los incrementos patrimoniales no podrán ser justificados si las donaciones recibidas u otras liberalidades no constan en Escritura Pública, aplicable a bienes muebles e inmuebles, cuya transferencia requiera de dicho instrumento; documento de fecha cierta, para bienes muebles; o, documentos que acrediten de manera fehaciente el acto, según el caso.',
        'Se modifica el artículo 92º de la LIR, estableciéndose que para la determinación del incremento patrimonial respecto a los depósitos en cuentas de entidades del sistema financiero nacional o del extranjero, no se considerarán aquellos que correspondan a operaciones entre terceros, siempre que el origen o procedencia de tales depósitos se encuentre debidamente sustentada; y, que la información vinculada a dichas operaciones se declare a la SUNAT en la forma, plazo y condiciones, entre ellas, el monto mínimo a partir del cual se presenta dicha declaración, las cuales serán establecidas mediante Resolución de Superintendencia.',
        'Las modificaciones comentadas entrarán en vigencia a partir del 1 de enero de 2023.',
      ]},
      { type: 'source',
        label: 'Para acceder al texto completo de la norma bajo comentario, pueden ingresar',
        href: 'https://busquedas.elperuano.pe/dispositivo/NL/2043541-2' },
    ],
  },

  {
    slug: 'ley-31435-plazos-defensa-consumidor',
    id: 5,
    category: 'Actualización Legal',
    date: 'Marzo 22, 2022',
    isoDate: '2022-03-22',
    title: 'Ley N° 31435: Reducen plazos para la atención de reclamos en materia de Defensa del Consumidor',
    excerpt:
      'Nueva ley que reduce los plazos para la atención de reclamos en materia de Defensa del Consumidor.',
    featured: false,
    tag: 'Corporativo',
    content: [
      { type: 'p', text:
        'Mediante Ley N° 31435, publicada en el diario oficial "El Peruano" el 22 de marzo de 2022, se ha modificado la Ley N° 29571, Código de Protección y Defensa del Consumidor, con la finalidad de reducir el plazo de atención de reclamos de los consumidores.' },
      { type: 'p', text: 'A continuación, exponemos los principales alcances de la norma:' },
      { type: 'ul', items: [
        'Se reduce el plazo para dar respuesta a los reclamos presentados por los consumidores de 30 días calendario a 15 días hábiles.',
        'El plazo de 15 días hábiles es improrrogable, sin importar la complejidad de la materia.',
        'Este plazo aplica a los reclamos consignados por los consumidores en el Libro de Reclamaciones y aquellos trasladados por medios distintos, por ejemplo, correos electrónicos, cartas, entre otros.',
        'La ley deberá ser reglamentada por el INDECOPI en un plazo no mayor de 30 días calendario, contados a partir de su publicación.',
        'Finalmente, la presente norma entrará en vigencia el 21 de mayo de 2022.',
      ]},
      { type: 'source',
        label: 'Para acceder al texto completo de la norma bajo comentario, pueden ingresar',
        href: 'https://busquedas.elperuano.pe/dispositivo/NL/2050405-1' },
    ],
  },
]

export const tagColors = {
  'Laboral':     'bg-blue-50 text-blue-700 border-blue-200',
  'Tributario':  'bg-navy-50 text-navy-700 border-navy-200',
  'Corporativo': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Destacado':   'bg-navy-700 text-white border-navy-700',
}

export function getPostBySlug(slug) {
  return newsPosts.find(p => p.slug === slug)
}

export function getRelatedPosts(slug, limit = 3) {
  return newsPosts.filter(p => p.slug !== slug).slice(0, limit)
}
