import Document, { Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: any
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
