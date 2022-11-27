import { FC } from 'react'
import { CloseIcon } from '../../../assets'

export interface IAlertProps {
  message: string
  mode?: number
  closeAlert: () => void
}

const Alert: FC<IAlertProps> = ({ message = '', mode = 0, closeAlert }) => {
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

  return (
    <div
      className={`alert-anim fixed left-[0px] ml-[5%] top-10 w-[90%] mx-auto text-left rounded py-4 px-4 z-50 flex justify-between items-center
                sm:max-w-[420px] sm:left-[50%] sm:ml-[-210px]
                ${modeClass}`}
      data-testid="Alert"
    >
      <p className="text-lg text-white mr-2 ml-2">{message}</p>

      <div
        className="relative left-1 anim-button"
        onClick={closeAlert}
        data-testid="CloseIcon"
      >
        <CloseIcon width={22} height={16} />
      </div>
    </div>
  )
}

export { Alert }
