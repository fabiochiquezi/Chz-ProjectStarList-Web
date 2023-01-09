import React, { FC } from 'react'
import { IBtnProps } from '../../../../../../libs/frontend/components/Buttons/type'

export type IBtnSignOut = FC<IBtnProps>

const BtnSignOut: IBtnSignOut = ({ onClick }) => (
  <button
    data-testid="BtnSignOut"
    onClick={onClick}
    className="border-white lg:border-none border-2 rounded px-4 py-2 mt-2 lg:p-0 lg:mt-0 anim-button cursor-pointer"
  >
    Sign Out
  </button>
)

export { BtnSignOut }
