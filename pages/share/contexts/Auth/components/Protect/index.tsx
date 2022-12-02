import { Loading } from '../../../../components'
import { User } from '../../../../types'
import React from 'react'

interface IProtectRoute {
  children: React.ReactNode
  isPrivate: boolean
  user: User | null
}

const ProtectRoute: React.FC<IProtectRoute> = ({ children, user, isPrivate }) => {
  const publicRoute = children
  const privateRoute = user ? children : <Loading />
  return (
    <div data-testid="ProtectRoute">
      {isPrivate ? privateRoute : publicRoute}
    </div>
  )
}

export { ProtectRoute }
