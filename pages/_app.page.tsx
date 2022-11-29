import './index.css'
import '@fontsource/roboto'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Structure } from './share/structure'
import { AuthFirebase } from './share/auth/AuthFirebase'
import { usePortalAlert } from './share/portals/Alerts/Default'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => {
  const alert = usePortalAlert()
  const router = useRouter()

  return (
    <div>
      <AuthFirebase alert={alert} router={router}>
        <Structure>
          <Component {...pageProps} />
        </Structure>
      </AuthFirebase>
    </div>
  )
}

export default MyApp
