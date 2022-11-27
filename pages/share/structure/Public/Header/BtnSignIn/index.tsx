import React, { FC, useState } from 'react'
import { SpinIcon, GoogleIcon } from '../../../../assets'

export interface IBtnSignInProps {
  className?: string
  onClick: () => any
}

const BtnSignIn: FC<IBtnSignInProps> = ({ className = '', onClick }) => {
  const [loading, setLoading] = useState(false)

  async function handleOnClick(): Promise<void> {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <button
      onClick={handleOnClick}
      data-cy="btn-signIn1"
      data-testid="BtnSignIn"
      disabled={!!loading}
      className={`btn-solid bg-blue-800 py-[10px] pt-[10px] px-4 text-md
                flex justify-center items-center ${className} h-[44px] w-[112px]`}
    >
      {loading ? BtnLoad : BtnIcon}
    </button>
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
