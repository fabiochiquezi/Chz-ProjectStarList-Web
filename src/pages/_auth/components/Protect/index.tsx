import React from 'react'
import { User } from '../../../../domain'
import { isRouteMixed, isRoutePrivate, isRoutePublic } from '../../../routes'

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
  if (isPrivate && !user) return null
  if (isMixed && user === undefined) return null
  return children
}

export { ProtectRoute }
