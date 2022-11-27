import { CloseIcon, HamburgerIcon } from '../../../assets'
import { FC } from 'react'

export interface IBtnHamburgerProps {
  opened: boolean
  onClick: () => void
}

const BtnHamburger: FC<IBtnHamburgerProps> = ({ opened, onClick }) => (
  <div
    onClick={onClick}
    data-cy="btn-mobile"
    data-testid="BtnHamburger"
    className="relaive z-30 cursor-pointer fixed bottom-4 right-8 bg-gray-800 rounded-full w-12 h-12 -mr-4 mt-1 anim-button flex justify-center items-center md:bottom-5 md:right-7 md:w-16 md:h-16 lg:hidden"
  >
    <div className="scale-90 md:scale-100">{opened ? CloseBtn : HambBtn}</div>
  </div>
)

const CloseBtn = (
  <div className="mr-0" data-testid="btn-close">
    <CloseIcon />
  </div>
)

const HambBtn = (
  <div data-testid="btn-icon">
    <HamburgerIcon width={24} height={18} />
  </div>
)

export { BtnHamburger }
