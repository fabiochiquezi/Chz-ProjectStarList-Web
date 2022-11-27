import { fireEvent, render, screen } from '@testing-library/react'
import { Alert } from './index'

describe('Alert', () => {
  const props = {
    state: 0,
    message: 'test',
    closeAlert: jest.fn()
  }

  it('data', () => {
    render(<Alert {...props} />)
    const el = screen.getByTestId('Alert')
    const p = screen.getByText(props.message)

    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('bg-gray-700')
    expect(p).toBeInTheDocument()
  })

  it('state 1', () => {
    render(<Alert {...props} mode={1} />)
    const el = screen.getByTestId('Alert')
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('bg-green-700')
  })

  it('state 2', () => {
    render(<Alert {...props} mode={2} />)
    const el = screen.getByTestId('Alert')
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('bg-red-700')
  })

  it('closeAlert', () => {
    render(<Alert {...props} />)
    const closeBtn = screen.getByTestId('CloseIcon')
    fireEvent.click(closeBtn)
    expect(props.closeAlert).toHaveBeenCalledTimes(1)
  })
})
