import { render, screen } from '@testing-library/react'
import { Title } from './index'

describe('Title', () => {
    test('data', () => {
        const props = { title: 'title', description: 'description' }
        render(<Title {...props} />)
        const title = screen.getByText(props.title)
        const description = screen.getByText(props.description)
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })
})
