import { FC, useState } from 'react'
import { GoogleIcon, SpinIcon } from '../../../../share/assets'

export interface BtnSignInType {
  className?: string
  onClick: () => Promise<void>
  id?: string
}

const BtnSignIn: FC<BtnSignInType> = ({ className = '', id = '', onClick }) => {
  const [loading, setLoading] = useState(false)

  async function handleOnClick(): Promise<void> {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <button
      id={id}
      onClick={handleOnClick}
      data-cy="btn-signIn2"
      data-testid="BtnSignIn"
      disabled={!!loading}
      className={`btn-transparent py-[12px] px-8 border-orange-400 text-orange-400
            flex justify-center items-center text-lg h-[56px] w-[166px] ${className}`}
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
