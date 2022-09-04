import type { AppProps } from 'next/app'
import '@fontsource/roboto'
import '../general/styles/globals.css'
import { useEffect, useState } from 'react'
import AuthProvider, { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRouter from '../components/ProtectedRouter'
import UtilsProvider from '../context/UtilsContext'
import { noAuthRequired } from '../general/data/routes'

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
