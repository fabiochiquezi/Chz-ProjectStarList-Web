import type { AppProps } from 'next/app'
import '@fontsource/roboto'
import '../styles/globals.css'
import Header from '../components/Header'
import { ThemeProvider } from '../components/ThemeContext'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="dark:bg-primary dark:text-white bg-white text-black">
            <ThemeProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default MyApp
