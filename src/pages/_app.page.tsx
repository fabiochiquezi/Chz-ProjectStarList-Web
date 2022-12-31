import './styles.scss'
import '@fontsource/roboto'
import Head from 'next/head'
import { Auth } from './_auth'
import { ReactElement, useEffect } from 'react'
import { Structure } from './_struct'
import type { AppProps } from 'next/app'

import { useAlert } from 'libs/frontend/portals'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const alert = useAlert()
  useEffect(() => {
    alert.success('aaaaaaaaaaa')
  }, [])
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

