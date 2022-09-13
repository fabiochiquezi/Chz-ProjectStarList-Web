import React from 'react'
import { LoadingStruct } from '../Loadings/Default'
import { useAuth } from '../../../context/AuthContext/types'

interface props {
    children: React.ReactNode
}

const PrivateRoute: React.FC<props> = ({ children }) => {
    const { user } = useAuth()
    return (
        <div data-testid="private-route">
            {user != null ? children : <LoadingStruct />}
        </div>
    )
}

export { PrivateRoute }
