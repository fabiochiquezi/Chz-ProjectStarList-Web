import './styles.scss'
import '@fontsource/roboto'
import { Struct } from './struct'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from './GlobalStyles'
import Head from 'next/head'

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

