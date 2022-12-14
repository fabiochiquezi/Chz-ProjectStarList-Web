import React, { FC } from 'react'
import { IPresentComponent } from '../../types'

export type IAddThumb = FC<{
  onClick: () => void
} & IPresentComponent>

const AddThumb: IAddThumb = ({ onClick, className }) => (
  <div
    onClick={onClick}
    data-testid="AddThumb"
    className={`text-center order-2 border-2 border-gray-800 w-[170px] h-[220px] rounded-lg flex justify-center items-center text-xl text-gray-500 cursor-pointer anim-button border-dashed mb-14 xl:w-[153px] xl:h-[198px]xl:mt-2 2xl:w-[170px] 2xl:h-[220px] 2xl:mt-0 ${className}`}
  >
    Add + <br />
    manually
  </div>
)

export { AddThumb }
