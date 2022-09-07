import React from 'react'
import Loading from './Loading'
import { useAuth } from 'context/AuthContext/types'

interface props {
    children: React.ReactNode
}

const ProtectedRouter: React.FC<props> = ({ children }) => {
    const { user } = useAuth()

    return <>{user ? children : <Loading />}</>
}

export default ProtectedRouter
