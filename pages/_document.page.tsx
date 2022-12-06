import { Html, Head, Main, NextScript } from 'next/document'
import React, { ReactElement } from 'react'

export default function Document(): ReactElement {
  return (
    <Html className="dark" lang="en-US">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <body className="bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
