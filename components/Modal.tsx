import React, { useEffect } from 'react'
import { useSetUtils } from '../context/UtilsContext'

interface props {
    children?: React.ReactNode
    isOpen: boolean
}

const Modal: React.FC<props> = ({ children, isOpen }) => {
    const { setModal } = useSetUtils()
    useEffect(() => {
        const el = document.querySelector('html')
        if (isOpen && el) el.style.overflow = 'hidden'
        if (!isOpen && el) el.style.overflow = 'auto'
    }, [isOpen])

    if (!isOpen) return null
    return (
        <div className="fixed w-full h-full left-0 top-0 z-50 overflow-y-scroll overflow-x-hidden">
            <div
                className="absolute w-full h-full left-0 top-0 bg-black opacity-75"
                onClick={() => setModal(false)}
            ></div>
            {children}
        </div>
    )
}

export default Modal
