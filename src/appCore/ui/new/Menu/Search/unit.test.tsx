import { fireEvent, render, waitFor } from '@testing-library/react'
import Search from '.'

describe('Search', () => {
  test('onSearch', () => {
    const onSearch = jest.fn(arg => arg)
    const onReset = jest.fn()
    render(<Search onSearch={onSearch} onReset={onReset} />)

    const input = document.querySelector('input') as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.blur(input)
    expect(onSearch).toHaveBeenCalledTimes(1)
    expect(onSearch).toHaveBeenLastCalledWith('test')
  })

  test('onReset', async () => {
    const onSearch = jest.fn(arg => arg)
    const onReset = jest.fn()
    render(<Search onSearch={onSearch} onReset={onReset} />)

    const input = document.querySelector('input') as HTMLInputElement
    await waitFor(async () => input.focus())
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})
