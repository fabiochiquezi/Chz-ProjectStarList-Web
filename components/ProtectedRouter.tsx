import React from 'react'
import Loading from './Loading'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { authState } from 'firebase/auth/authState'
import { useAuth, useSetAuth } from 'context/AuthContext/types'

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

    return <>{user ? children : <Loading />}</>
}

export default ProtectedRouter
