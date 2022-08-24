import React from 'react'
import GoogleIcon from '../../public/icons/GoogleIcon'

const ButtonnSignIn1: React.FC = () => {
    return (
        <a className="z-50 btn-solid bg-blue-800 py-[9px] pt-[10px] px-4 text-md flex justify-between items-center">
            Sign In
            <GoogleIcon width={20} height={20} className="ml-2 mt-[-3px]" />
        </a>
    )
}

export default ButtonnSignIn1
