import React from 'react'
import { useRouter } from 'next/router'
import { LoadingStruct } from '../Loadings/Default'
import { useAuth } from '../../structure/Auth/types'
import { publicRoutes } from 'general/routes'

interface props {
    children: React.ReactNode
}

const PrivateRoute: React.FC<props> = ({ children }) => {
    const { user } = useAuth()
    const { pathname } = useRouter()
    const isPublic = publicRoutes.includes(pathname)
    const publicRoute = children
    const privateRoute = user === null ? <LoadingStruct /> : children

    return (
        <div data-testid="private-route">
            {isPublic ? publicRoute : privateRoute}
        </div>
    )
}

export { PrivateRoute }