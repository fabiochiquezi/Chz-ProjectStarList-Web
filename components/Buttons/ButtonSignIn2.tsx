import React from 'react'
import { useAuth } from 'context/AuthContext'
import SpinIcon2 from 'public/icons/SpinIcon2'
import GoogleIcon from 'public/icons/GoogleIcon'

interface props {
    className?: string
    onClick: () => Promise<any>
}

const ButtonsSignIn2: React.FC<props> = ({ className, onClick }) => {
    const { loading } = useAuth()

    return (
        <button
            className={`btn-transparent py-[12px] px-8 border-orange-400 text-orange-400 flex justify-center items-center text-lg h-[56px] w-[166px] ${className}`}
            onClick={onClick}
        >
            {loading ? (
                <div className="mt-3">
                    <SpinIcon2 width={20} height={20} color="#FB923C" />
                </div>
            ) : (
                <>
                    <span>Sign In</span>
                    <GoogleIcon className="ml-2 mt-[-1px]" />
                </>
            )}
        </button>
    )
}

export default ButtonsSignIn2
