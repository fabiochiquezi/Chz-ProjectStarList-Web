import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '.'

describe('PrivateStruct', () => {
  const useRouter: any = () => ({
    route: '/',
    push: jest.fn((s: string) => s)
  })
  const useAuth: any = () => ({
    user: { userName: 'userName' },
    signOut: jest.fn()
  })
  const HeaderEl = Header(useRouter)(useAuth)

  it('elements', () => {
    render(<HeaderEl />)
    const header = screen.getByTestId('HeaderPrivate')
    const linkNew = screen.getByText('NEW')
    const linkMyList = screen.getByText('MY LIST')
    const btnHamburger = screen.getByTestId('BtnHamburger')
    const logo = screen.getByTestId('Logo')
    const userName = screen.getByText('userName...')
    const btnSignOut = screen.getByTestId('BtnSignOut')
    expect(header).toBeInTheDocument()
    expect(linkNew).toBeInTheDocument()
    expect(linkMyList).toBeInTheDocument()
    expect(btnHamburger).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(userName).toBeInTheDocument()
    expect(btnSignOut).toBeInTheDocument()
  })

  it('logo', () => {
    render(<HeaderEl />)
    const logo = screen.getByTestId('Logo')
    const href = logo.parentElement?.getAttribute('href')
    expect(href).toBe('/new/movies')
  })

  it('myList route', () => {
    render(<HeaderEl />)
    const linkMyList = screen.getByText('MY LIST')
    const href = linkMyList.getAttribute('href')
    expect(href).toBe(`/${useAuth().user.userName}`)
  })
})
