import { render } from '@testing-library/react'
import ModalForm from '.'

describe('sections/Forms/ModalForm', () => {
    const Elem = <ModalForm><p>aaa</p></ModalForm>
    const { getByTestId } = render(Elem)

    it('should have all elements', () => {
        const modal = getByTestId('modal-form')
        const p = document.querySelector('p')
        const svg = document.querySelector('svg')

        expect(modal).toBeInTheDocument()
        expect(p.textContent).toBe('aaa')
        expect(svg).toBeInTheDocument()
    })
})
