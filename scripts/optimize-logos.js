// Optimiza los logos de directorios a webp y procesa Chambers a blanco sin fondo.
// Uso: node scripts/optimize-logos.js
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const SRC = path.join(__dirname, '..', 'public', 'images', 'Logos - Directorios Internacionales-20260618T151113Z-3-001')
const OUT = path.join(__dirname, '..', 'public', 'images')

// Tamaño máximo del lado mayor (se muestran a ~144px; 600px da margen retina).
const MAX = 600

// Conversión directa a webp (mantiene el badge a todo color y su transparencia).
async function convert(file, outName) {
  const input = path.join(SRC, file)
  const meta = await sharp(input).metadata()
  await sharp(input)
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, outName))
  console.log('OK', outName, `${meta.width}x${meta.height}`, 'alpha:', !!meta.hasAlpha)
}

// Chambers: navy sobre fondo blanco → blanco sobre transparente.
// Se construye una máscara de alfa de 1 canal (tinta navy → opaco, fondo blanco →
// transparente) y se aplica como canal alfa sobre una imagen blanca sólida.
// Se pasa la máscara como PNG (no buffer raw) para evitar desalineación de canales.
async function convertChambersWhite(file, outName) {
  const input = path.join(SRC, file)
  const { width, height } = await sharp(input).metadata()
  // Canal alfa = oscuridad de la tinta (navy → 255 opaco, fondo blanco → 0).
  const alpha = await sharp(input)
    .flatten({ background: '#ffffff' })
    .grayscale()
    .normalise()   // estira contraste: tinta → 0, fondo → 255
    .negate()      // invierte: tinta → 255 (opaco), fondo → 0 (transparente)
    .extractChannel(0)
    .raw()
    .toBuffer()
  // Componemos RGBA manualmente (RGB blanco + alfa) — evita un bug de alineación
  // de joinChannel que partía la imagen por la mitad.
  const rgba = Buffer.alloc(width * height * 4)
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = 255
    rgba[i * 4 + 1] = 255
    rgba[i * 4 + 2] = 255
    rgba[i * 4 + 3] = alpha[i]
  }
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, outName))
  console.log('OK', outName, `${width}x${height}`, '(blanco sin fondo)')
}

async function run() {
  await convertChambersWhite('chambers.jpg', 'chambers.webp')
  await convert('legal-500.jpeg', 'legal-500.webp')
  await convert('latin-lawyer.png', 'latin-lawyer.webp')
  await convert('world-tax.png', 'world-tax.webp')
  await convert('ranked-firm.png', 'ranked-firm.webp')
  await convert('LACCA_TL_rosette.png', 'lacca.webp')

  // best-lawyers no venía en la carpeta nueva: optimizamos el PNG existente a webp
  // (solo si aún existe; el webp ya generado es la versión que usa el sitio).
  const blPng = path.join(OUT, 'best-lawyers.png')
  if (fs.existsSync(blPng)) {
    await sharp(blPng)
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(OUT, 'best-lawyers.webp'))
    console.log('OK best-lawyers.webp (desde PNG existente)')
  }
}

run().catch(err => { console.error(err); process.exit(1) })
