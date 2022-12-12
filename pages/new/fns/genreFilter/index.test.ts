import { genreFilter } from '.'
import Router from 'next/router'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('genreFilter', () => {
    global.scrollTo = jest.fn()
    const routerPage = 'routerPage'
    const setLoad = jest.fn()
    const e: any = { target: { value: 'test' } }

    test('call function correctly', () => {
        genreFilter(setLoad, routerPage)(e)
        expect(global.scrollTo).toBeCalledTimes(1)
        expect(setLoad).toBeCalledTimes(1)
        expect(setLoad).toHaveBeenCalledWith(true)
        expect(Router.push).toHaveBeenCalledTimes(1)
        expect(Router.push).toBeCalledWith('routerPage?genre=test')
    })
})
