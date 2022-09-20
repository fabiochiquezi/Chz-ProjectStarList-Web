import { fireEvent, render } from '@testing-library/react'
import { AlterItem } from '.'

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

describe('AlterItem', () => {
    const callback = jest.fn(() => 'test')
    const dataItem = { index: 1, thumb: 'test' }
    const Elem = <AlterItem setCatalogList={(callback)} dataItem={dataItem} />
    render(Elem)

    const title = document.querySelector('h3')
    const form = document.querySelector('form')
    const thumbI = document.querySelector('[name="thumb"]')
    const btnUpdate = document.querySelector('button:first-child')
    const btnDelete = document.querySelector('button:last-child')

    it('should have all elements', () => {
        expect(title).toBeInTheDocument()
        expect(title.textContent).toBe('Update Item or Delete')
        expect(form).toBeInTheDocument()
        expect(thumbI).toBeInTheDocument()
        expect(btnUpdate).toBeInTheDocument()
        expect(btnUpdate.textContent).toBe('Update')
        expect(btnDelete).toBeInTheDocument()
        expect(btnDelete.textContent).toBe('Delete')
    })

    it('input should work', () => {
        fireEvent.change(thumbI, { target: { value: 'test' } })
        expect(thumbI.value).toBe('test')
    })
})
