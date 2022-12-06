import React, { FC, ReactElement } from 'react'

interface IRightMenuProps {
  userName: string
  BtnSignOut: ReactElement
}

const RightMenu: FC<IRightMenuProps> = ({ userName, BtnSignOut }) => {
  return (
    <ul
      id="menu-right"
      data-testid="SecondaryMenu"
      className="flex flex-col mt-16 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-[0px] lg:w-auto lg:mx-0 lg:flex-row text-center"
    >
      <div
        className="flex mt-8 lg:mt-0 items-center"
        data-cy="rightMenu-structure"
      >
        <li className="pt-1 lg:p-0 lg:m-0 lg:ml-8 mb-2 mt-4 text-sm">
          <span>{userName ? `${userName.substring(0, 9)}...` : ''}</span>
        </li>
        <li className="mx-4 hidden lg:inline-block pt-1 lg:pt-0 lg:-mt-[2px]">
          |
        </li>
        <li className="text-sm ml-4 lg:m-0">
          {BtnSignOut}
        </li>
      </div>
    </ul>
  )
}

export default RightMenu
