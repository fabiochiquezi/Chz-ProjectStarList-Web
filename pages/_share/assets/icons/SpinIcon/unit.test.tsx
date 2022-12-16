import { render, screen } from '@testing-library/react'
import { SpinIcon } from '.'

describe('Logo Default', () => {
  test('props', () => {
    render(
      <SpinIcon
        className="className"
        width={10}
        height={10}
        color="#101010"
        stroke={10} />
    )
    const el = screen.getByTestId('SpinIcon')
    const elDivs = el.querySelectorAll('div')
    elDivs.forEach(div => {
      expect(div).toHaveStyle(`
        width: 10px;
        height: 10px;
        border: 10px solid #101010;
        borderColor: #101010 transparent transparent transparent;
      `)
    })
    expect(el).toHaveStyle('width: 30px; height: 30px;')
    expect(el).toHaveClass('className')
  })

  test('miss props', () => {
    render(<SpinIcon />)
    const el = screen.getByTestId('SpinIcon')
    const elDivs = el.querySelectorAll('div')
    elDivs.forEach(div => {
      expect(div).toHaveStyle(`
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
        borderColor: #fff transparent transparent transparent;
      `)
    })
    expect(el).toHaveStyle('width: 36px; height: 36px;')
    expect(el).toHaveClass('spinnerDefault')
  })
})
