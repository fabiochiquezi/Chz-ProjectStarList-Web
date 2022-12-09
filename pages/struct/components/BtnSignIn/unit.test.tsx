import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
  const props = {
    className: 'test',
    onClick: jest.fn()
  }

  describe('className', () => {
    test('className', () => {
      render(<BtnSignIn {...props} />)
      const el = screen.getByTestId('BtnSignIn')
      expect(el).toBeInTheDocument()
      expect(el).toHaveClass(props.className)
    })

    test('without className', () => {
      render(<BtnSignIn {...props} className="" />)
      const el = document.querySelector('button')
      expect(el).toBeInTheDocument()
      expect(el).not.toHaveClass(props.className)
    })
  })

  test('loading true', () => {
    render(<BtnSignIn {...props} />)
    const button = screen.getByTestId('BtnSignIn')
    fireEvent.click(button)
    waitFor(() => {
      const loading = screen.getByTestId('BtnLoad')
      const text = screen.queryByTestId('BtnIcon')
      expect(loading).toBeInTheDocument()
      expect(text).not.toBeInTheDocument()
    })
  })

  test('loading false', () => {
    render(<BtnSignIn {...props} />)
    const loading = screen.queryByTestId('BtnLoad')
    const text = screen.getByTestId('BtnIcon')
    expect(loading).not.toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  test('onClick', () => {
    render(<BtnSignIn {...props} />)
    waitFor(() => {
      const el = screen.getByTestId('BtnSignIn')
      fireEvent.click(el)
      expect(props.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
