import { closeModal } from '.'

describe('closeModal', () => {
    test('call set', () => {
        const set = jest.fn()
        closeModal(set)
        expect(set).toHaveBeenCalledTimes(1)
    })
})
