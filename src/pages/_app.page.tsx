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
import { isRouteMixed, isRoutePrivate } from 'libs/helpers'
import { Styles } from '../../structure/ui/__share/styles/styles'
import { initiateCatalog } from 'src/events/Catalog/initiateCatalog'
import { useLoadPage } from '../../structure/ui/_struct/hooks/usePageLoad'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter()
  const { loading, loadPage } = useLoadPage(router)

  return (
    <>
      <Styles />
      <Head>
        <title>{settingsSEO.default.title}</title>
      </Head>
      <div className='default-theme'>
        <div className='bg-skin-base-primary text-skin-font-primary'>
          <Auth afterSignUpCB={initiateCatalog}>
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
    </>
  )
}

export default MyApp

