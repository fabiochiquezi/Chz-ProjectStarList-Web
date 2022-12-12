import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Search } from './index'


describe('components/Form/Search/Default', () => {
  const props: any = {
    value: 'Search',
    className: 'className',
    onChange: jest.fn(() => 'onChange'),
    callSearch: jest.fn(() => 'callSearch'),
    callReset: jest.fn(() => 'callReset')
  }

  test('elements and props', () => {
    render(<Search {...props} />)
    const div = screen.getByTestId('Search')
    const input = screen.getByDisplayValue(props.value)
    const icon = screen.getByTestId('icon')
    expect(div).toBeInTheDocument()
    expect(div).toHaveClass(props.className)
    expect(input).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  test('miss propperties', () => {
    render(<Search {...props} className="" />)
    const div = screen.getByTestId('Search')
    expect(div.className).toBe('flex relative w-full h-8 ')
  })

  test('onChange', () => {
    render(<Search {...props} />)
    const el = screen.getByDisplayValue(props.value)
    fireEvent.change(el, { target: { value: 'test' } })
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })

  test('onFocus', () => {
    render(<Search {...props} />)
    const el = screen.getByDisplayValue(props.value)
    fireEvent.focus(el)
    expect(el.classList.contains('border-green-700')).toBeTruthy()
  })

  test('onSearch', () => {
    render(<Search {...props} />)
    const el = screen.getByDisplayValue(props.value)
    fireEvent.focus(el)
    fireEvent.blur(el)
    expect(props.callSearch).toHaveBeenCalledTimes(1)
    expect(props.callSearch).toHaveBeenLastCalledWith(props.value)
  })

  test('onCallSearch w/ KeyBoard', async () => {
    render(<Search {...props} />)
    const el = screen.getByDisplayValue(props.value)
    await waitFor(async () => el.focus())
    fireEvent.keyDown(el, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(props.callSearch).toHaveBeenCalledTimes(1)
  })

  test('callReset', async () => {
    render(<Search {...props} value="" />)
    const el = screen.getByTestId('input')
    await waitFor(async () => el.focus())
    fireEvent.keyDown(el, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(props.callReset).toHaveBeenCalledTimes(1)
  })
})
