import { fireEvent, render } from '@testing-library/react'
import { List, SimpleList } from '.'

describe('List', () => {
    /*
    const props = {
        title: 'title',
        description: 'description',
        catalog: [
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' },
            { id: '1', name: 'name', thumb: 'thumb' }
        ]
    }

    it('SimpleList: should have all elements', () => {
        const Elem = <SimpleList {...props} />
        const { getAllByTestId } = render(Elem)

        const title = document.querySelector('h1 span:first-child')
        const description = document.querySelector('h1 span:last-child')
        const thumbs = getAllByTestId('thumb-default')

        expect(title.textContent).toBe('title')
        expect(description.textContent).toBe('description')
        expect(thumbs).toHaveLength(15)
    })

    it('List: should have all elements', () => {
        const Elem = <List {...props} />
        const { getAllByTestId, queryByTestId, getByTestId } = render(Elem)

        const title = document.querySelector('h1 span:first-child')
        const description = document.querySelector('h1 span:last-child')
        const thumbs = getAllByTestId('thumb-default')
        const btnLoad = queryByTestId('button-load')
        const addThumb = queryByTestId('add-thumb')

        expect(title.textContent).toBe('title')
        expect(description.textContent).toBe('description')
        expect(thumbs).toHaveLength(15)
        expect(btnLoad).toBeInTheDocument()
        expect(addThumb).toBeInTheDocument()

        fireEvent.click(btnLoad)
        expect(getAllByTestId('thumb-default')).toHaveLength(20)
    })

    it('title empty', () => {
        const Elem = <List {...props} catalog={[]} />
        const { queryAllByTestId } = render(Elem)

        const title = document.querySelector('h1 span:first-child')
        const description = document.querySelector('h1 span:last-child')
        const thumbs = queryAllByTestId('thumb-default')

        expect(title.textContent).toBe('YOUR LIST IS EMPTY')
        expect(description.textContent).toBe('Start adding movies, books... Right now!')
        expect(thumbs).toHaveLength(0)
    })
    */
   it('disable', () => {})
})
