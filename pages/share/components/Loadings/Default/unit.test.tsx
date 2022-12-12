import { render } from '@testing-library/react'
import { Loading } from './index'

describe('Loading', () => {
  test('data', () => {
    const { getByTestId } = render(<Loading />)
    const el = getByTestId('Loading')
    expect(el).toHaveClass('h-screen')
    expect(el).toBeInTheDocument()
  })

  test('alternative data', () => {
    const { getByTestId } = render(<Loading height="h-[100px]" />)
    const el = getByTestId('Loading')
    expect(el).not.toHaveClass('h-screen')
    expect(el).toHaveClass('h-[100px]')
    expect(el).toBeInTheDocument()
  })
})
