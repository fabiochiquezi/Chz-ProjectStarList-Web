import { routesToArray } from '../../../fns'
import React, { FC } from 'react'
import Router from 'next/router'

export interface IRoute {
  name: string
  path?: string
  getPath?: (userName: string) => string
  route: string,
  state: string,
  title: string,
  menuSystem: boolean,
  icon: null | string,
  iconActive: null | string
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

export const NavMenu2: INavMenu = ({ currentRoute, routes, userName = '', onChangePage }) => (
  <nav data-testid="NavMenu" className='fixed bottom-0 left-0 bg-skin-secondary-v2 w-full z-[100000] lg:static lg:w-[300px] lg:bg-transparent '>
    <ul className="
    flex justify-center items-center text-center text-md
    lg:max-w-full mx-0
    lg:text-2xl lg:mt-[2px]
    ">
      {routesToArray<IRoute[]>(routes)
        .filter(route => route.menuSystem)
        .map((route: IRoute, index: number) => (
          <li className="lg:w-auto border-b-2 border-transparent lg:border-none w-[50%]" key={index}>
            <a
              data-testid="BtnLink"
              onClick={() => onChangePage(async () => await Router.push(getLink(route)(userName) ?? 'home'))}
              className={`lg:text-[14px] lg:mr-6 w-full lg:w-auto relative top-[0px] py-3 inline-block lg:py-0 anim-button flex justify-center ${route.route === currentRoute && 'text-skin-primary-v2'}`}
            >
              <span className='hidden lg:block'>{route.title}</span>
              {(route.icon && route.iconActive) && <img className='w-[40px] h-[40px] lg:hidden' src={route.route === currentRoute ? route.iconActive : route.icon} alt="" />}
            </a>
          </li>
        )
        )}
    </ul>
  </nav >
)

