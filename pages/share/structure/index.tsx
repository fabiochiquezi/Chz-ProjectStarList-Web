import { PublicStruct } from './Public'
import { useRouter } from 'next/router'
import { PrivateStruct } from './Private'
import { useContentLoad } from '../store'
import { useAuth } from '../auth/types/usetypes'
import { useSetAuth } from '../auth/types/setTypes'
import React, { FC, ReactNode } from 'react'

interface IStructureProps {
    children: ReactNode
}

const Structure: FC<IStructureProps> = ({ children }) => {
    const router = useRouter()
    const { user } = useAuth()
    const { signOut, signIn } = useSetAuth()
    const { state: loading } = useContentLoad()

    const publicStruct = <PublicStruct signIn={signIn}>{children}</PublicStruct>
    const privateStruct = (
        <PrivateStruct
            loading={loading}
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
