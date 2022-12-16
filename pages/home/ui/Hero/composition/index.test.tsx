import { render } from '@testing-library/react'
import { Hero } from './index'

describe('Hero', () => {
    const props = {
        title: 'Test Title',
        description: 'Test Description',
        BtnSignIn: <button>BtnSignIn</button>
    }

    test('data', () => {
        render(<Hero {...props} />)
        const title = document.querySelector('h1')
        const description = document.querySelector('p')
        const button = document.querySelector('button')

        expect(title?.textContent).toBe(props.title)
        expect(description?.textContent).toBe(props.description)
        expect(button).toBeInTheDocument()
    })
})
