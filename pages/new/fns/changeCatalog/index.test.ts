import { changeCatalog } from '.'
import Router from 'next/router'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('changeCatalog', () => {
    global.scrollTo = jest.fn()
    const setLoad = jest.fn(data => data)
    const e: any = { target: { value: 'test' } }

    it('call function correctly', () => {
        changeCatalog(setLoad)(e)
        expect(global.scrollTo).toBeCalledTimes(1)
        expect(setLoad).toBeCalledTimes(1)
        expect(setLoad).toHaveBeenCalledWith(true)
        expect(Router.push).toHaveBeenCalledTimes(1)
    })
})
