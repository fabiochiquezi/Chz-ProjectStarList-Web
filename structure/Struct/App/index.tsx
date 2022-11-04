import { PrivateRoute } from 'structure/Private'
import { AuthProvider } from 'structure/Auth'
import React, { FC, ReactNode } from 'react'
import UtilsProvider from 'structure/Utils'

interface props {
    children: ReactNode
}

const StructureApp: FC<props> = ({ children }) => {
    return (
        <UtilsProvider>
            <AuthProvider>
                <PrivateRoute>{children}</PrivateRoute>
            </AuthProvider>
        </UtilsProvider>
    )
}

export { StructureApp }
