import { fireEvent, render } from '@testing-library/react'
import { Select } from './index'

describe('Search', () => {
    const children = <><option value='1'>1</option> <option value='2'>2</option></>
    const props = {
        label: 'label',
        className: 'className',
        placeholder: 'placeholder',
        name: 'name',
        onChange: jest.fn(() => 'onChange'),
        error: 'error',
        defaultValue: '1'
    }
    const Elem = (<Select {...props} >{children}</Select>)


    it('elements and props', () => {
        render(Elem)

        const div = document.querySelector('.className')
        expect(div).toBeInTheDocument()
        expect(div.classList.contains(props.className)).toBeTruthy()

        const label = document.querySelector('.className label')
        expect(label.textContent).toBe('label (placeholder)')

        const select = document.querySelector('.className select')
        expect(select).toBeInTheDocument()
        expect(select.value).toBe(props.defaultValue)

        const options = document.querySelectorAll('.className option')
        expect(options).toHaveLength(3)

        const error = document.querySelector('.className p')
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
