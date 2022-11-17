import { AuthFirebase } from 'pages/share/context/Auth/AuthFirebase'
import { PrivateRoute } from '../../Route/Private'
import { UtilsProvider } from '../../../context'
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
