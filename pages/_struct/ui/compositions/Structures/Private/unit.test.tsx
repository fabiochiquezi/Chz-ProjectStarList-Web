import { render, screen } from '@testing-library/react'
import { PrivateStruct } from '.'

describe('PrivateStruct', () => {
  const props = {
    Header: <header>header</header>,
    Footer: <footer>footer</footer>,
    children: <p>children</p>
  }

  test('elements', async () => {
    render(<PrivateStruct {...props}>{props.children}</PrivateStruct>)
    const el = screen.getByTestId('PrivateStruct')
    const header = screen.getByText('header')
    const footer = screen.getByText('footer')
    const children = screen.getByText('children')
    expect(el).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })
})
