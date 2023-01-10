import Link from 'next/link'
import { FC, ReactElement } from 'react'
import { Logo } from '../../../../../appShare/assets/Logo'
import { routes } from '../../../../../appShare/settings/routes'

export type IHeaderPrivate = FC<{
  NavMenu: ReactElement
  SettingMenu: ReactElement
}>

export const HeaderPrivate2: IHeaderPrivate = ({ NavMenu, SettingMenu }) => {
  return (
    <header
      data-testid="HeaderPrivate"
      className="flex justify-between lg:justify-between items-center container mx-auto px-4 py-8 lg:pt-8 mb-8 lg:mb-0 h-[43px] absolute sm:left-2/4 sm:-ml-[320px] md:-ml-[384px] lg:-ml-[512px] xl:-ml-[640px] 2xl:-ml-[768px] bg-transparent"
    >
      <Link href={routes.newMovies.path}>
        <a className="logo z-10 hover:opacity-80">
          <Logo />
        </a>
      </Link>
      <div className={'flex z-20 md:w-auto lg:w-full lg:justify-between'}>
        {NavMenu}
        {SettingMenu}
      </div>
    </header >
  )
}
