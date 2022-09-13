import React from 'react'
import SpinIcon2 from '../../../public/icons/SpinIcon2'
import GoogleIcon from '../../../public/icons/GoogleIcon'
import { useAuth } from '../../../context/AuthContext/types'

interface props {
    className?: string
    onClick: () => any
    id?: string
}

const SignInButton01: React.FC<props> = ({
    className = '',
    onClick,
    id = ''
}) => {
    const { loading } = useAuth()

    const BtnLoad = (
        <div className="mt-[7px]">
            <SpinIcon2 />
        </div>
    )
    const BtnIcon = (
        <>
            <span className="md:text-sm lg:text-md">Sign In</span>
            <GoogleIcon width={20} height={20} className="ml-1 mt-[-3px]" />
        </>
    )
    const Button = (): React.ReactElement => (loading ? BtnLoad : BtnIcon)

    return (
        <a
            className={`btn-solid bg-blue-800 py-[10px] pt-[10px] px-4 text-md flex justify-center items-center ${className} h-[44px] w-[112px]`}
            onClick={onClick}
            id={id}
            data-cy="btn-signIn1"
            data-testid="btn-signIn01"
        >
            <Button />
        </a>
    )
}

const SignInButton02: React.FC<props> = ({
    className = '',
    onClick,
    id = ''
}) => {
    const { loading } = useAuth()
    const BtnLoad = (
        <div className="mt-3">
            <SpinIcon2 width={20} height={20} color="#FB923C" />
        </div>
    )
    const BtnIcon = (
        <>
            <span>Sign In</span>
            <GoogleIcon className="ml-2 mt-[-1px]" />
        </>
    )
    const Button = (): React.ReactElement => (loading ? BtnLoad : BtnIcon)

    return (
        <button
            className={`btn-transparent py-[12px] px-8 border-orange-400 text-orange-400 flex justify-center items-center text-lg h-[56px] w-[166px] ${className}`}
            onClick={onClick}
            id={id}
            data-cy="btn-signIn2"
            data-testid="btn-signIn02"
        >
            <Button />
        </button>
    )
}

export { SignInButton01, SignInButton02 }
