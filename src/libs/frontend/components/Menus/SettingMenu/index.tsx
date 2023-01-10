import React, { FC, ReactElement } from 'react'

export type ISettingMenu = FC<{
  userName?: string
  BtnSignOut: ReactElement
}>

const SettingMenu: ISettingMenu = ({ userName = '', BtnSignOut }) => (
  <ul
    data-testid="SettingMenu"
    className="flex flex-col justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-[0px] lg:w-auto lg:mx-0 lg:flex-row text-center"
  >
    <div className="flex items-center">
      <li className="pt-1 lg:p-0 lg:m-0 lg:ml-8 mb-2 mt-4 text-sm">
        <span>{userName.length > 9 ? `${userName.substring(0, 9)}...` : userName}</span>
      </li>
      <li className="mx-4 hidden lg:inline-block pt-1 lg:pt-0 lg:-mt-[2px]">
        |
      </li>
      <li className="text-sm ml-4 lg:m-0 w-[90px]">
        {BtnSignOut}
      </li>
    </div>
  </ul>
)


export { SettingMenu }
