import { BtnOutline } from '../../../../libs/frontend/components/Buttons/BtnOutline'
import { IPresentComponent } from '../../../../libs/frontend/components/types'
import { IBtnProps } from '../../../../libs/frontend/components/Buttons/type'
import { SpinIcon } from '../../../../libs/frontend/assets'
import { FC, ReactEventHandler, useState } from 'react'
import { GoogleIcon } from './GoogleIcon'

export type IBtnSignIn = FC<IBtnProps & IPresentComponent & {
  onClick: (e?: ReactEventHandler) => unknown
}>

const BtnSignIn: IBtnSignIn = ({ className = '', onClick }) => {
  const [loading, setLoading] = useState(false)

  async function handleOnClick(): Promise<void> {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <BtnOutline
      onClick={handleOnClick}
      data-testid="BtnSignIn"
      disabled={!!loading}
      className={`border-orange-400 text-orange-400 text-lg h-[56px] w-[166px] ${className}`}
    >
      {loading ? BtnLoad : BtnIcon}
    </BtnOutline>
  )
}

const BtnLoad = (
  <div className="mt-3" data-testid="BtnLoad">
    <SpinIcon width={20} height={20} color="#FB923C" />
  </div>
)

const BtnIcon = (
  <>
    <span data-testid="BtnIcon">Sign In</span>
    <GoogleIcon className="ml-2 mt-[-1px]" />
  </>
)

export { BtnSignIn }
