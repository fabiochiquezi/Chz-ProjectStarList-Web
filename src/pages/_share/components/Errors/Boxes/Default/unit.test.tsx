import { render, screen } from '@testing-library/react'
import { ErrorDefault } from './index'

describe('Error', () => {
  test('propperties', () => {
    render(<ErrorDefault title='title' message='message' />)
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('message')).toBeInTheDocument()
  })

  test('miss propperties', () => {
    render(<ErrorDefault />)
    expect(screen.getByText('ERROR ;(')).toBeInTheDocument()
    expect(screen.getByText('Sorry, but something went wrong')).toBeInTheDocument()
  })
})
