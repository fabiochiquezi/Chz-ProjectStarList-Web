import { render, fireEvent, screen } from '@testing-library/react'
import { AddThumb } from './index'

describe('AddThumb', () => {
  test('data', () => {
    render(<AddThumb onClick={jest.fn()} />)
    const el = screen.getByTestId('AddThumb')
    expect(el).toBeInTheDocument()
  })

  test('onClick', () => {
    const callBack = jest.fn()
    render(<AddThumb onClick={callBack} />)
    const el = screen.getByTestId('AddThumb')
    if (el) fireEvent.click(el)
    expect(callBack).toHaveBeenCalledTimes(1)
  })
})
