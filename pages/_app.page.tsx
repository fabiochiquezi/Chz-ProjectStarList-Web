import './index.css'
import '@fontsource/roboto'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { useAlert, usePopSave } from './share/store'
import { Structure } from './share/structure'
import { ReactElement, useCallback } from 'react'
import { AuthFirebase } from './share/auth/AuthFirebase'
import { Alert, PopSave } from './share/components'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => {
    const alert = useAlert()
    const popSave = usePopSave()
    const router = useRouter()

    const AlertComponent = useCallback(() => {
        return alert.message ? (
            <Alert
                mode={alert.mode}
                message={alert.message}
                closeAlert={() => alert.close()}
            />
        ) : null
    }, [alert])

    const PopSaveComponent = useCallback(() => {
        return popSave.message ? <PopSave message={popSave.message} /> : null
    }, [popSave])

    return (
        <div>
            <AuthFirebase alert={alert} router={router}>
                <Structure>
                    <Component {...pageProps} />
                </Structure>
            </AuthFirebase>
            <AlertComponent />
            <PopSaveComponent />
        </div>
    )
}

export default MyApp
