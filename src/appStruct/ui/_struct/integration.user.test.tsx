import { render, screen } from '@testing-library/react'
import { Structure } from '.'


jest.mock('../_auth/useAuth', () => ({
  useAuth: () => ({
    user: { email: 'test@example.com' },
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

    const Struct = screen.queryByTestId('PrivateStruct')
    const Footer = screen.getByTestId('Footer')
    const Header = screen.queryByTestId('HeaderPrivate')
    const settingMenu = screen.queryByTestId('SettingMenu')
    const NavMenu = screen.queryByTestId('NavMenu')
    const BtnSignOut = screen.queryByTestId('BtnSignOut')

    expect(Struct).not.toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
    expect(Header).not.toBeInTheDocument()
    expect(settingMenu).not.toBeInTheDocument()
    expect(NavMenu).not.toBeInTheDocument()
    expect(BtnSignOut).not.toBeInTheDocument()
    expect(screen.queryByTestId('PublicStruct')).toBeInTheDocument()
  })
})
