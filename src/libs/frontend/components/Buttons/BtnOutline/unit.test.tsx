import { fireEvent, render, screen } from '@testing-library/react'
import { BtnOutline } from '.'

describe('BtnOutline', () => {
  const Btn = 'Btn'
  const props = {
    className: 'className',
    onClick: jest.fn(),
    disabled: false
  }

  it('element/data', () => {
    render(<BtnOutline {...props}>{Btn}</BtnOutline>)
    const btn = screen.getByText('Btn')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('className')
  })

  it('onClick', () => {
    render(<BtnOutline {...props}>{Btn}</BtnOutline>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('disable true', () => {
    render(<BtnOutline {...props} disabled={true}>{Btn}</BtnOutline>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  it('disable undefined', () => {
    render(<BtnOutline {...props} disabled={undefined}>{Btn}</BtnOutline>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('disable off', () => {
    render(<BtnOutline {...props} disabled={false}>{Btn}</BtnOutline>)
    const btn = screen.getByText('Btn')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
