import Link from 'next/link'
import React, { FC } from 'react'
import { paths } from '../../../share/settings'

interface INavMenuProps {
  route: string
  userName?: string
}

const NavMenu: FC<INavMenuProps> = ({ route, userName = '' }) => (
  <nav data-cy="NavMenu" data-testid="NavMenu">
    <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
      <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
        <Link href={paths.newMovies}>
          <a
            data-testid="BtnLink"
            className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${route === '/new/[type]' && 'text-orange-400'
              }`}
          >
            NEW
          </a>
        </Link>
      </li>
      <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
        <Link href={`/${userName}`} >
          <a
            data-testid="BtnLink"
            className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${route === '/[user]' && 'text-orange-400'
              }`}
          >
            MY LIST
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)


export { NavMenu }