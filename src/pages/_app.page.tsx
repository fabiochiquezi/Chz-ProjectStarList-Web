import './styles.scss'
import '@fontsource/roboto'
import Head from 'next/head'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Auth } from '../../structure/ui/_auth'
import { Structure } from '../../structure/ui/_struct'

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

