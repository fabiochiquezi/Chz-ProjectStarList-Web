import { fireEvent, render } from '@testing-library/react'
import { Search } from './index'

describe('Search', () => {
    const props = {
        value: 'Search',
        className: 'className',
        onChange: jest.fn(() => 'onChange'),
        callSearch: jest.fn(() => 'callSearch'),
        callReset: jest.fn(() => 'callReset')
    }
    const Elem = (<Search {...props} />)


    it('elements and props', () => {
        render(Elem)

        const div = document.querySelector('.className')
        expect(div).toBeInTheDocument()
        expect(div.classList.contains(props.className)).toBeTruthy()

        const input = document.querySelector('.className input')
        expect(input).toBeInTheDocument()
        expect(input.value).toBe(props.value)

        const icon = document.querySelector('.className [data-testid="icon"]')
        expect(icon).toBeInTheDocument()
    })

    it('onChange', () => {
        render(Elem)
        const el = document.querySelector('.className input')
        fireEvent.change(el, { target: { value: 'test' } })
        expect(props.onChange).toHaveBeenCalledTimes(1)
    })

    it('onFocus', () => {
        render(Elem)
        const el = document.querySelector('.className input')
        fireEvent.focus(el)
        expect(el.classList.contains('border-green-700')).toBeTruthy()
    })

    it('onSearch', () => {
        render(Elem)
        const el = document.querySelector('.className input')
        fireEvent.focus(el)
        fireEvent.blur(el)
        expect(props.callSearch).toHaveBeenCalledTimes(1)
        expect(props.callSearch).toHaveBeenLastCalledWith(props.value)
    })

    it.skip('onSearch with KeyBoard', () => {
        // Implement
    })
})
