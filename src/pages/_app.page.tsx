import './fonts'
import './styles.scss'
import Head from 'next/head'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { settingsSEO } from './settings'
import { Auth } from '../../structure/ui/_auth'
import { Structure } from '../../structure/ui/_struct'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{settingsSEO.default.title}</title>
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

