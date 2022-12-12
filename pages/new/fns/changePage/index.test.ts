import { changePage } from '.'
import Router from 'next/router'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('changePage', () => {
    global.scrollTo = jest.fn()
    const routerSearch = 'routerSearch'
    const routerGenre = 'routerGenre'
    const routerPage = 'routerPage'
    const setLoad = jest.fn(data => data)

    test('routerSearch', () => {
        changePage(setLoad, routerSearch, routerGenre, routerPage)(1)
        expect(global.scrollTo).toBeCalledTimes(1)
        expect(Router.push).toHaveBeenCalledTimes(1)
        expect(Router.push).toHaveBeenCalledWith(
            'routerPage?search=routerSearch&page=1'
        )
    })

    test('routerGenre', () => {
        changePage(setLoad, '', routerGenre, routerPage)(2)
        expect(global.scrollTo).toBeCalledTimes(1)
        expect(Router.push).toHaveBeenCalledTimes(1)
        expect(Router.push).toHaveBeenCalledWith(
            'routerPage?genre=routerGenre&page=2'
        )
    })

    test('routerPage', () => {
        changePage(setLoad, '', '', routerPage)(3)
        expect(global.scrollTo).toBeCalledTimes(1)
        expect(Router.push).toHaveBeenCalledTimes(1)
        expect(Router.push).toHaveBeenCalledWith('routerPage?page=3')
    })
})
