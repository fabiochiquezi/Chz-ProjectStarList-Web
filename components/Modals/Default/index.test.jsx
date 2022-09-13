import { render, screen } from '@testing-library/react'
import { Modal } from './index'

describe('Modal', () => {
    it('should be open', () => {
        const Elem = <Modal isOpen={true}><p>test</p></Modal>
        const { getByTestId } = render(Elem)
        const el = getByTestId('modal-default')

        expect(el).toBeInTheDocument()
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    it('should be closed', () => {
        const Elem = <Modal isOpen={false}><p>test</p></Modal>
        const { queryByTestId } = render(Elem)
        const el = queryByTestId('modal-default')
        expect(el).not.toBeInTheDocument()
    })
})
