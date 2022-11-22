import { render, fireEvent } from '@testing-library/react'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
    const props = {
        className: 'test',
        onClick: jest.fn(),
        loading: false
    }

    describe('className', () => {
        it('className', () => {
            render(<BtnSignIn {...props} />)
            const el = document.querySelector('button')
            expect(el).toBeInTheDocument()
            expect(el).toHaveClass(props.className)
        })

        it('without className', () => {
            render(<BtnSignIn {...props} className="" />)
            const el = document.querySelector('button')
            expect(el).toBeInTheDocument()
            expect(el).not.toHaveClass(props.className)
        })
    })

    describe('loading', () => {
        it('loading true', () => {
            render(<BtnSignIn {...props} loading={true} />)
            const loading = document.querySelector('[data-testid="btn-load"]')
            const text = document.querySelector('[data-testid="btn-icon"]')
            expect(loading).toBeInTheDocument()
            expect(text).not.toBeInTheDocument()
        })

        it('loading false', () => {
            render(<BtnSignIn {...props} loading={false} />)
            const loading = document.querySelector('[data-testid="btn-load"]')
            const text = document.querySelector('[data-testid="btn-icon"]')
            expect(loading).not.toBeInTheDocument()
            expect(text).toBeInTheDocument()
        })
    })

    it('onClick', () => {
        render(<BtnSignIn {...props} />)
        const el = document.querySelector('button')
        if (el) fireEvent.click(el)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
