import { render, screen } from '@testing-library/react'
import { Logo } from '.'

describe('Logo Default', () => {
  test('props', () => {
    render(<Logo className="className" width="10" height="10" />)
    const el: any = screen.getByTestId('Logo')
    expect(el.getAttribute('width')).toBe('10')
    expect(el.getAttribute('height')).toBe('10')
    expect(el).toHaveClass('className')
  })
  test('miss props', () => {
    render(<Logo />)
    const el: any = screen.getByTestId('Logo')
    expect(el.getAttribute('width')).toBe('132')
    expect(el.getAttribute('height')).toBe('35')
    expect(el.classList).toHaveLength(0)
  })
})
