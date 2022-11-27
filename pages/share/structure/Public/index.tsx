import { Header } from './Header'
import { Footer } from './Footer'
import React, { FC, ReactNode } from 'react'

interface PublicStructType {
    children: ReactNode
    signIn: () => Promise<void> | void
}

const PublicStruct: FC<PublicStructType> = ({ children, signIn }) => (
    <div data-testid="StructPrivate">
        <Header signIn={signIn} />
        <div className="mb-48 sm:mb-36 lg:mb-24">{children}</div>
        <Footer />
    </div>
)

export { PublicStruct }
