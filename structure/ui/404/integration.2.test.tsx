import { render, screen } from '@testing-library/react'
import { routes } from '../../../src/pages/routes'
import Page404 from './index.page'

jest.mock('../_auth/useAuth', () => ({
  useAuth: () => ({ user: null })
}))

describe('ErrorPage', () => {
  test('elements', () => {
    render(<Page404 />)
    const text = screen.getByText('404 - Page not found')
    const button = screen.getByText('Go back home')
    expect(text).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('no user', () => {
    render(<Page404 />)
    const button = screen.getByText('Go back home')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('href')).toBe(routes.home.path)
  })
})
