import { FC, ReactEventHandler, useState } from 'react'
import { IPresentComponent } from '../../types'
import { SpinIcon } from '../../../assets'
import { GoogleIcon } from './GoogleIcon'
import { IBtnProps } from '../type'

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
    <button
      onClick={handleOnClick}
      data-testid="BtnSignIn"
      disabled={!!loading}
      className={`btn-transparent py-[12px] px-8 border-orange-400 text-orange-400 flex justify-center items-center text-lg h-[56px] w-[166px] ${className}`}
    >
      {loading ? BtnLoad : BtnIcon}
    </button>
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
