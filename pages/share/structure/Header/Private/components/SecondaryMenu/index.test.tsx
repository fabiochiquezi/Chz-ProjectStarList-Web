import { fireEvent, render, screen } from '@testing-library/react'
import { SecondaryMenu } from '.'

describe('SecondaryMenu', () => {
    it('data', () => {
        const props = { userName: 'test', signOut: jest.fn() }
        render(<SecondaryMenu {...props} />)
        const userName = document.querySelector('li:first-child span')
        const btn = document.querySelector('li:last-child button')
        expect(userName?.textContent).toBe(props.userName)
        expect(btn?.textContent).toBe('Sign Out')
    })

    it('onClick', () => {
        const props = { userName: 'test', signOut: jest.fn() }
        render(<SecondaryMenu {...props} />)
        const btn = screen.getByText('Sign Out')
        if (btn) fireEvent.click(btn)
        expect(props.signOut).toHaveBeenCalledTimes(1)
    })
})
