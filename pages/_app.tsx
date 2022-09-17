import 'styles/globals.css'
import '@fontsource/roboto'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import UtilsProvider from 'context/UtilsContext'
import React, { ReactElement, useEffect, useState } from 'react'
import { AuthProvider } from 'context/AuthContext'
import { noAuthRequired } from 'general/data/routes'
import { PrivateRoute } from 'components/Structure/PrivateRoute'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Drag And Drop context plugin
const DnDProvide = ({ children }: { children: ReactElement }): ReactElement => (
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
)

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement | null => {
    const { pathname } = useRouter()
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    const isPublic = noAuthRequired.includes(pathname)
    const Core = <Component {...pageProps} />

    const DnDPlugin = <DnDProvide>{Core}</DnDProvide>
    const privateRoute = <PrivateRoute>{DnDPlugin}</PrivateRoute>
    const Page = isPublic ? Core : privateRoute

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
