import React from 'react'
import { useAuth } from '../../../../Auth/types'
import SpinIcon from '../../../../../general/assets/icons/SpinIcon'
import GoogleIcon from '../../../../../general/assets/icons/GoogleIcon'

interface props {
    className?: string
    onClick: () => any
    id?: string
}

const BtnSignIn: React.FC<props> = ({ className = '', onClick, id = '' }) => {
    const { loading } = useAuth()

    const BtnLoad = (
        <div className="mt-[7px]">
            <SpinIcon />
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

export { BtnSignIn }
