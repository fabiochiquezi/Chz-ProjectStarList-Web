import { SpinIcon } from '../../../assets'
import create from 'zustand'
import { FC, useCallback } from 'react'

export interface IUsePopSave {
  mode: number
  open: (mode?: number) => void
  close: () => void
}

export const usePopSave = create<IUsePopSave>()(set => ({
  mode: 0,
  open: mode => set({ mode: mode ?? 1 }),
  close: () => set({ mode: 0 })
}))

const PopSave: FC = () => {
  const { mode } = usePopSave()

  const Component = useCallback(() => {
    return (
      <div
        className="fixed right-10 bottom-[40px] z-[100] rounded-lg
        w-[198px] h-[52px] flex items-center justify-center bg-black"
      >
        <SpinIcon
          width={16}
          height={16}
          color="#FB923C"
          className="top-[2px] left-[-4px]"
        />
        <p className="text-white text-sm relative left-[-4px] top-[1px]">
          <span>Saving...Don&lsquo;t close!</span>
        </p>
      </div>
    )
  }, [mode])

  if (!mode) return null
  return <Component />
}

export { PopSave }
