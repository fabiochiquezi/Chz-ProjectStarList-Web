import { Header } from './Header'
import { Footer } from './Footer'
import { User } from '../../types'
import { FC, ReactNode } from 'react'
import { NextRouter } from 'next/router'
import { Loading } from '../../components'

interface props {
    router: NextRouter
    user: User | null
    signOut: () => Promise<void>
    children: ReactNode
    loading: boolean
}

const PrivateStruct: FC<props> = ({
    children,
    loading,
    router,
    user,
    signOut
}) => (
    <div data-testid="StructPrivate">
        <Header router={router} user={user} signOut={signOut} />
        <div className="mb-48 sm:mb-36 lg:mb-24">
            {loading ? (
                <Loading />
            ) : (
                <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                    {children}
                </div>
            )}
        </div>
        <Footer />
    </div>
)

export { PrivateStruct }
