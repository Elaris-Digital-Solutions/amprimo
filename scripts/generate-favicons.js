const sharp = require('sharp')
const pngToIco = require('png-to-ico').default
const fs = require('fs')
const path = require('path')

const SRC = path.join(__dirname, '..', 'public', 'images', 'favicon.png')
const OUT = path.join(__dirname, '..', 'public')

async function run() {
  const meta = await sharp(SRC).metadata()
  const size = Math.max(meta.width, meta.height)
  // Cuadra el lienzo con padding transparente, manteniendo el logo centrado
  const square = await sharp(SRC)
    .extend({
      top:    Math.floor((size - meta.height) / 2),
      bottom: Math.ceil((size - meta.height) / 2),
      left:   Math.floor((size - meta.width) / 2),
      right:  Math.ceil((size - meta.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()

  // Tamaños: estándar de favicons + múltiplos de 48 que Google Search prefiere
  const sizes = [
    { name: 'favicon-16x16.png',    size: 16  },
    { name: 'favicon-32x32.png',    size: 32  },
    { name: 'favicon-48x48.png',    size: 48  },
    { name: 'favicon-96x96.png',    size: 96  },
    { name: 'favicon-192x192.png',  size: 192 },
    { name: 'favicon-512x512.png',  size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ]

  for (const { name, size } of sizes) {
    await sharp(square).resize(size, size).png().toFile(path.join(OUT, name))
    console.log('OK', name)
  }

  // favicon.ico multi-resolución (16, 32, 48)
  const icoBuffers = await Promise.all(
    [16, 32, 48].map(s => sharp(square).resize(s, s).png().toBuffer())
  )
  const ico = await pngToIco(icoBuffers)
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), ico)
  console.log('OK favicon.ico')
}

run().catch(err => { console.error(err); process.exit(1) })
