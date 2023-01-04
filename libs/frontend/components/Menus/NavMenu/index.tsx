import { routesToArray } from 'libs/helpers/front/path'
import Router from 'next/router'
import React, { FC } from 'react'

interface IRoute {
  path: (userName: string) => string | string
  route: string,
  state: string,
  title: string,
  menuSystem: boolean
}


export type INavMenu = FC<{
  currentRoute: string
  userName?: string
  routes: Record<any, any>
  onChangePage: (callBack: any) => void
}>

const NavMenu: INavMenu = ({ currentRoute, routes, userName = '', onChangePage }) => (
  <nav data-testid="NavMenu">
    <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
      {routesToArray<any[]>(routes)
        .filter(route => route.menuSystem)
        .map((route: IRoute, index: number) => {
          let path
          const pathFn = typeof route.path === 'function'
          if (pathFn) path = route.path(userName)

          return (
            <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none" key={index}>
              <a
                onClick={() => onChangePage(async () => await Router.push(route.path))}
                data-testid="BtnLink"
                className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${route.route === currentRoute}' && 'text-orange-400'
                }`}
              >
                {route.title}
              </a>
            </li>
          )
        })}

      {/* <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
        <a
          onClick={() => onChangePage(async () => await Router.push(routes.newMovies.path))}
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
      </li> */}
    </ul>
  </nav >
)


export { NavMenu }
