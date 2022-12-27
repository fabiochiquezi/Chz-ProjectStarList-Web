import { render, screen } from '@testing-library/react'
import Page404 from './index.page'

jest.mock('../_share/contexts', () => ({
  useAuth: () => ({ user: 'test' })
}))

describe('ErrorPage', () => {
  test('elements', () => {
    render(<Page404 />)
    const text = screen.getByText('404 - Page not found')
    const button = screen.getByText('Go back home')
    expect(text).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('user logged', () => {
    render(<Page404 />)
    const button = screen.getByText('Go back home')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('href')).toBe('/new/movies')
  })
})
