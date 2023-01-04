import { render, screen } from '@testing-library/react'
import { Structure } from '.'


jest.mock('../_auth/useAuth', () => ({
  useAuth: () => ({
    user: null,
    signIn: () => 'signIn',
    signOut: () => 'signOut'
  })
}))

describe('Structure with user', () => {
  const props = {
    route: '/mixed/user',
    isRouteMixed: false,
    isRoutePrivate: false,
    loading: false,
    loadPage: jest.fn()
  }

  it('mixed route', () => {
    render(<Structure {...props} isRouteMixed={true}>test</Structure>)

    const Struct = screen.getByTestId('PublicStruct')
    const Footer = screen.getByTestId('Footer')
    const HeaderPublic = screen.getByTestId('HeaderPublic')
    const BtnSignIn = screen.getByTestId('BtnSignIn')

    expect(Struct).toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
    expect(HeaderPublic).toBeInTheDocument()
    expect(BtnSignIn).toBeInTheDocument()
    expect(screen.queryByTestId('PrivateStruct')).not.toBeInTheDocument()
  })

  it('private route', () => {
    render(<Structure {...props} isRoutePrivate={true}>test</Structure>)

    const Struct = screen.getByTestId('PrivateStruct')
    const Footer = screen.getByTestId('Footer')
    const Header = screen.getByTestId('HeaderPrivate')
    const settingMenu = screen.getByTestId('SettingMenu')
    const NavMenu = screen.getByTestId('NavMenu')
    const BtnSignOut = screen.getByTestId('BtnSignOut')

    expect(Struct).toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
    expect(Header).toBeInTheDocument()
    expect(settingMenu).toBeInTheDocument()
    expect(NavMenu).toBeInTheDocument()
    expect(BtnSignOut).toBeInTheDocument()
    expect(screen.queryByTestId('PublicStruct')).not.toBeInTheDocument()
  })

  it('public route', () => {
    render(<Structure {...props}>test</Structure>)
    const Struct = screen.getByTestId('PublicStruct')
    const Footer = screen.getByTestId('Footer')
    const HeaderPublic = screen.getByTestId('HeaderPublic')
    const BtnSignIn = screen.getByTestId('BtnSignIn')

    expect(Struct).toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
    expect(HeaderPublic).toBeInTheDocument()
    expect(BtnSignIn).toBeInTheDocument()
    expect(screen.queryByTestId('PrivateStruct')).not.toBeInTheDocument()
  })
})
