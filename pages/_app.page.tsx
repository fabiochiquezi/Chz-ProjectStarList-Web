import './index.css'
import '@fontsource/roboto'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Structure } from './share/structure'
import { AuthFirebase } from './share/auth/AuthFirebase'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => (
  <AuthFirebase>
    <Structure>
      <Component {...pageProps} />
    </Structure>
  </AuthFirebase>
)

export default MyApp
