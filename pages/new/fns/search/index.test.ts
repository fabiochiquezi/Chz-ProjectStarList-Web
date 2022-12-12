import { search } from '.'
import Router from 'next/router'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('search', () => {
    const setLoad = jest.fn(data => data)
    const routerPage = 'routerPage'

    test('call function correctly', () => {
        search(setLoad, routerPage)('test')
        expect(setLoad).toBeCalledTimes(1)
        expect(setLoad).toHaveBeenCalledWith(true)
        expect(Router.push).toHaveBeenCalledTimes(1)
        expect(Router.push).toBeCalledWith('routerPage?search=test')
    })
})
