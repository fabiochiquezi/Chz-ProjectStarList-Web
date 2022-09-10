import 'styles/globals.css'
import '@fontsource/roboto'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import AuthProvider from 'context/AuthContext'
import UtilsProvider from 'context/UtilsContext'
import { noAuthRequired } from 'general/data/routes'
import ProtectedRouter from 'components/Structure/ProtectedRouter'

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement | null => {
    const { pathname } = useRouter()
    const [isSSR, setIsSSR] = useState(true)
    const isPublic = noAuthRequired.includes(pathname)

    const publicRoute = <Component {...pageProps} />
    const privateRoute = (
        <ProtectedRouter>
            <Component {...pageProps} />
        </ProtectedRouter>
    )
    const Page = isPublic ? publicRoute : privateRoute

    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    return (
        <AuthProvider>
            <UtilsProvider>
                <div className="dark:bg-primary dark:text-white bg-white text-black">
                    {Page}
                </div>
            </UtilsProvider>
        </AuthProvider>
    )
}

export default MyApp
