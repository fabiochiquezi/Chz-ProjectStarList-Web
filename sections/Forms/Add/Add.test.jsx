import { fireEvent, render } from '@testing-library/react'
import { AddItem } from '.'

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: {
                type: 'doing'
            },
            asPath: ''
        }
    }
}))

describe('sections/Form/Add', () => {
    const callback = jest.fn(() => 'test')
    let Elem

    beforeEach(() => {
        Elem = <AddItem setCatalogList={(callback)} />
        render(Elem)
    })

    it('should have all elements', () => {
        const title = document.querySelector('h3')
        const form = document.querySelector('form')
        const thumbI = document.querySelector('[name="thumb"]')
        const btnSend = document.querySelector('[type="submit"] span')

        expect(title).toBeInTheDocument()
        expect(form).toBeInTheDocument()
        expect(thumbI).toBeInTheDocument()
        expect(btnSend).toBeInTheDocument()
    })

    it('input should work', () => {
        const thumbI = document.querySelector('[name="thumb"]')

        fireEvent.change(thumbI, { target: { value: 'test' } })
        expect(thumbI.value).toBe('test')
    })
})
