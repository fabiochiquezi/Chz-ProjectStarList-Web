import type { AppProps } from 'next/app'
import '@fontsource/roboto'
import '../general/styles/globals.css'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import AuthProvider from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRouter from '../components/ProtectedRouter'

const noAuthRequired = ['/']

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])

    if (isSSR) return null
    return (
        <div className="dark:bg-primary dark:text-white bg-white text-black">
            <AuthProvider>
                {noAuthRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <ProtectedRouter>
                        <Component {...pageProps} />
                    </ProtectedRouter>
                )}
            </AuthProvider>
            <Footer />
        </div>
    )
}

export default MyApp
