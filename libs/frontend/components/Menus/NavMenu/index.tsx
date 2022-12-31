import Router from 'next/router'
import React, { FC } from 'react'
import { paths } from '../../../../../src/pages/routes'

export type INavMenu = FC<{
  route: string
  userName?: string
  onChangePage: (callBack: any) => void
}>

const NavMenu: INavMenu = ({ route, userName = '', onChangePage }) => (
  <nav data-testid="NavMenu">
    <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
      <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
        <a
          onClick={() => onChangePage(async () => await Router.push(paths.newMovies))}
          data-testid="BtnLink"
          className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${route === '/new/[type]' && 'text-orange-400'
            }`}
        >
          NEW
        </a>
      </li>
      <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
        <a
          onClick={() => onChangePage(async () => await Router.push(`/${userName}`))}
          data-testid="BtnLink"
          className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${route === '/[user]' && 'text-orange-400'
            }`}
        >
          MY LIST
        </a>
      </li>
    </ul>
  </nav>
)


export { NavMenu }
