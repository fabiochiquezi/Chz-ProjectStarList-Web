import { fireEvent, render, screen } from '@testing-library/react'
import { BtnSolid } from '.'

describe('BtnOutline', () => {
  const Btn = 'Btn'
  const props = {
    className: 'className',
    onClick: jest.fn(),
    disabled: false
  }

  it('element/data', () => {
    render(<BtnSolid {...props}>{Btn}</BtnSolid>)
    const btn = screen.getByText('Btn')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('className')
  })

  it('onClick', () => {
    render(<BtnSolid {...props}>{Btn}</BtnSolid>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('disable true', () => {
    render(<BtnSolid {...props} disabled={true}>{Btn}</BtnSolid>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  it('disable undefined', () => {
    render(<BtnSolid {...props} disabled={undefined}>{Btn}</BtnSolid>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('disable off', () => {
    render(<BtnSolid {...props} disabled={false}>{Btn}</BtnSolid>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
