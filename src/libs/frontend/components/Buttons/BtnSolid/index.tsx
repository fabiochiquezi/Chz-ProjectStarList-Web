import { FC, ReactNode } from 'react'
import { IBtnProps } from '../type'

export type IBtnSolid = FC<IBtnProps & {
  children: ReactNode
}>

const BtnSolid: IBtnSolid = ({ className = '', onClick, disabled, children }) => (
  <button
    disabled={disabled}
    data-testid="ButtonSolid"
    onClick={onClick}
    className={`uppercase text-center text-white lg:text-sm rounded-md hover:opacity-50 anim-button inline-block tracking-wide py-[10px] px-4 text-md flex justify-center items-center ${className}`}
  >
    {children}
  </button>
)


export { BtnSolid }
