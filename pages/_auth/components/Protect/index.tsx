import React from 'react'
import { User } from '../../../share/types'
import { isRouteMixed, isRoutePrivate, isRoutePublic } from 'pages/share/settings'

interface IProtectRoute {
  children: React.ReactNode
  user: User | null | undefined
  route: string
}

const ProtectRoute = (props: IProtectRoute): any => {
  const { children, user, route } = props
  const isPublic = isRoutePublic(route)
  const isMixed = isRouteMixed(route)
  const isPrivate = isRoutePrivate(route)

  if (isPublic) return children
  if (isMixed && user === undefined) return null
  if (isPrivate && !user) return null
  return children
}

export { ProtectRoute }
