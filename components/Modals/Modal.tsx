import React, { useEffect } from 'react'
import { useSetUtils } from 'context/UtilsContext/types'

interface props {
    children?: React.ReactNode
    isOpen: boolean
}

const Modal: React.FC<props> = ({ children, isOpen }) => {
    const { closeModal } = useSetUtils()
    useEffect(() => {
        const el = document.querySelector('html')
        if (isOpen && el) el.style.overflow = 'hidden'
        if (!isOpen && el) el.style.overflow = 'auto'

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && isOpen) {
                event.preventDefault()
                closeModal()
            }
        })
    }, [isOpen])

    if (!isOpen) return null
    return (
        <div className="modal-anim fixed w-full h-full left-0 top-0 z-40 overflow-y-scroll overflow-x-hidden">
            <div
                className="absolute w-full h-full left-0 top-0 bg-black opacity-75"
                onClick={() => closeModal()}
            ></div>
            {children}
        </div>
    )
}

export default Modal
