import { HeaderPublic, Footer, HeaderPrivate, PrivateStruct, PublicStruct } from './compositions'
import { BtnSignIn, SettingMenu, BtnSignOut, NavMenu } from './components'
import { isRouteMixed, isRoutePrivate } from '../share/settings'
import { LoadContext, useAuth } from '../share/contexts'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

interface IStructureProps {
  children: ReactNode
}

const Structure: FC<IStructureProps> = ({ children }) => {
  const { user, signIn, signOut } = useAuth()
  const { route } = useRouter()
  const userName = user?.userName
  const routeMixed = isRouteMixed(route)
  const routePrivate = isRoutePrivate(route)

  const btnSignIn = <BtnSignIn onClick={signIn} />
  const btnSignOut = <BtnSignOut onClick={signOut} />
  const settingMenu = <SettingMenu userName={userName} BtnSignOut={btnSignOut} />
  const navMenu = <NavMenu userName={userName} route={route} />

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
      <LoadContext>
        {children}
      </LoadContext>
    </PrivateStruct>
  )

  if (routeMixed && user) return privateStruct
  if (routeMixed && !user) return publicStruct
  if (routePrivate) return privateStruct
  return publicStruct
}

export { Structure }
