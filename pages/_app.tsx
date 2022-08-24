import type { AppProps } from 'next/app'
import '@fontsource/roboto'
import '../general/styles/globals.css'
import { ThemeProvider } from '../components/ThemeContext'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])

    if (isSSR) return null
    return (
        <div className="dark:bg-primary dark:text-white bg-white text-black">
            <ThemeProvider>
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default MyApp
