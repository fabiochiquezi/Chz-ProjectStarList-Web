import { Header } from './Header'
import { Footer } from './Footer'
import React, { FC, ReactElement, ReactNode } from 'react'

interface PublicStructType {
    children: ReactNode
    BtnSignIn: ReactElement
}

const PublicStruct: FC<PublicStructType> = ({ children, BtnSignIn }) => (
    <div data-testid="StructPrivate">
        <Header BtnSignIn={BtnSignIn} />
        <div className="mb-48 sm:mb-36 lg:mb-24">{children}</div>
        <Footer />
    </div>
)

export { PublicStruct }
