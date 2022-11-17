import { fireEvent, render, screen } from '@testing-library/react'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
    const props = {
        className: 'test',
        id: 'test',
        onClick: jest.fn(),
        loading: true
    }

    it('data', () => {
        render(<BtnSignIn {...props} />)
        const el = screen.getByTestId('BtnSignIn')
        expect(el).toBeInTheDocument()
        expect(el).toHaveClass(props.className)
        expect(el.id).toBe(props.id)
    })

    it('load', () => {
        render(<BtnSignIn {...props} />)
        const btnLoad = document.querySelector('[data-testid="BtnLoad"]')
        const btnIcon = document.querySelector('[data-testid="BtnIcon"]')
        expect(btnLoad).toBeInTheDocument()
        expect(btnIcon).not.toBeInTheDocument()
    })

    it('icon', () => {
        render(<BtnSignIn {...props} loading={false} />)
        const btnLoad = document.querySelector('[data-testid="BtnLoad"]')
        const btnIcon = document.querySelector('[data-testid="BtnIcon"]')
        expect(btnLoad).not.toBeInTheDocument()
        expect(btnIcon).toBeInTheDocument()
    })

    it('onClick', () => {
        render(<BtnSignIn {...props} loading={false} />)
        const el = screen.getByTestId('BtnSignIn')
        if (el) fireEvent.click(el)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
