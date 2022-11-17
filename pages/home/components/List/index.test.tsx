import { render, screen } from '@testing-library/react'
import { List } from '.'

describe('List', () => {
    const props = {
        title: 'title',
        description: 'description',
        catalog: [
            { title: 'title', thumb: 'thumb' },
            { title: 'title', thumb: 'thumb' },
            { title: 'title', thumb: 'thumb' },
            { title: 'title', thumb: 'thumb' }
        ]
    }

    it('data', () => {
        render(<List {...props} />)
        const title = screen.getByText(props.title)
        const description = screen.getByText(props.description)
        const thumbs = document.querySelectorAll('img')

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(thumbs).toHaveLength(4)
    })
})
