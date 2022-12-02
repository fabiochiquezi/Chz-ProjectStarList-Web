import './index.css'
import '@fontsource/roboto'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Structure } from './share/structures'
import { AuthContextFirebase } from './share/contexts'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => {
  return (
    <AuthContextFirebase>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </AuthContextFirebase>
  )
}

export default MyApp

