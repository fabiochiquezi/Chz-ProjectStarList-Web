import { routesToArray } from '../../../../helpers/front/path'
import React, { FC } from 'react'
import Router from 'next/router'

export interface IRoute {
  name: string
  path?: string
  getPath?: (userName: string) => string
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

const isUserRoute = (routeName: string): boolean => routeName === 'user'

const getLink = ({ name, getPath, path }: IRoute) =>
  (userName: string) => (isUserRoute(name) && getPath ? getPath(userName) : path)

const NavMenu: INavMenu = ({ currentRoute, routes, userName = '', onChangePage }) => (
  <nav data-testid="NavMenu">
    <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
      {routesToArray<IRoute[]>(routes)
        .filter(route => route.menuSystem)
        .map((route: IRoute, index: number) => (
          <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none" key={index}>
            <a
              data-testid="BtnLink"
              onClick={() => onChangePage(async () => await Router.push(getLink(route)(userName) ?? 'home'))}
              className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${route.route === currentRoute && 'text-orange-400'}`}
            >
              {route.title}
            </a>
          </li>
        )
        )}
    </ul>
  </nav >
)


export { NavMenu }
