import { AuthFirebase, UtilsProvider } from '../../../context'
import { PrivateRoute } from '../../Route/Private'
import React, { FC, ReactNode } from 'react'

interface StructType {
    children: ReactNode
}

const Struct: FC<StructType> = ({ children }) => {
    return (
        <UtilsProvider>
            <AuthFirebase>
                <PrivateRoute>{children}</PrivateRoute>
            </AuthFirebase>
        </UtilsProvider>
    )
}

export { Struct }
