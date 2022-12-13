import '@fontsource/roboto'
import './share/styles/index.scss'
import { ReactElement } from 'react'
import { Structure } from './struct'
import type { AppProps } from 'next/app'
import { AuthFirebase } from './share/contexts'


function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthFirebase>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </AuthFirebase>
  )
}

export default MyApp

