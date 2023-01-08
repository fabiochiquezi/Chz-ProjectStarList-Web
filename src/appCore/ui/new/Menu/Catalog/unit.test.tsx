import { fireEvent, render } from '@testing-library/react'
import { Catalog } from '.'

describe('Catalog', () => {
  const props = {
    defaultValue: 'series',
    onChange: jest.fn()
  }

  test('props', () => {
    render(<Catalog {...props} />)
    const select = document.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe(props.defaultValue)
    fireEvent.change(select, { target: { value: 'movies' } })
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
