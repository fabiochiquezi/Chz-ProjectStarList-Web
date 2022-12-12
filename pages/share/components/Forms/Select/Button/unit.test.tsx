import { fireEvent, render } from '@testing-library/react'
import { SelectButton } from './index'

const props = {
  label: 'label',
  className: 'className',
  placeholder: 'placeholder',
  name: 'name',
  onChange: jest.fn(() => 'onChange'),
  error: 'error',
  defaultValue: '1'
}

describe('Search', () => {
  const children = <><option value='1'>1</option> <option value='2'>2</option></>
  const Elem = (<SelectButton {...props} >{children}</SelectButton>)

  test('elements and props', () => {
    render(Elem)

    const div = document.querySelector('.className')
    const select: HTMLSelectElement | null = document.querySelector('.className select')
    const options = document.querySelectorAll('.className option')
    const error = document.querySelector('.className p')

    expect(div).toBeInTheDocument()
    expect(div?.classList.contains(props.className)).toBeTruthy()
    expect(select).toBeInTheDocument()
    expect(select?.value).toBe(props.defaultValue)
    expect(options).toHaveLength(2)
    expect(error).toBeInTheDocument()
    expect(error?.textContent).toBe(`* ${props.error}`)
  })

  test('onFocus', () => {
    render(Elem)
    const el = document.querySelector('.className select')
    if (el) fireEvent.focus(el)
    expect(el?.classList.contains('border-green-700')).toBeTruthy()
  })

  test('onBlur', () => {
    render(Elem)
    const el = document.querySelector('.className select')
    if (el) fireEvent.focus(el)
    if (el) fireEvent.blur(el)
    expect(el?.classList.contains('border-green-700')).toBeFalsy()
  })

  test('onChange', () => {
    render(Elem)
    const el = document.querySelector('.className select')
    if (el) fireEvent.change(el, { target: { value: '2' } })
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
