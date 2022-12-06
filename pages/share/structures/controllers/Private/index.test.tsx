import { render, screen } from '@testing-library/react'
import { PrivateStruct } from '.'

describe('PrivateStruct', () => {
  const props: any = {
    router: { route: '/', push: jest.fn((s: string) => s) },
    user: { displayName: 'tester' },
    signOut: jest.fn(),
    loading: true
  }
  const children = <p>test</p>

  it('loading true', () => {
    render(
      <PrivateStruct {...props} loading={true}>
        {children}
      </PrivateStruct>
    )
    const loading = screen.getByTestId('Loading')
    expect(loading).toBeInTheDocument()
  })

  it('loading false / children', () => {
    render(
      <PrivateStruct {...props} loading={false}>
        {children}
      </PrivateStruct>
    )
    const loading = screen.queryByTestId('Loading')
    const p = document.querySelector('p')
    expect(p).toBeInTheDocument()
    expect(loading).not.toBeInTheDocument()
  })

  it('elements', () => {
    render(
      <PrivateStruct {...props} loading={false}>
        {children}
      </PrivateStruct>
    )
    const Header = screen.getByTestId('HeaderPrivate')
    const Footer = screen.getByTestId('Footer')
    expect(Header).toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
  })
})
