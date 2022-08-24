import React from 'react'
import GoogleIcon from '../../public/icons/GoogleIcon'

const ButtonsSignIn2: React.FC = () => {
    return (
        <button className="btn-transparent py-[12px] px-8 border-orange-400 text-orange-400 flex justify-between items-center text-lg">
            Sign In
            <GoogleIcon className="ml-3 mt-[-1px]" />
        </button>
    )
}

export default ButtonsSignIn2
