import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { LoadContext, useAuth } from '../contexts'
import { PublicStruct } from './Public/PublicStructure'
import { PrivateStruct } from './Private/PrivateStruct'
import { isMixedRoute, isPrivate, isPublic } from '../settings/routes'

interface IStructureProps { children: ReactNode }

const Structure: FC<IStructureProps> = ({ children }) => {
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

  if (isMixedRoute(router.route) && user) return privateStruct
  if (isMixedRoute(router.route) && !user) return publicStruct
  if (isPrivate(router.route)) return privateStruct
  if (isPublic(router.route)) return publicStruct
  return null
}

export { Structure }
