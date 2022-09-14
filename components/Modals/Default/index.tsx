import React, { useEffect } from 'react'
import { useSetUtils } from '../../../context/UtilsContext/types'

interface props {
    children?: React.ReactNode
    isOpen: boolean
}

const Modal: React.FC<props> = ({ children, isOpen }) => {
    const { modal } = useSetUtils()

    useEffect(() => {
        const el = document.querySelector('html')
        if (isOpen && el != null) el.style.overflow = 'hidden'
        if (!isOpen && el != null) el.style.overflow = 'auto'

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && isOpen) {
                event.preventDefault()
                modal.close()
            }
        })
    }, [isOpen])

    if (!isOpen) return null
    return (
        <div
            className="modal-anim fixed w-full h-full left-0 top-0 z-40 overflow-y-scroll overflow-x-hidden"
            data-testid="modal-default"
        >
            <div
                className="absolute w-full h-full left-0 top-0 bg-black opacity-75"
                onClick={() => modal.close()}
            ></div>
            {children}
        </div>
    )
}

export { Modal }
