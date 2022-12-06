import { Loading } from '../../../../components'
import { User } from '../../../../types'
import React from 'react'
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
  if (isMixed && user === undefined) return <Loading />
  if (isPrivate && !user) return <Loading />
  return children
}

export { ProtectRoute }
