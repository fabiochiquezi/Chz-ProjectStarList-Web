import { PrivateRoute } from 'structure/Route/Private'
import { AuthProvider } from 'structure/Auth'
import React, { FC, ReactNode } from 'react'
import UtilsProvider from 'structure/Utils'

interface StructType {
    children: ReactNode
}

const Struct: FC<StructType> = ({ children }) => {
    return (
        <UtilsProvider>
            <AuthProvider>
                <PrivateRoute>{children}</PrivateRoute>
            </AuthProvider>
        </UtilsProvider>
    )
}

export { Struct }
