import React from 'react'
import { useRouter } from 'next/router'
import { LoadingStruct } from '../../Loadings/Default'
import { useAuth } from '../../Auth/types'
import { publicRoutes } from '../../../pages/routes'

interface props {
    children: React.ReactNode
}

const PrivateRoute: React.FC<props> = ({ children }) => {
    const { user } = useAuth()
    const { route } = useRouter()
    console.log(route)
    const isPublic = publicRoutes.includes(route)
    const publicRoute = children
    const privateRoute = user === null ? <LoadingStruct /> : children

    return (
        <div data-testid="private-route">
            {isPublic ? publicRoute : privateRoute}
        </div>
    )
}

export { PrivateRoute }
