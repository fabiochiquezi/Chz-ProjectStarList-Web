import './styles.scss'
import '@fontsource/roboto'
import Head from 'next/head'
import { Struct } from './struct'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Star List</title>
      </Head>
      <Struct>
        <Component {...pageProps} />
      </Struct>
    </>
  )
}

export default MyApp

