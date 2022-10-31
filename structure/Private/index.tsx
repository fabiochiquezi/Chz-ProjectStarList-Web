import React from 'react'
import { useAuth } from 'structure/Auth/types'
import { LoadingStruct } from '../Loadings/Default'

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
