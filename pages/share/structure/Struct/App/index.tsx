import { PrivateRoute } from '../../Route/Private'
import React, { FC, ReactNode } from 'react'
import { UtilsProvider } from '../../Utils'
import { AuthProvider } from '../../Auth'

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
