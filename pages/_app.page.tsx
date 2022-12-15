import '@fontsource/roboto'
import './styles.scss'
import { ReactElement } from 'react'
import { Structure } from './_struct'
import type { AppProps } from 'next/app'
import { AuthFirebase } from './_auth/extended'

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

