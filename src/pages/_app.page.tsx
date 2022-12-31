import './styles.scss'
import '@fontsource/roboto'
import Head from 'next/head'
import { Auth } from './_auth'
import { ReactElement } from 'react'
import { Structure } from './_struct'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Star List</title>
      </Head>
      <Auth>
        <Structure>
          <Component {...pageProps} />
        </Structure>
      </Auth>
    </>
  )
}

export default MyApp

