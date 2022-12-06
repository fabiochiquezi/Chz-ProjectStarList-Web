import { isRouteMixed, isRoutePrivate, isRoutePublic } from '../settings'
import { PrivateStruct, PublicStruct } from './controllers'
import { HeaderPrivate, HeaderPublic } from './components'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { useAuth } from '../contexts'

interface IStructureProps {
  children: ReactNode
}

const Structure: FC<IStructureProps> = ({ children }) => {
  const { user, signIn, signOut } = useAuth()
  const { route } = useRouter()

  const publicStruct = (
    <PublicStruct
      route={route}
      Header={
        <HeaderPublic signIn={signIn} />
      }
    >
      {children}
    </PublicStruct>
  )

  const privateStruct = (
    <PrivateStruct
      Header={
        <HeaderPrivate
          route={route}
          signOut={signOut}
          user={user} />
      }
    >
      {children}
    </PrivateStruct>
  )

  if (isRouteMixed(route) && user) return privateStruct
  if (isRouteMixed(route) && !user) return publicStruct
  if (isRoutePrivate(route)) return privateStruct
  if (isRoutePublic(route)) return publicStruct
  return null
}

export { Structure }
