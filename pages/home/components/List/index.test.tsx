import { render, screen } from '@testing-library/react'
import { List } from '.'

describe('List', () => {
    const props = {
        catalog: [
            { title: 'title', thumb: 'thumb' },
            { title: 'title', thumb: 'thumb' },
            { title: 'title', thumb: 'thumb' },
            { title: 'title', thumb: 'thumb' }
        ]
    }

    it('data', () => {
        render(<List {...props} />)
        const title = screen.getByText('YOUR VIRTUAL MEMORY LIST')
        const description = screen.getByText(
            'From watching, reading or playing...'
        )
        const thumbs = document.querySelectorAll('img')

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(thumbs).toHaveLength(4)
    })
})
