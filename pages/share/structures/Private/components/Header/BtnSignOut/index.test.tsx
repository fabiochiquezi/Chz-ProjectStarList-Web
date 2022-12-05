import { fireEvent, render, screen } from '@testing-library/react'
import { BtnSignOut } from '.'

describe('BtnSignOut', () => {
  const props = { onClick: jest.fn() }

  it('data', () => {
    render(<BtnSignOut {...props} />)
    const button = screen.getByTestId('BtnSignOut')
    expect(button.textContent).toBe('Sign Out')
  })

  it('onClick', () => {
    render(<BtnSignOut {...props} />)
    const button = screen.getByTestId('BtnSignOut')
    fireEvent.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
