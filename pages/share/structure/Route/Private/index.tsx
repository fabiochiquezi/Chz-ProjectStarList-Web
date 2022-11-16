import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '../../..'
import { publicRoutes } from '../../../settings'
import { useAuth } from '../../Auth/types/usetypes'

interface PrivateRoutType {
    children: ReactNode
}

const PrivateRoute: FC<PrivateRoutType> = ({ children }) => {
    const { user } = useAuth()
    const { route } = useRouter()
    const isPublic = publicRoutes.includes(route)
    const publicRoute = children
    const privateRoute = user === null ? <Loading /> : children

    return (
        <div data-testid="private-route">
            {isPublic ? publicRoute : privateRoute}
        </div>
    )
}

export { PrivateRoute }
