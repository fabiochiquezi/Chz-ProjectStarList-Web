import { fireEvent, render } from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
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

    it('should have all props', () => {
        const Elem = (
            <Input {...props} />
        )
        const { getByTestId } = render(Elem)
        const el = getByTestId('input')
        const div = document.querySelector('.className')
        const label = document.querySelector('label')
        const placeholder = document.querySelector('label span')
        const input = document.querySelector('input')
        const error = document.querySelector('.error')

        expect(el).toBeInTheDocument()
        expect(div.classList[div.classList.length - 1]).toBe('className')
        expect(label.textContent.indexOf('label') >= 0).toBeTruthy()
        expect(label.htmlFor).toEqual('name')
        expect(placeholder.textContent).toEqual('(placeholder)')
        expect(input.value).toBe('value')
        expect(input.name).toBe('name')
        expect(input.type).toBe('text')
        expect(error.textContent).toBe('* error')
    })

    it('should not have all elements', () => {
        const Elem = (
            <Input {...props} placeholder="" error="" />
        )
        render(Elem)
        const placeholder = document.querySelector('label span')
        const error = document.querySelector('.error')

        expect(placeholder).toBe(null)
        expect(error).toBe(null)
    })

    it('should active event works', () => {
        const Elem = (
            <Input {...props} value="" />
        )
        const { getByTestId } = render(Elem)
        const el = getByTestId('input')
        const label = document.querySelector('label')

        // Focus test
        expect(el.className.includes('border-green-700')).toBeFalsy()
        expect(label.className.includes('text-[11px] -top-[16px]')).toBeFalsy()

        fireEvent.focus(el)
        expect(el.className.includes('border-green-700')).toBeTruthy()
        expect(label.className.includes('text-[11px] -top-[16px]')).toBeTruthy()

        fireEvent.focusOut(el)
        expect(el.className.includes('border-green-700')).toBeFalsy()
        expect(label.className.includes('text-[11px] -top-[16px]')).toBeFalsy()

        // Event test
        fireEvent.change(el, { target: { value: 'test' } })
        expect(props.onChange).toHaveBeenCalledTimes(1)
    })
})
