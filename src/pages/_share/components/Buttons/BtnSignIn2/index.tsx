import { IBtnProps } from '../type'
import { GoogleIcon } from './GoogleIcon'
import { SpinIcon } from '../../../../../../libs/frontend/assets'
import { IPresentComponent } from 'pages/types'
import React, { FC, ReactEventHandler, useState } from 'react'

export type IBtnSignIn2 = FC<IBtnProps & IPresentComponent & {
  onClick: (e?: ReactEventHandler) => unknown
}>

const BtnSignIn2: IBtnSignIn2 = ({ className = '', onClick }) => {
  const [loading, setLoading] = useState(false)

  async function handleOnClick(): Promise<void> {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <button
      disabled={!!loading}
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

export { BtnSignIn2 }
