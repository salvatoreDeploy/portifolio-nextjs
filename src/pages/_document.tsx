import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className="bg-zinc-950 antialiased font-body">
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  const theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                })()
              `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
