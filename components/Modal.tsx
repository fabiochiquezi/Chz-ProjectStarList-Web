import React from 'react'

interface props {
    children?: React.ReactNode
    isOpen: boolean
}

const Modal: React.FC<props> = ({ children, isOpen }) => {
    if (!isOpen) return null
    return (
        <div className="fixed w-full h-full left-0 top-0 z-50">
            <div className="absolute w-full h-full left-0 top-0 bg-black opacity-75"></div>
            <div className="absolute w-[90%] mx-auto z-50 left-[50%] top-[50%]">
                {children}
            </div>
        </div>
    )
}

export default Modal
