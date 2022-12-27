import { render } from '@testing-library/react'
import { Structure } from '.'

describe('Structure', () => {
  test('public - elements', () => {
    render(<Structure><p>Children</p></Structure>)
  })
})
