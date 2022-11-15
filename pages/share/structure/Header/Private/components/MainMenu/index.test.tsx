import { fireEvent, render } from '@testing-library/react'
import { MainMenu } from './index'

describe('MainMenu', () => {
    const props = {
        onChangeMenu: jest.fn((e: Event) => e.preventDefault()) as any,
        userName: 'userName',
        route: '/new/[type]'
    }

    it('elements', () => {
        render(<MainMenu {...props} />)
        const el = document.querySelector('nav')
        const lis = document.querySelectorAll('li')
        expect(el).toBeInTheDocument()
        expect(lis).toHaveLength(2)
    })

    it('userName', () => {
        render(<MainMenu {...props} />)
        const lis = document.querySelectorAll('li')
        const li2 = lis[1].querySelector('a')
        expect(li2?.getAttribute('href')).toBe('/userName')
    })

    it('onChangeMenu', () => {
        render(<MainMenu {...props} />)
        const li = document.querySelector('li:first-child a')
        if (li) fireEvent.click(li)
        expect(props.onChangeMenu).toBeCalledTimes(1)
    })

    describe('active item', () => {
        it('test 01', () => {
            render(<MainMenu {...props} route="/new/[type]" />)
            const lis = document.querySelectorAll('li')
            const li1 = lis[0].querySelector('a')
            const li2 = lis[1].querySelector('a')

            expect(li1).toHaveClass('text-orange-400')
            expect(li2).not.toHaveClass('text-orange-400')
        })
        it('test 02', () => {
            render(<MainMenu {...props} route="/[user]" />)
            const lis = document.querySelectorAll('li')
            const li1 = lis[0].querySelector('a')
            const li2 = lis[1].querySelector('a')

            expect(li1).not.toHaveClass('text-orange-400')
            expect(li2).toHaveClass('text-orange-400')
        })
    })
})
