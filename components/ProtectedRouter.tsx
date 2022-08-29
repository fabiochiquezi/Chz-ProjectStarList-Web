import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuth, useSetAuth } from '../context/AuthContext'
import { authState } from '../firebase/auth/authState'
import Loading from './Loading'

interface props {
    children: React.ReactNode
}

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
