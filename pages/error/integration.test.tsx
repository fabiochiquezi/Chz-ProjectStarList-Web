import { render, screen } from '@testing-library/react'
import ErrorPage from './index.page'

describe('ErrorPage', () => {
  test('elements', () => {
    render(<ErrorPage />)
    const title = screen.getByText('ERROR ;(')
    const description = screen.getByText('Sorry, but something went wrong')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
