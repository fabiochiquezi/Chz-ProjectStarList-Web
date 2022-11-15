import React, { FC } from 'react'
import { SpinIcon, GoogleIcon } from '../../../../../assets'

export interface BtnSignInType {
    className?: string
    onClick: () => any
    loading: boolean
}

const BtnSignIn: FC<BtnSignInType> = ({ className = '', loading, onClick }) => {
    return (
        <a
            onClick={onClick}
            data-cy="btn-signIn1"
            className={`btn-solid bg-blue-800 py-[10px] pt-[10px] px-4 text-md
                flex justify-center items-center ${className} h-[44px] w-[112px]`}
        >
            {loading ? BtnLoad : BtnIcon}
        </a>
    )
}

const BtnLoad = (
    <div className="mt-[7px]" data-testid="btn-load">
        <SpinIcon />
    </div>
)

const BtnIcon = (
    <>
        <span className="md:text-sm lg:text-md" data-testid="btn-icon">
            Sign In
        </span>
        <GoogleIcon width={20} height={20} className="ml-1 mt-[-3px]" />
    </>
)

export { BtnSignIn }
