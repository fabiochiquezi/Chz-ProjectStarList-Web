import Head from 'next/head'
import '../src/appCore/ui/fonts'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Auth } from '../src/appStruct/ui/_auth'
import { routes } from '../src/appCore/ui/routes'
import { Structure } from '../src/appStruct/ui/_struct'
import { settingsSEO } from '../src/appCore/ui/settings'
import '../src/appStruct/ui/__share/styles/tailwind.scss'
import { isRouteMixed, isRoutePrivate } from '../src/libs/helpers'
import { Styles } from '../src/appStruct/ui/__share/styles/styles'
import { useLoadPage } from '../src/appStruct/ui/_struct/hooks/usePageLoad'
import { initiateCatalog } from '../src/appCore/events/Catalog/initiateCatalog'

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

