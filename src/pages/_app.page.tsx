import './fonts'
// import './styles.scss'
import '../../structure/ui/styles.scss'
import Head from 'next/head'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { settingsSEO } from './settings'
import { Auth } from '../../structure/ui/_auth'
import { Structure } from '../../structure/ui/_struct'
import { GlobalStyles } from '../../structure/ui/themeStyles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className='default-theme'>
      <GlobalStyles />
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

