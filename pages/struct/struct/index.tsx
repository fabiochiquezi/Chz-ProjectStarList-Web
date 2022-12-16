import { LoadingHOC } from 'pages/_share/components/Loadings/LoadingHOC'
import { isRouteMixed, isRoutePrivate } from '../../routes'
import { useLoadPage } from './hooks/usePageLoad'
import { LoadingPage } from 'pages/_share/components'
import { useAuth } from '../../_share/contexts'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import {
  HeaderPrivate,
  PrivateStruct,
  HeaderPublic,
  PublicStruct,
  SettingMenu,
  BtnSignOut,
  BtnSignIn,
  Footer,
  NavMenu
} from './ui'

interface IStructureProps {
  children: ReactNode
}

const Structure: FC<IStructureProps> = ({ children }) => {
  const { user, signIn, signOut } = useAuth()
  const { route } = useRouter()
  const userName = user?.userName
  const routeMixed = isRouteMixed(route)
  const routePrivate = isRoutePrivate(route)
  const { loading, loadPage } = useLoadPage()

  const btnSignIn = <BtnSignIn onClick={signIn} />
  const btnSignOut = <BtnSignOut onClick={signOut} />
  const settingMenu = <SettingMenu userName={userName} BtnSignOut={btnSignOut} />
  const navMenu = <NavMenu userName={userName} route={route} onChangePage={loadPage} />

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
      <LoadingHOC data={loading} loading={<LoadingPage height="h-[550px]" />}>
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
