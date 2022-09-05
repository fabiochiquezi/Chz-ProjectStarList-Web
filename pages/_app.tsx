import 'styles/globals.css'
import '@fontsource/roboto'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import AuthProvider from 'context/AuthContext'
import UtilsProvider from 'context/UtilsContext'
import { noAuthRequired } from 'general/data/routes'
import ProtectedRouter from 'components/ProtectedRouter'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    const [isSSR, setIsSSR] = useState(true)
    const isPublic = noAuthRequired.includes(router.pathname)

    useEffect(() => {
        setIsSSR(false)
    }, [])

    if (isSSR) return null
    return (
        <AuthProvider>
            <div className="dark:bg-primary dark:text-white bg-white text-black">
                <UtilsProvider>
                    {isPublic ? (
                        <Component {...pageProps} />
                    ) : (
                        <ProtectedRouter>
                            <Component {...pageProps} />
                        </ProtectedRouter>
                    )}
                </UtilsProvider>
            </div>
        </AuthProvider>
    )
}

export default MyApp
