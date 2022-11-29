import { fireEvent, render, screen } from '@testing-library/react'
import { BtnLink } from '.'

describe('BtnLink', () => {
  const props = {
    onClick: jest.fn(),
    isActive: true,
    text: 'text'
  }

  it('data', () => {
    render(<BtnLink {...props} />)
    const btn = screen.getByTestId('BtnLink')
    expect(btn).toBeInTheDocument()
    expect(btn.textContent).toBe(props.text)
  })

  it('isActive true', () => {
    render(<BtnLink {...props} />)
    const btn = screen.getByTestId('BtnLink')
    expect(btn).toHaveClass('text-orange-400')
  })

  it('isActive false', () => {
    render(<BtnLink {...props} isActive={false} />)
    const btn = screen.getByTestId('BtnLink')
    expect(btn).not.toHaveClass('text-orange-400')
  })

  it('onClick', () => {
    render(<BtnLink {...props} />)
    const btn = screen.getByTestId('BtnLink')
    fireEvent.click(btn)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
