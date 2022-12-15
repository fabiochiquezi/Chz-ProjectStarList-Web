import { GoogleIcon } from './GoogleIcon'
import React, { FC, useState } from 'react'
import { SpinIcon } from '../../../../../_share/assets'

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
      disabled={!!loading}
      data-cy="BtnSignIn"
      data-testid="BtnSignIn"
      onClick={handleOnClick}
      className={`btn-solid bg-blue-800 py-[10px] pt-[10px] px-4 text-md flex justify-center items-center ${className} h-[44px] w-[112px]`}
    >
      {loading ? BtnLoad : BtnIcon}
    </button>
  )
}

const BtnLoad = (
  <div className="mt-[7px]" data-testid="BtnLoad">
    <SpinIcon />
  </div>
)

const BtnIcon = (
  <>
    <span className="md:text-sm lg:text-md" data-testid="BtnIcon">
      Sign In
    </span>
    <GoogleIcon width={20} height={20} className="ml-1 mt-[-3px]" />
  </>
)

export { BtnSignIn }
