import React from 'react'
import CloseIcon from '../../../pages/share/assets/icons/CloseIcon'

interface props {
    message: string
    state?: number
    closeAlert: () => void
}

const Alert: React.FC<props> = ({ message = '', state = 0, closeAlert }) => {
    let stateClass = ''

    switch (state) {
        case 1:
            stateClass = 'bg-green-700'
            break
        case 2:
            stateClass = 'bg-red-700'
            break
        default:
            stateClass = 'bg-gray-700'
            break
    }

    return (
        <div
            className={`alert-anim fixed left-[0px] ml-[5%] top-10 w-[90%] mx-auto text-left rounded py-4 px-4 z-50 flex justify-between items-center
                sm:max-w-[420px] sm:left-[50%] sm:ml-[-210px]
                ${stateClass}`}
            data-testid="alert-default"
        >
            <p className="text-lg text-white mr-2 ml-2">{message}</p>

            <div
                className="relative left-1 simple-button"
                onClick={closeAlert}
                data-testid="close-button"
            >
                <CloseIcon width={22} height={16} />
            </div>
        </div>
    )
}

export { Alert }
