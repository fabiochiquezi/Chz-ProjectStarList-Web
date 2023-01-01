import { isRouteMixed, isRoutePrivate, isRoutePublic } from 'libs/helpers/front/route'
import { routes } from 'src/pages/routes'
import { User } from '../../../../domain'
import React from 'react'

interface IProtectRoute {
  children: React.ReactNode
  user: User | null | undefined
  route: string
}

const ProtectRoute = (props: IProtectRoute): any => {
  const { children, user, route } = props
  const isPublic = isRoutePublic(routes)(route)
  const isMixed = isRouteMixed(routes)(route)
  const isPrivate = isRoutePrivate(routes)(route)

  if (isPublic) return children
  if (isPrivate && !user) return null
  if (isMixed && user === undefined) return null
  return children
}

export { ProtectRoute }
