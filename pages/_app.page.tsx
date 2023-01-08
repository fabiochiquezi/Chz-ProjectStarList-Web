import Head from 'next/head'
import { ReactElement } from 'react'
import '../src/appShare/settings/fonts'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import '../src/appShare/styles/tailwind.scss'
import { Auth } from '../src/appStruct/ui/_auth'
import { Styles } from '../src/appShare/styles/styles'
import { Structure } from '../src/appStruct/ui/_struct'
import { routes } from '../src/appShare/settings/routes'
import { settingsSEO } from '../src/appShare/settings/seo'
import { isRouteMixed, isRoutePrivate } from '../src/libs/helpers'
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

