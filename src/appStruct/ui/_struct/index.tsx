import { LoadingPage, SettingMenu } from '../../../libs/frontend/components'
import { NavMenu2 } from 'src/libs/frontend/components/Menus/NavMenu2'
import { useAuth } from '../../../appShare/contexts/useAuth'
import { routes } from '../../../appShare/settings/routes'
import { BtnSignOut } from './Headers/Private/BtnSignOut'
import { BtnSignIn2 } from './Headers/Public/BtnSignIn2'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { PrivateStruct } from './Wrappers/Private'
import { HeaderPrivate2 } from './Headers/Private2'
import { PublicStruct } from './Wrappers/Public'
import { HeaderPublic } from './Headers/Public'
import { Footer } from './Footers/Default'
import { FC, ReactNode } from 'react'

type IStructure = FC<{
  children: ReactNode
  route: string
  isRouteMixed: boolean
  isRoutePrivate: boolean
  loading: boolean;
  loadPage: (url: string) => void
}>

const Structure: IStructure = (props) => {
  const { children, route, isRouteMixed, isRoutePrivate, loading, loadPage } = props
  const { user, signIn, signOut } = useAuth()
  const userName = user?.userName

  const btnSignIn = <BtnSignIn2 onClick={signIn} />
  const btnSignOut = <BtnSignOut onClick={signOut} />
  const settingMenu = <SettingMenu userName={userName} BtnSignOut={btnSignOut} />
  const navMenu = <NavMenu2 routes={routes} userName={userName} currentRoute={route} onChangePage={loadPage} />

  const footer = <Footer />
  const headerPublic = <HeaderPublic BtnSignIn={btnSignIn} />
  const headerPrivate = <HeaderPrivate2 SettingMenu={settingMenu} NavMenu={navMenu} />

  const publicStruct = (
    <PublicStruct Footer={footer} Header={headerPublic} isRouteMixed={isRouteMixed}>
      {children}
    </PublicStruct>
  )

  const privateStruct = (
    <PrivateStruct Footer={<Footer />} Header={headerPrivate}>
      <LoadingHOC condition={loading} loading={<LoadingPage height="h-[550px]" />}>
        {children}
      </LoadingHOC>
    </PrivateStruct>
  )

  if (isRouteMixed && user) return privateStruct
  if (isRouteMixed && !user) return publicStruct
  if (isRoutePrivate) return privateStruct
  return publicStruct
}

export { Structure }
