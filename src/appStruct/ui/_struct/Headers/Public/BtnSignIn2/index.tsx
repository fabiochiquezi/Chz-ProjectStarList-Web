import { BtnSolid, IBtnProps } from '../../../../../../libs/frontend/components'
import { SpinIcon } from '../../../../../../libs/frontend/assets'
import React, { FC, ReactEventHandler, useState } from 'react'
import { GoogleIcon } from './GoogleIcon'

export type IBtnSignIn2 = FC<IBtnProps & {
  onClick: (e?: ReactEventHandler) => unknown
  className?: string
}>

const BtnSignIn2: IBtnSignIn2 = ({ className = '', onClick }) => {
  const [loading, setLoading] = useState(false)

  async function handleOnClick(): Promise<void> {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <div data-testid="BtnSignIn">
      <BtnSolid
        disabled={!!loading}
        onClick={handleOnClick}
        className={`bg-skin-secondary-v2 h-[44px] w-[120px] ${className}`}
      >
        {loading ? BtnLoad : BtnIcon}
      </BtnSolid>
    </div>
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
