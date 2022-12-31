import { render, screen } from '@testing-library/react'
import { PublicStruct } from '.'

describe('PublicStruct', () => {
  const props = {
    Header: <header>header</header>,
    Footer: <footer>footer</footer>,
    children: <p>children</p>,
    isRouteMixed: false
  }

  test('elements', async () => {
    render(<PublicStruct {...props}>{props.children}</PublicStruct>)
    const el = screen.getByTestId('PublicStruct')
    const header = screen.getByText('header')
    const footer = screen.getByText('footer')
    const children = screen.getByText('children')
    expect(el).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })

  test('isRouteMixed true', async () => {
    render(<PublicStruct {...props} isRouteMixed={true}>{props.children}</PublicStruct>)
    const children = screen.getByText('children')
    expect(children.parentElement).toHaveClass('pt-48 sm:pt-36 mb-52')
  })

  test('isRouteMixed false', async () => {
    render(<PublicStruct {...props} isRouteMixed={false}>{props.children}</PublicStruct>)
    const children = screen.getByText('children')
    expect(children.parentElement).not.toHaveClass('pt-48 sm:pt-36 mb-52')
  })
})
