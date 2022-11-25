import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Header', () => {
    const props = {
        BtnSignIn: <button>BtnSignIn</button>
    }
    it('elements', () => {
        render(<Header {...props} />)
        const el = screen.getByTestId('HeaderPublic')
        const logo = screen.getByTestId('Logo')
        const signInBtn = screen.getByText('BtnSignIn')
        const gitHubBtn: HTMLAnchorElement = screen.getByTestId('BtnGitHub')

        expect(el).toBeInTheDocument()
        expect(logo).toBeInTheDocument()
        expect(signInBtn).toBeInTheDocument()
        expect(gitHubBtn).toBeInTheDocument()
        expect(gitHubBtn.href).toBe(
            'https://github.com/fabiochiquezi/Chz-ProjectStarList-Web'
        )
    })
})
