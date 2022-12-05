import { Loading } from '../../../../components'
import { User } from '../../../../types'
import React from 'react'
import { isRoutePublic } from 'pages/share/settings'
import { useRouter } from 'next/router'

interface IProtectRoute {
  children: React.ReactNode
  user: User | null | undefined
}

const ProtectRoute: React.FC<IProtectRoute> = ({ children, user }) => {
  const { route } = useRouter()
  const isPublic = isRoutePublic(route)
  if (isPublic) return children

  const hasUserOurNull = user !== undefined
  return hasUserOurNull ? children : <Loading />
}

export { ProtectRoute }
