import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '../../../components'
import { publicRoutes } from '../../../settings/routes'
import { useAuth } from '../../../context/Auth/types/usetypes'

interface PrivateRoutType {
    children: ReactNode
}

const PrivateRoute: FC<PrivateRoutType> = ({ children }) => {
    const { user } = useAuth()
    const { route } = useRouter()
    const isPublic = publicRoutes.includes(route)
    const publicRoute = children
    const privateRoute = !user ? <Loading /> : children

    return (
        <div data-testid="PrivateRoute">
            {isPublic ? publicRoute : privateRoute}
        </div>
    )
}

export { PrivateRoute }
