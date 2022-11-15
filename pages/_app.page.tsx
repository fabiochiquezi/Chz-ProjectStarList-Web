import './index.css'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'
import { Struct } from './share/structure/Struct/App'
import { ReactElement, useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement | null => {
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    return (
        <Struct>
            <Component {...pageProps} />
        </Struct>
    )
}

export default MyApp
