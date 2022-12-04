import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { LoadContext, useAuth } from '../contexts'
import { PublicStruct } from './Public/PublicStructure'
import { PrivateStruct } from './Private/PrivateStruct'
import { isRouteMixed, isRoutePrivate, isRoutePublic } from '../settings/routes'

interface IStructureProps { children: ReactNode }

const Structure: FC<IStructureProps> = ({ children }) => {
  // console.log('Struct')
  const { user } = useAuth()
  const router = useRouter()

  const publicStruct = (
    <PublicStruct>
      {children}
    </PublicStruct>
  )
  const privateStruct = (
    <PrivateStruct>
      <LoadContext>
        {children}
      </LoadContext>
    </PrivateStruct>
  )

  // console.log(console.log(router.route))
  // return privateStruct
  if (isRouteMixed(router.route) && user) return privateStruct
  if (isRouteMixed(router.route) && !user) return publicStruct
  if (isRoutePrivate(router.route)) return privateStruct
  if (isRoutePublic(router.route)) return publicStruct
  return null
}

export { Structure }
