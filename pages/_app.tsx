import 'styles/globals.css'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { StructureApp } from 'structure/Struct/App'

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement | null => {
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    return (
        <StructureApp>
            <Component {...pageProps} />
        </StructureApp>
    )
}

export default MyApp
