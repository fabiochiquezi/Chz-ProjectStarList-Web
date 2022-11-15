import { FC } from 'react'
import { GoogleIcon, SpinIcon } from '../../../../share'

export interface BtnSignInType {
    className?: string
    onClick: () => any
    loading: boolean
    id?: string
}

const BtnSignIn: FC<BtnSignInType> = ({
    className = '',
    id = '',
    onClick,
    loading
}) => (
    <button
        id={id}
        onClick={onClick}
        data-cy="btn-signIn2"
        data-testid="btn-signIn02"
        className={`btn-transparent py-[12px] px-8 border-orange-400 text-orange-400
            flex justify-center items-center text-lg h-[56px] w-[166px] ${className}`}
    >
        {loading ? BtnLoad : BtnIcon}
    </button>
)

const BtnLoad = (
    <div className="mt-3">
        <SpinIcon width={20} height={20} color="#FB923C" />
    </div>
)

const BtnIcon = (
    <>
        <span>Sign In</span>
        <GoogleIcon className="ml-2 mt-[-1px]" />
    </>
)

export { BtnSignIn }
