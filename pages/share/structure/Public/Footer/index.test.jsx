import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('Footer', () => {
    const Elem = <Footer />
    render(Elem)

    it('should have all data', () => {
        const boxes = document.querySelectorAll('.box')
        const titles = document.querySelectorAll('h3')
        const rights = screen.getByText('© All rights reserved -')
        const discord = screen.getByText('Chiquezi#3816')
        const github = document.querySelector('.box:last-child li:nth-child(2) a')
        const whatsapp = document.querySelector('.box:last-child li:nth-child(3) a')

        expect(boxes).toHaveLength(4)
        expect(titles).toHaveLength(3)
        expect(rights).toBeInTheDocument()
        expect(discord).toBeInTheDocument()
        expect(github.href).toBe('https://github.com/fabiochiquezi')
        expect(whatsapp.href).toBe('https://api.whatsapp.com/send?phone=5519983127035&text=Hi%20there!')
    })
})
