import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <title>Luca Kiebel</title>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="title" content="Luca Kiebel" />
          <meta name="description" content="Portfolio Website for Luca Kiebel. Luca Kiebel is the CTO at Nibyou and an IT Consultant for Digitalization and Process Optimization at XenonCloud. Learn more about his current and previous Pojects." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://luca-kiebel.de/" />
          <meta property="og:title" content="Luca Kiebel" />
          <meta property="og:description" content="Portfolio Website for Luca Kiebel. Luca Kiebel is the CTO at Nibyou and an IT Consultant for Digitalization and Process Optimization at XenonCloud. Learn more about his current and previous Pojects." />
          <meta property="og:image" content="https://content.luca-kiebel.de/websites/luca-kiebel.de/img/favicon.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://luca-kiebel.de/" />
          <meta property="twitter:title" content="Luca Kiebel" />
          <meta property="twitter:description" content="Portfolio Website for Luca Kiebel. Luca Kiebel is the CTO at Nibyou and an IT Consultant for Digitalization and Process Optimization at XenonCloud. Learn more about his current and previous Pojects." />
          <meta property="twitter:image" content="https://content.luca-kiebel.de/websites/luca-kiebel.de/img/favicon.png" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}