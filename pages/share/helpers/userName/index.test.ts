import { getUserName } from '.'

describe('_helpers/userName', () => {
    it('getUserName', () => {
        const user = getUserName('test@test.com')
        expect(user).toBe('test')
    })
})
