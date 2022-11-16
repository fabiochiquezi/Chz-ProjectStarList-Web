import CloseIcon from 'pages/share/assets/icons/CloseIcon'
import React from 'react'
import { useSetUtils } from 'structure/Utils/types'

interface props {
    children: React.ReactNode
}

const ModalForm: React.FC<props> = ({ children }) => {
    const { modal } = useSetUtils()
    return (
        <div
            className="absolute w-[90%] w-[316px] mx-auto z-50 left-[50%] ml-[-158px] top-[10%]
                sm:max-w-[440px] sm:ml-[-220px] sm:top-[10%] sm:w-full
                md:max-w-[600px] md:ml-[-300px] md:top-[20%]
                lg:top-[25%] form-add-anim"
            data-testid="modal-form"
        >
            <div
                onClick={() => modal.close()}
                className="absolute right-4 top-0 p-8 -mr-8 -mt-8 simple-button z-10"
            >
                <CloseIcon width={22} height={16} />
            </div>
            {children}
        </div>
    )
}

export { ModalForm }
