import { HeaderPrivate, PrivateStruct, HeaderPublic, PublicStruct, Footer, BtnSignIn2, BtnSignOut } from './ui'
import { LoadingPage, SettingMenu, NavMenu } from '../../../libs/frontend/components'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { routes } from '../../../src/pages/routes'
import { useAuth } from '../_auth/useAuth'
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
  const navMenu = <NavMenu routes={routes} userName={userName} currentRoute={route} onChangePage={loadPage} />

  const footer = <Footer />
  const headerPublic = <HeaderPublic BtnSignIn={btnSignIn} />
  const headerPrivate = <HeaderPrivate SettingMenu={settingMenu} NavMenu={navMenu} />

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
