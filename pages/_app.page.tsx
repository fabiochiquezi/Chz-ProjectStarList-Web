import '@fontsource/roboto'
import './share/styles/index.scss'
import { ReactElement } from 'react'
import { Structure } from './struct'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { useAlert } from './share/portals'
import { AuthFirebase } from './share/contexts'

const Auth = AuthFirebase(useRouter)(useAlert)

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Auth>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </Auth>
  )
}

export default MyApp

