import { UtilsProvider, AuthProvider } from '../../../context'
import { PrivateRoute } from '../../Route/Private'
import React, { FC, ReactNode } from 'react'

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
