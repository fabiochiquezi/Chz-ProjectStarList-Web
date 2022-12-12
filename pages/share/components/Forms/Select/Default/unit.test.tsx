import { fireEvent, render, screen } from '@testing-library/react'
import { Select } from './index'


describe('Search', () => {
  const props = {
    label: 'label',
    className: 'className',
    placeholder: 'placeholder',
    name: 'name',
    onChange: jest.fn(() => 'onChange'),
    error: 'error',
    defaultValue: '1'
  }
  const children = <><option value='1'>1</option> <option value='2'>2</option></>

  it('elements and props', () => {
    render(<Select {...props} >{children}</Select>)

    const div = screen.getByTestId('Select')
    const label = screen.getByText(props.label)
    const select: HTMLSelectElement = screen.getByDisplayValue(props.defaultValue)
    const options = document.querySelectorAll('.className option')
    const error = screen.getByText(`* ${props.error}`)

    expect(div).toBeInTheDocument()
    expect(div.classList.contains(props.className)).toBeTruthy()
    expect(label.textContent).toBe('label (placeholder)')
    expect(select).toBeInTheDocument()
    expect(select.value).toBe(props.defaultValue)
    expect(options).toHaveLength(3)
    expect(error).toBeInTheDocument()
    expect(error.textContent).toBe(`* ${props.error}`)
  })

  it('miss propperties', () => {
    render(<Select {...props} className="">{children}</Select>)
    const div = screen.getByTestId('Select')
    expect(div.className).toBe('relative w-full h-8 ')
  })

  it('onFocus', () => {
    render(<Select {...props} >{children}</Select>)
    const el = screen.getByDisplayValue(props.defaultValue)
    fireEvent.focus(el)
    expect(el.classList.contains('border-green-700')).toBeTruthy()
  })

  it('onBlur', () => {
    render(<Select {...props} >{children}</Select>)
    const el = screen.getByDisplayValue(props.defaultValue)
    fireEvent.focus(el)
    fireEvent.blur(el)
    expect(el.classList.contains('border-green-700')).toBeFalsy()
  })

  it('onChange', () => {
    render(<Select {...props} >{children}</Select>)
    const el = screen.getByDisplayValue(props.defaultValue)
    fireEvent.change(el, { target: { value: '2' } })
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
