import { resetSearch } from '.'
import Router from 'next/router'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('resetSearch', () => {
    global.scrollTo = jest.fn()
    const setLoad = jest.fn(data => data)
    const routerPage = 'routerPage'

    test('call function correctly', () => {
        resetSearch(setLoad, routerPage)()
        expect(global.scrollTo).toBeCalledTimes(1)
        expect(setLoad).toBeCalledTimes(1)
        expect(setLoad).toHaveBeenCalledWith(true)
        expect(Router.push).toHaveBeenCalledTimes(1)
        expect(Router.push).toBeCalledWith('routerPage')
    })
})
