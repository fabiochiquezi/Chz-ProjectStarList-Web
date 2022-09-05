import React from 'react'
import { useAuth } from 'context/AuthContext'
import SpinIcon2 from 'public/icons/SpinIcon2'
import GoogleIcon from 'public/icons/GoogleIcon'

interface props {
    className?: string
    onClick: () => Promise<any>
}

const ButtonnSignIn1: React.FC<props> = ({ className, onClick }) => {
    const { loading } = useAuth()

    return (
        <a
            className={`btn-solid bg-blue-800 py-[10px] pt-[10px] px-4 text-md flex justify-center items-center ${className} h-[44px] w-[112px]`}
            onClick={onClick}
        >
            {loading ? (
                <div className="mt-[7px]">
                    <SpinIcon2 />
                </div>
            ) : (
                <>
                    <span className="md:text-sm lg:text-md">Sign In</span>
                    <GoogleIcon
                        width={20}
                        height={20}
                        className="ml-1 mt-[-3px]"
                    />
                </>
            )}
        </a>
    )
}

export default ButtonnSignIn1
