import { render, screen } from '@testing-library/react'
import Home from './index.page'

describe('Home', () => {
  test('Hero', () => {
    render(<Home />)
    const title = screen.getByText('Your\' list of great works souvenirs')
    const description = screen.getByText('From watching, reading or playing...')
    const btnSignIn = screen.getByText('Sign In')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(btnSignIn).toBeInTheDocument()
  })

  test('List', () => {
    render(<Home />)
    const title = screen.getByText('YOUR VIRTUAL MEMORY LIST')
    const description = screen.getByText('From watching, reading or playing...')
    const thumbs = screen.getAllByTestId('Thumb')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(thumbs).toHaveLength(16)
  })
})
