import { IBtnSignIn, INavMenu, ISettingMenu } from './../_share/components/'
import { FC, ReactElement, ReactNode } from 'react'

export type IFooter = FC

// Private
export type IHeaderPrivate = FC<{
  NavMenu: ReactElement<INavMenu>
  SettingMenu: ReactElement<ISettingMenu>
}>

export type IPrivateStruct = FC<{
  children: ReactNode
  Header: ReactElement<IHeaderPrivate>
  Footer: ReactElement<IFooter>
}>

// Public
export type IHeaderPublic = FC<{
  BtnSignIn: ReactElement<IBtnSignIn>
}>

export type IPublicStruct = FC<{
  children: ReactNode
  Header: ReactElement<IHeaderPublic>
  Footer: ReactElement<IFooter>
  isRouteMixed: boolean
}>
