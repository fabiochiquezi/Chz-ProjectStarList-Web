import { Struct as PublicStruct } from '../Public'
import { Struct as PrivateStruct } from '../Private'
import React, { FC, ReactElement, ReactNode } from 'react'
import { useAuth } from '../../../context/Auth/types/usetypes'

interface props {
    children: ReactNode
    titleSEO: string
    descriptionSEO: string
}

const MixedStruct: FC<props> = ({ children, titleSEO, descriptionSEO }) => {
    const { user } = useAuth()

    const publicChildren = (
        <div className="pt-48 sm:pt-36 mb-52">{children}</div>
    )

    const publicStruct = (
        <PublicStruct titleSEO={titleSEO} descriptionSEO={descriptionSEO}>
            {publicChildren}
        </PublicStruct>
    )

    const privateStruct = (
        <PrivateStruct titleSEO={titleSEO} descriptionSEO={descriptionSEO}>
            {children}
        </PrivateStruct>
    )

    const Core = (): ReactElement => (user ? privateStruct : publicStruct)
    return <Core />
}

export { MixedStruct }
