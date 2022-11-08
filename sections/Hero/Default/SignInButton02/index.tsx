import GoogleIcon from 'general/assets/icons/GoogleIcon'
import SpinIcon from 'general/assets/icons/SpinIcon'
import { FC, ReactElement } from 'react'
import { useAuth } from 'structure/Auth/types'

interface props {
    className?: string
    onClick: () => any
    id?: string
}

const SignInButton02: FC<props> = ({ className = '', onClick, id = '' }) => {
    const { loading } = useAuth()
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
    const Button = (): ReactElement => (loading ? BtnLoad : BtnIcon)

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

export { SignInButton02 }
