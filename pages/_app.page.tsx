import './index.css'
import '@fontsource/roboto'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { AuthFirebase } from './share/auth'
import { Structure } from './share/structure'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => (
  <AuthFirebase>
    <Structure>
      <Component {...pageProps} />
    </Structure>
  </AuthFirebase>
)

export default MyApp
