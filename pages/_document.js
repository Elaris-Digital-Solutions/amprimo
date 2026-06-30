import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es-PE">
      <Head>
        {/* Favicons — orden importa: el navegador toma el primero que entienda.
            Para que Google muestre el favicon junto al resultado de búsqueda,
            necesita un ícono cuadrado múltiplo de 48px (48/96/192) accesible y
            no bloqueado por robots.txt. */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a1628" />
      </Head>
      <body>
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
