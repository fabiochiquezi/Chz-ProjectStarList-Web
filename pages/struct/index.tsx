import { Footer, HeaderPrivate, HeaderPublic } from './components'
import { isRouteMixed, isRoutePrivate } from '../share/settings'
import { PrivateStruct, PublicStruct } from './controllers'
import { LoadContext, useAuth } from '../share/contexts'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

interface IStructureProps {
  children: ReactNode
}

const Structure: FC<IStructureProps> = ({ children }) => {
  const { user, signIn, signOut } = useAuth()
  const { route } = useRouter()

  const publicStruct = (
    <PublicStruct
      route={route}
      Footer={<Footer />}
      Header={<HeaderPublic signIn={signIn} />}
    >
      {children}
    </PublicStruct>
  )

  const privateStruct = (
    <PrivateStruct
      Footer={<Footer />}
      Header={
        <HeaderPrivate
          route={route}
          signOut={signOut}
          user={user} />
      }
    >
      <LoadContext>
        {children}
      </LoadContext>
    </PrivateStruct>
  )

  if (isRouteMixed(route) && user) return privateStruct
  if (isRouteMixed(route) && !user) return publicStruct
  if (isRoutePrivate(route)) return privateStruct
  return publicStruct
}

export { Structure }
