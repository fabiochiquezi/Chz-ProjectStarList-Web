import { render } from '@testing-library/react'
import { LoadingPage } from './index'

describe('Loading', () => {
  test('data', () => {
    const { getByTestId } = render(<LoadingPage />)
    const el = getByTestId('LoadingPage')
    expect(el).toHaveClass('h-screen')
    expect(el).toBeInTheDocument()
  })

  test('alternative data', () => {
    const { getByTestId } = render(<LoadingPage height="h-[100px]" />)
    const el = getByTestId('LoadingPage')
    expect(el).not.toHaveClass('h-screen')
    expect(el).toHaveClass('h-[100px]')
    expect(el).toBeInTheDocument()
  })
})
