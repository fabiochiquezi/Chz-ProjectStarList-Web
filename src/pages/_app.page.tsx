import './fonts'
import Head from 'next/head'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { settingsSEO } from './settings'
import { Auth } from '../../structure/ui/_auth'
import { Structure } from '../../structure/ui/_struct'
import '../../structure/ui/__share/styles/tailwind.scss'
import { Styles } from '../../structure/ui/__share/styles/styles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className='default-theme'>
      <Styles />
      <div className='bg-skin-base-primary text-skin-font-primary'>
        <Head>
          <title>{settingsSEO.default.title}</title>
        </Head>
        <Auth>
          <Structure>
            <Component {...pageProps} />
          </Structure>
        </Auth>
      </div>
    </div>
  )
}

export default MyApp

