import { render, screen } from '@testing-library/react'
import { HomeStructure } from './index.page'

describe('Home', () => {
  const props = {
    heroBgMobile: './banners/hero-mobile.jpg',
    heroBgDesktop: './banners/hero-desktop.jpg',
    heroTitle: 'heroTitle',
    heroDescription: 'heroDescription'
  }

  test('Hero', () => {
    render(<HomeStructure {...props}><p>test</p></HomeStructure>)
    const title = screen.getByText('heroTitle')
    const description = screen.getByText('heroDescription')
    const btnSignIn = screen.getByText('Sign In')
    const children = screen.getByText('test')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(btnSignIn).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })
})
