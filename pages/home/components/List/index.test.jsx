import { render } from '@testing-library/react'
import { SimpleList } from '.'

describe('List', () => {
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
})
