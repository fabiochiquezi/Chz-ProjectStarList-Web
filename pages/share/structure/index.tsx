import { FC, ReactNode } from 'react'
import { PublicStruct } from './Public'
import { useRouter } from 'next/router'
import { useAppStore } from '../store'
import { PrivateStruct } from './Private'
import { useAuth, useSetAuth } from '../auth'

interface IStructureProps { children: ReactNode }

const Structure: FC<IStructureProps> = ({ children }) => {
  const router = useRouter()
  const { user } = useAuth()
  const { signOut, signIn } = useSetAuth()
  const { loadingUI } = useAppStore()

  const publicStruct = <PublicStruct signIn={signIn}>{children}</PublicStruct>
  const privateStruct = (
    <PrivateStruct
      loading={loadingUI}
      signOut={signOut}
      router={router}
      user={user}
    >
      {children}
    </PrivateStruct>
  )

  return user ? privateStruct : publicStruct
}

export { Structure }
