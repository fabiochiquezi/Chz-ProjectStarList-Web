import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '../../../components'
import { useAuth } from '../../../auth/types/usetypes'
import { publicRoutes } from '../../../settings/routes'

interface PrivateRoutType {
    children: ReactNode
}

const PrivateRoute: FC<PrivateRoutType> = ({ children }) => {
    const { user } = useAuth()
    const { route } = useRouter()
    const publicRoute = children
    const isPublic = publicRoutes.includes(route)
    const privateRoute = !user ? <Loading /> : children

    return (
        <div data-testid="PrivateRoute">
            {isPublic ? publicRoute : privateRoute}
        </div>
    )
}

export { PrivateRoute }
