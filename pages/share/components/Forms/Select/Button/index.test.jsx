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

    it('elements and props', () => {
        render(Elem)

        const div = document.querySelector('.className')
        const select = document.querySelector('.className select')
        const options = document.querySelectorAll('.className option')
        const error = document.querySelector('.className p')

        expect(div).toBeInTheDocument()
        expect(div.classList.contains(props.className)).toBeTruthy()
        expect(select).toBeInTheDocument()
        expect(select.value).toBe(props.defaultValue)
        expect(options).toHaveLength(2)
        expect(error).toBeInTheDocument()
        expect(error.textContent).toBe(`* ${props.error}`)
    })

    it('onFocus', () => {
        render(Elem)
        const el = document.querySelector('.className select')
        fireEvent.focus(el)
        expect(el.classList.contains('border-green-700')).toBeTruthy()
    })

    it('onBlur', () => {
        render(Elem)
        const el = document.querySelector('.className select')
        fireEvent.focus(el)
        fireEvent.blur(el)
        expect(el.classList.contains('border-green-700')).toBeFalsy()
    })

    it('onChange', () => {
        render(Elem)
        const el = document.querySelector('.className select')
        fireEvent.change(el, { target: { value: '2' } })
        expect(props.onChange).toHaveBeenCalledTimes(1)
    })
})
