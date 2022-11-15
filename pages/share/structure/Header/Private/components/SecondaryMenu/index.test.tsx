import { fireEvent, render } from '@testing-library/react'
import { SecondaryMenu } from '.'

describe('SecondaryMenu', () => {
    const props = { userName: 'test', signOut: jest.fn() }
    render(<SecondaryMenu {...props} />)
    const userName = document.querySelector('li:first-child span')
    const btn = document.querySelector('li:last-child button')

    it('data', () => {
        expect(userName?.textContent).toBe(props.userName)
        expect(btn?.textContent).toBe('Sign Out')
    })

    it('signOut', () => {
        if (btn) fireEvent.click(btn)
        expect(props.signOut).toBeCalledTimes(1)
    })
})
