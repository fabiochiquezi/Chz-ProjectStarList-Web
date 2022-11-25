import './index.css'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'
import { StructApp } from './share/structure'
import { ReactElement, useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => {
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    return (
        <StructApp>
            <Component {...pageProps} />
        </StructApp>
    )
}

export default MyApp
