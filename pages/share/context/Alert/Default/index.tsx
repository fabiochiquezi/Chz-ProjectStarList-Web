import { FC, useCallback } from 'react'
import { CloseIcon } from '../../../assets'
import create from 'zustand'

export interface IUseAlert {
  message: string
  mode: 0 | 1 | 2 | 3
  success: (message: string) => void
  error: (message: string) => void
  close: () => void
}

export const useAlert = create<IUseAlert>()(set => ({
  message: '',
  mode: 0,
  success: message => set({ message, mode: 1 }),
  error: message => set({ message, mode: 2 }),
  close: () => set({ message: '', mode: 0 })
}))

export const Alert: FC = () => {
  const { message, mode, close } = useAlert()
  let modeClass = ''

  switch (mode) {
    case 1:
      modeClass = 'bg-green-700'
      break
    case 2:
      modeClass = 'bg-red-700'
      break
    default:
      modeClass = 'bg-gray-700'
      break
  }

  const Component = useCallback(() => {
    return (
      <div
        className={`alert-anim fixed left-[0px] ml-[5%] top-10 w-[90%] mx-auto text-left rounded py-4 px-4 z-50 flex justify-between items-center sm:max-w-[420px] sm:left-[50%] sm:ml-[-210px] ${modeClass}`}
        data-testid="Alert"
      >
        <p className="text-lg text-white mr-2 ml-2">{message}</p>

        <div
          className="relative left-1 anim-button"
          onClick={close}
          data-testid="CloseIcon"
        >
          <CloseIcon width={22} height={16} />
        </div>
      </div>
    )
  }, [mode])

  if (!message) return null
  return <Component />
}
