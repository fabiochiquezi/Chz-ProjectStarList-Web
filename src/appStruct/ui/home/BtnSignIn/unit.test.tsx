import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
  const props = {
    className: 'test',
    onClick: jest.fn()
  }

  test('data', () => {
    render(<BtnSignIn {...props} />)
    const el = document.querySelector('button')
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass(props.className)
  })

  test('load', () => {
    render(<BtnSignIn {...props} />)
    const el = document.querySelector('button')
    waitFor(() => {
      if (el) fireEvent.click(el)
      const btnLoad = screen.queryByTestId('BtnLoad')
      const btnIcon = screen.queryByTestId('BtnIcon')
      expect(btnLoad).toBeInTheDocument()
      expect(btnIcon).not.toBeInTheDocument()
    })
    expect.assertions(2)
  })

  test('icon', () => {
    render(<BtnSignIn {...props} />)
    const btnLoad = screen.queryByTestId('BtnLoad')
    const btnIcon = screen.getByTestId('BtnIcon')
    expect(btnLoad).not.toBeInTheDocument()
    expect(btnIcon).toBeInTheDocument()
  })

  test('onClick', () => {
    render(<BtnSignIn {...props} />)
    const el = document.querySelector('button')
    waitFor(() => {
      if (el) fireEvent.click(el)
      expect(props.onClick).toHaveBeenCalledTimes(1)
    })
    expect.assertions(1)
  })
})
