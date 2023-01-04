import { HeaderPrivate, PrivateStruct, HeaderPublic, PublicStruct, Footer, BtnSignIn2, BtnSignOut } from './ui'
import { LoadingPage, SettingMenu, NavMenu } from '../../../libs/frontend/components'
import { isRouteMixed, isRoutePrivate } from '../../../libs/helpers/front/route'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { routes } from '../../../src/pages/routes'
import { useLoadPage } from './hooks/usePageLoad'
import { useAuth } from '../_auth/useAuth'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

const Structure: FC<{ children: ReactNode }> = ({ children }) => {
  const { user, signIn, signOut } = useAuth()
  const { route } = useRouter()
  const userName = user?.userName
  const routeMixed = isRouteMixed(routes)(route)
  const routePrivate = isRoutePrivate(routes)(route)
  const { loading, loadPage } = useLoadPage()

  const btnSignIn = <BtnSignIn2 onClick={signIn} />
  const btnSignOut = <BtnSignOut onClick={signOut} />
  const settingMenu = <SettingMenu userName={userName} BtnSignOut={btnSignOut} />
  const navMenu = <NavMenu routes={routes} userName={userName} currentRoute={route} onChangePage={loadPage} />

  const footer = <Footer />
  const headerPublic = <HeaderPublic BtnSignIn={btnSignIn} />
  const headerPrivate = <HeaderPrivate SettingMenu={settingMenu} NavMenu={navMenu} />

  const publicStruct = (
    <PublicStruct Footer={footer} Header={headerPublic} isRouteMixed={routeMixed}>
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

  if (routeMixed && user) return privateStruct
  if (routeMixed && !user) return publicStruct
  if (routePrivate) return privateStruct
  return publicStruct
}

export { Structure }
