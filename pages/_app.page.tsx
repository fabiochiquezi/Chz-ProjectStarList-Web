import './styles.scss'
import '@fontsource/roboto'
import Head from 'next/head'
import { Struct } from './struct'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from './GlobalStyles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Star List</title>
      </Head>
      <GlobalStyles />
      <Struct>
        <Component {...pageProps} />
      </Struct>
    </>
  )
}

export default MyApp

