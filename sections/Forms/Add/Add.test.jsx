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

describe('', () => {
    const callback = jest.fn(() => 'test')
    const Elem = <AddItem setCatalogList={(callback)} />
    const { getByTestId, getByText } = render(Elem)
    const title = document.querySelector('h3')
    const form = document.querySelector('form')
    const thumbI = document.querySelector('[name="thumb"]')
    const btnSend = document.querySelector('[type="submit"] span')

    it('should have all elements', () => {
        expect(title).toBeInTheDocument()
        expect(form).toBeInTheDocument()
        expect(thumbI).toBeInTheDocument()
        expect(btnSend).toBeInTheDocument()
    })

    it('input should work', () => {
        fireEvent.change(thumbI, { target: { value: 'test' } })
        expect(thumbI.value).toBe('test')
    })
})
