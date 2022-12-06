import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
  const props = {
    className: 'test',
    onClick: jest.fn()
  }

  describe('className', () => {
    it('className', () => {
      render(<BtnSignIn {...props} />)
      const el = document.querySelector('button')
      expect(el).toBeInTheDocument()
      expect(el).toHaveClass(props.className)
    })

    it('without className', () => {
      render(<BtnSignIn {...props} className="" />)
      const el = document.querySelector('button')
      expect(el).toBeInTheDocument()
      expect(el).not.toHaveClass(props.className)
    })
  })

  describe('loading', () => {
    it.only('loading true', () => {
      render(<BtnSignIn {...props} />)
      act(() => {
        const button = screen.getByTestId('BtnSignIn')
        fireEvent.click(button)
      })
      // const loading = screen.getByTestId('btn-load')
      // const text = screen.queryByTestId('btn-icon')
      // expect(loading).toBeInTheDocument()
      // expect(screen.queryByTestId('btn-icon')).not.toBeInTheDocument()
    })

    it('loading false', () => {
      render(<BtnSignIn {...props} />)
      const loading = document.querySelector('[data-testid="btn-load"]')
      const text = document.querySelector('[data-testid="btn-icon"]')
      expect(loading).not.toBeInTheDocument()
      expect(text).toBeInTheDocument()
    })
  })

  it('onClick', () => {
    render(<BtnSignIn {...props} />)
    const el = document.querySelector('button')
    if (el) fireEvent.click(el)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
