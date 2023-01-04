import './fonts'
import Head from 'next/head'
import { routes } from './routes'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { settingsSEO } from './settings'
import { Auth } from '../../structure/ui/_auth'
import { Structure } from '../../structure/ui/_struct'
import '../../structure/ui/__share/styles/tailwind.scss'
import { Styles } from '../../structure/ui/__share/styles/styles'
import { isRouteMixed, isRoutePrivate } from 'libs/helpers'
import { useLoadPage } from '../../structure/ui/_struct/hooks/usePageLoad'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter()
  const { loading, loadPage } = useLoadPage(router)

  return (
    <div className='default-theme'>
      <Styles />
      <div className='bg-skin-base-primary text-skin-font-primary'>
        <Head>
          <title>{settingsSEO.default.title}</title>
        </Head>
        <Auth>
          <Structure
            isRouteMixed={isRouteMixed(routes)(router.route)}
            isRoutePrivate={isRoutePrivate(routes)(router.route)}
            loadPage={loadPage}
            loading={loading}
            route={router.route}
          >
            <Component {...pageProps} />
          </Structure>
        </Auth>
      </div>
    </div>
  )
}

export default MyApp

