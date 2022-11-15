import { fireEvent, render, waitFor } from '@testing-library/react'
import { Search } from './index'


describe('components/Form/Search/Default', () => {
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
        const input = document.querySelector('.className input')
        const icon = document.querySelector('.className [data-testid="icon"]')
        expect(div).toBeInTheDocument()
        expect(div.classList.contains(props.className)).toBeTruthy()
        expect(input).toBeInTheDocument()
        expect(input.value).toBe(props.value)
        expect(icon).toBeInTheDocument()
    })

    it('miss propperties', () => {
        const Elem = (<Search {...props} className="" />)
        render(Elem)
        const div = document.querySelector('input').parentElement
        expect(div.className).toBe('flex relative w-full h-8 ')
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

    it('onCallSearch w/ KeyBoard', async() => {
        render(Elem)
        const el = document.querySelector('.className input')
        await waitFor(async () => el.focus())
        fireEvent.keyDown(el, { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(props.callSearch).toHaveBeenCalledTimes(1)
    })

    it('callReset', async() => {
        const Elem = (<Search {...props} value="" />)
        render(Elem)
        const el = document.querySelector('.className input')
        await waitFor(async () => el.focus())
        fireEvent.keyDown(el, { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(props.callReset).toHaveBeenCalledTimes(1)
    })
})
