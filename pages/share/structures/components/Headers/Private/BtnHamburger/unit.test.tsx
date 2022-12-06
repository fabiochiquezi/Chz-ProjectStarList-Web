import { fireEvent, render, screen } from '@testing-library/react'
import { BtnHamburger } from '.'

describe('BtnHamburger', () => {
  const props = {
    opened: true,
    onClick: jest.fn()
  }

  it('closed', () => {
    render(<BtnHamburger {...props} />)
    const closeBtn = screen.getByTestId('CloseBtn')
    const iconBtn = screen.queryByTestId('HambBtn')
    expect(closeBtn).toBeInTheDocument()
    expect(iconBtn).not.toBeInTheDocument()
  })

  it('opened', () => {
    render(<BtnHamburger {...props} opened={false} />)
    const closeBtn = screen.queryByTestId('CloseBtn')
    const iconBtn = screen.getByTestId('HambBtn')
    expect(iconBtn).toBeInTheDocument()
    expect(closeBtn).not.toBeInTheDocument()
  })

  it('onClick', () => {
    render(<BtnHamburger {...props} opened={true} />)
    const el = screen.getByTestId('BtnHamburger')
    fireEvent.click(el)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
