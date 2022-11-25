import { getUserName } from '.'

describe('getUserName', () => {
    it('return', () => {
        const user = getUserName('test@test.com')
        expect(user).toBe('test')
    })
})
