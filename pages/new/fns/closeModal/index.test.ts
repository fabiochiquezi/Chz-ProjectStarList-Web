import { closeModal } from '.'

describe('closeModal', () => {
    it('call set', () => {
        const set = jest.fn()
        closeModal(set)
        expect(set).toHaveBeenCalledTimes(1)
    })
})
