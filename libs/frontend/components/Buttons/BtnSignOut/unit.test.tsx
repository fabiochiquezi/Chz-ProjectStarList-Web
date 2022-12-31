import { fireEvent, render, screen } from '@testing-library/react'
import { BtnSignOut } from '.'

describe('BtnSignOut', () => {
  const props = { onClick: jest.fn() }

  test('data', () => {
    render(<BtnSignOut {...props} />)
    const button = screen.getByTestId('BtnSignOut')
    expect(button.textContent).toBe('Sign Out')
  })

  test('onClick', () => {
    render(<BtnSignOut {...props} />)
    const button = screen.getByTestId('BtnSignOut')
    fireEvent.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
