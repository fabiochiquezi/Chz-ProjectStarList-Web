import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

interface props {
    children: React.ReactNode
}

const ProtectedRouter: React.FC<props> = ({ children }) => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, [router, user])

    return <>{user ? children : null}</>
}

export default ProtectedRouter
