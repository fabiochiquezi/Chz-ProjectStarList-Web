import { render } from '@testing-library/react'
import { Hero } from './index'

describe('Hero', () => {
    const Elem = <Hero title='Test Title' description='Test Description' />
    render(Elem)

    it('should have all data', () => {
        const title = document.querySelector('#hero-h1')
        const description = document.querySelector('p')
        const button = document.querySelector('button')

        expect(title.textContent).toBe('Test Title')
        expect(description.textContent).toBe('Test Description')
        expect(button).toBeInTheDocument()
    })
})
