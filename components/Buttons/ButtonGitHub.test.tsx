const { render } = require('@testing-library/react')
import ButtonGitHub from './ButtonGitHub'

test('ButtonGitHub', () => {
    const { getByText } = render(<ButtonGitHub />)
    expect(getByText('GitHub')).toBeInTheDocument()
})
