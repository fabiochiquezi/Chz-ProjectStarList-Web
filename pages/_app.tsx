import 'styles/globals.css'
import '@fontsource/roboto'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import UtilsProvider from 'context/UtilsContext'
import React, { useEffect, useState } from 'react'
import { AuthProvider } from 'context/AuthContext'
import { noAuthRequired } from 'general/data/routes'
import { PrivateRoute } from 'components/Structure/PrivateRoute'

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement | null => {
    const { pathname } = useRouter()
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    const isPublic = noAuthRequired.includes(pathname)
    const ReactComp = <Component {...pageProps} />
    const privateRoute = <PrivateRoute>{ReactComp}</PrivateRoute>
    const Page = isPublic ? ReactComp : privateRoute
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
