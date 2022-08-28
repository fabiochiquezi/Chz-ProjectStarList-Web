import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuth, useSetAuth } from '../context/AuthContext'
import { authState } from '../firebase/auth/authState'
import SpinIcon from '../public/icons/SpinIcon'

interface props {
    children: React.ReactNode
}

const Loading = () => (
    <div className="flex flex-col items-center justify-center h-screen">
        <SpinIcon />
    </div>
)

const ProtectedRouter: React.FC<props> = ({ children }) => {
    const { user } = useAuth()
    const { setUser } = useSetAuth()
    const router = useRouter()

    authState((userGoogle: User) => {
        if (userGoogle) {
            setUser(userGoogle)
            return
        }
        router.push('/')
    })

    /*
        useEffect(() => {
            if (!user) {
                router.push('/')
            }
        }, [router, user])
    */

    return <>{user ? children : <Loading />}</>
}

export default ProtectedRouter
