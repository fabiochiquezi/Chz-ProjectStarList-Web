import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './index'


describe('components/Form/Inputs/Default', () => {
  const props: any = {
    label: 'label',
    className: 'className',
    placeholder: 'placeholder',
    name: 'name',
    type: 'text',
    onChange: jest.fn(() => 'onChange'),
    value: 'value',
    error: 'error'
  }

  test('propperties', () => {
    render(<Input {...props} />)

    const div = screen.getByTestId('Input')
    const label: HTMLLabelElement = screen.getByText('label')
    const placeholder = screen.getByText('(placeholder)')
    const input: HTMLInputElement = screen.getByDisplayValue('value')
    const error = screen.getByText('* error')

    expect(div).toHaveClass('className')
    expect(label).toBeInTheDocument()
    expect(label?.htmlFor).toEqual('name')
    expect(placeholder?.textContent).toEqual('(placeholder)')
    expect(input.value).toBe('value')
    expect(input.name).toBe('name')
    expect(input.type).toBe('text')
    expect(error).toBeInTheDocument()
  })

  test('miss propperties', () => {
    const Elem = (<Input
      {...props}
      placeholder=""
      error=""
      value=""
      className=''
      type=''
    />)
    render(Elem)
    const placeholder = document.querySelector('label span')
    const error = document.querySelector('.error')
    const input = document.querySelector('input')
    const div = document.querySelector('label')?.parentElement
    expect(placeholder).toBe(null)
    expect(error).toBe(null)
    expect(input?.value).toBe('')
    expect(input?.type).toBe('text')
    expect(div?.className).toBe('relative w-full h-8 ')
  })

  test('OnFocus/OnBlur', () => {
    render(<Input {...props} value="" />)
    const el = document.querySelector('input')
    const label: HTMLLabelElement = screen.getByText('label')

    expect(el?.className.includes('border-green-700')).toBeFalsy()
    expect(label.className.includes('text-[11px] -top-[16px]')).toBeFalsy()
    if (el) fireEvent.focus(el)
    expect(el?.className.includes('border-green-700')).toBeTruthy()
    expect(label.className.includes('text-[11px] -top-[16px]')).toBeTruthy()
    if (el) fireEvent.focusOut(el)
    expect(el?.className.includes('border-green-700')).toBeFalsy()
    expect(label.className.includes('text-[11px] -top-[16px]')).toBeFalsy()
  })

  test('onChange', () => {
    render(<Input {...props} />)
    const input: HTMLInputElement = screen.getByDisplayValue('value')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
