import { fireEvent, render } from '@testing-library/react'
import { Input } from './index'


describe('components/Form/Inputs/Default', () => {
    const props = {
        label: 'label',
        className: 'className',
        placeholder: 'placeholder',
        name: 'name',
        type: 'text',
        onChange: jest.fn(() => 'onChange'),
        value: 'value',
        error: 'error'
    }
    const Elem = (<Input {...props} />)

    it('elements and propperties', () => {
        render(Elem)

        const div = document.querySelector('.className')
        const label = document.querySelector('label')
        const placeholder = document.querySelector('label span')
        const input = document.querySelector('input')
        const error = document.querySelector('.error')

        expect(div.classList[div.classList.length - 1]).toBe('className')
        expect(label.textContent.indexOf('label') >= 0).toBeTruthy()
        expect(label.htmlFor).toEqual('name')
        expect(placeholder.textContent).toEqual('(placeholder)')
        expect(input.value).toBe('value')
        expect(input.name).toBe('name')
        expect(input.type).toBe('text')
        expect(error.textContent).toBe('* error')
    })

    it('miss elements and propperties', () => {
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
        const div = document.querySelector('label').parentElement
        expect(placeholder).toBe(null)
        expect(error).toBe(null)
        expect(input.value).toBe('')
        expect(input.type).toBe('text')
        expect(div.className).toBe('relative w-full h-8 ')
    })

    it('OnFocus/OnBlur', () => {
        const Elem = (<Input {...props} value="" />)
        render(Elem)
        const el = document.querySelector('input')
        const label = document.querySelector('label')

        expect(el.className.includes('border-green-700')).toBeFalsy()
        expect(label.className.includes('text-[11px] -top-[16px]')).toBeFalsy()
        fireEvent.focus(el)
        expect(el.className.includes('border-green-700')).toBeTruthy()
        expect(label.className.includes('text-[11px] -top-[16px]')).toBeTruthy()
        fireEvent.focusOut(el)
        expect(el.className.includes('border-green-700')).toBeFalsy()
        expect(label.className.includes('text-[11px] -top-[16px]')).toBeFalsy()
    })

    it('onChange', () => {
        render(Elem)
        const el = document.querySelector('input')
        fireEvent.change(el, { target: { value: 'test' } })
        expect(props.onChange).toHaveBeenCalledTimes(1)
    })
})
