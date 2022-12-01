import { Loading } from '../../../components'
import { User } from '../../../types'
import React from 'react'

interface IProtectRoute {
  children: React.ReactNode
  isPublic: boolean
  user: User | null
}

const ProtectRoute: React.FC<IProtectRoute> = ({ children, isPublic, user }) => {
  const publicRoute = children
  const privateRoute = user ? children : <Loading />
  return (
    <div data-testid="ProtectRoute">
      {isPublic ? publicRoute : privateRoute}
    </div>
  )
}

export { ProtectRoute }
