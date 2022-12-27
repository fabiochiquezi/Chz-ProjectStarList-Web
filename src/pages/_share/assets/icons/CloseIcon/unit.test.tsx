import { render, screen } from '@testing-library/react'
import { CloseIcon } from '.'

describe('Logo Default', () => {
  test('props', () => {
    render(
      <CloseIcon
        className="className"
        width={10}
        height={10}
        color="#101010"
        stroke={10} />
    )
    const el = screen.getByTestId('CloseIcon')
    const line = el.querySelector('line')
    const path = el.querySelector('path')
    expect(el.getAttribute('height')).toBe('10')
    expect(el).toHaveClass('className')
    expect(line?.getAttribute('y1')).toBe('10')
    expect(line?.getAttribute('x2')).toBe('10')
    expect(line?.getAttribute('stroke')).toBe('#101010')
    expect(path?.getAttribute('stroke')).toBe('#101010')
  })

  test('miss props', () => {
    render(<CloseIcon />)
    const el = screen.getByTestId('CloseIcon')
    const line = el.querySelector('line')
    const path = el.querySelector('path')
    expect(el.getAttribute('height')).toBe('24')
    expect(el.classList).toHaveLength(0)
    expect(line?.getAttribute('y1')).toBe('22')
    expect(line?.getAttribute('x2')).toBe('22')
    expect(line?.getAttribute('stroke')).toBe('white')
    expect(path?.getAttribute('stroke')).toBe('white')
  })
})
