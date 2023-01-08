import { CloseIcon } from '../../../assets'
import { HamburgerIcon } from './icons'
import { IBtnProps } from '../type'
import { FC } from 'react'

export type IBtnHamburger = FC<IBtnProps & {
  opened: boolean
}>

const BtnHamburger: IBtnHamburger = ({ opened, onClick, className }) => (
  <div
    onClick={onClick}
    data-testid="BtnHamburger"
    className={`relaive z-30 cursor-pointer fixed bottom-4 right-8 bg-gray-800 rounded-full w-12 h-12 -mr-4 mt-1 anim-button flex justify-center items-center md:bottom-5 md:right-7 md:w-16 md:h-16 lg:hidden ${className}`}
  >
    <div className="scale-90 md:scale-100">{opened ? CloseBtn : HambBtn}</div>
  </div>
)

const CloseBtn = (
  <div className="mr-0" data-testid="CloseBtn">
    <CloseIcon />
  </div>
)

const HambBtn = (
  <div data-testid="HambBtn">
    <HamburgerIcon width={24} height={18} />
  </div>
)

export { BtnHamburger }
