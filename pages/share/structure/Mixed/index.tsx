import { User } from '../../types'
import { PublicStruct } from '../Public'
import { NextRouter } from 'next/router'
import { PrivateStruct } from '../Private'
import React, { FC, ReactElement, ReactNode } from 'react'

interface props {
    router: NextRouter
    user: User | null
    signOut: () => Promise<void>
    children: ReactNode
    loading: boolean
    BtnSignIn: ReactElement
}

const MixedStruct: FC<props> = ({
    user,
    router,
    loading,
    signOut,
    children,
    BtnSignIn
}) => {
    const publicStruct = (
        <PublicStruct BtnSignIn={BtnSignIn}>
            <div className="pt-48 sm:pt-36 mb-52">{children}</div>
        </PublicStruct>
    )
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

export { MixedStruct }
