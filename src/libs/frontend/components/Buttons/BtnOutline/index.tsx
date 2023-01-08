import React, { FC, ReactNode } from 'react'
import { IBtnProps } from '../type'

export type IBtnOutline = FC<IBtnProps & {
  children: ReactNode
}>

const BtnOutline: IBtnOutline = ({ className = '', onClick, disabled, children }) => (
  <button
    onClick={onClick}
    data-testid="BtnOutline"
    disabled={disabled}
    className={`uppercase text-center border-2 rounded-md anim-button inline-block py-[12px] px-8  flex justify-center items-center ${className}`}
  >
    {children}
  </button>
)


export { BtnOutline }
