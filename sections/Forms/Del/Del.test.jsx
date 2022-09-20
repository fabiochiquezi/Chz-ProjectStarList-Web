import { render } from '@testing-library/react'
import { DeleteItem } from './index'

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

describe('sections/Forms/Del', () => {
    const callback = jest.fn(() => 'test')
    const dataItem = { test: 'test' }
    const Elem = <DeleteItem dataItem={dataItem} setCatalogList={(callback)} />
    render(Elem)

    it('should have all elements', () => {
        const title = document.querySelector('h3')
        const p = document.querySelector('p')
        const btnSend = document.querySelector('button')

        expect(title).toBeInTheDocument()
        expect(title.textContent).toBe('Delete Item')
        expect(p).toBeInTheDocument()
        expect(p.textContent).toBe('Are you sure you want to delete this item? This action cannot be reversed')
        expect(btnSend).toBeInTheDocument()
    })
})
