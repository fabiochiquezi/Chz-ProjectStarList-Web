import { render, screen } from '@testing-library/react'
import { Hero } from './index'

describe('Hero', () => {
  const props = {
    title: 'Test Title',
    description: 'Test Description',
    BtnSignIn: <button>BtnSignIn</button>,
    backgroundDesktop: '',
    backgroundMobile: ''
  }

  test('data', () => {
    render(<Hero {...props} />)
    const el = screen.getByTestId('Hero')
    const title = screen.getByText('Test Title')
    const description = screen.getByText('Test Description')
    const button = screen.getByText('BtnSignIn')

    expect(el).toBeInTheDocument()
    expect(title?.textContent).toBe(props.title)
    expect(description?.textContent).toBe(props.description)
    expect(button).toBeInTheDocument()
  })
})
