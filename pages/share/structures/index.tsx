import { isRouteMixed, isRoutePrivate, isRoutePublic } from '../settings/routes'
import { PrivateStruct } from './Private'
import { useRouter } from 'next/router'
import { PublicStruct } from './Public'
import { FC, ReactNode } from 'react'
import { useAuth } from '../contexts'

interface IStructureProps { children: ReactNode }

const Structure: FC<IStructureProps> = ({ children }) => {
  const { user } = useAuth()
  const { route } = useRouter()

  const publicStruct = <PublicStruct>{children}</PublicStruct>
  const privateStruct = <PrivateStruct>{children}</PrivateStruct>

  if (isRouteMixed(route) && user) return privateStruct
  if (isRouteMixed(route) && !user) return publicStruct
  if (isRoutePrivate(route)) return privateStruct
  if (isRoutePublic(route)) return publicStruct
  return null
}

export { Structure }
