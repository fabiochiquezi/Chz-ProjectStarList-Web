import { render, screen } from '@testing-library/react'
import { ErrorSection } from './index'

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: {
                type: 'doing'
            },
            asPath: ''
        }
    }
}))

describe('BannerJob', () => {
    const title = 'ERROR ;('
    const description = 'Sorry, but something went wrong'

    const Elem = <ErrorSection />
    const { getByTestId } = render(Elem)

    it('should have all data', () => {
        const el = getByTestId('error-section')
        const h1 = screen.getByText(title)
        const p = screen.getByText(description)

        expect(el).toBeInTheDocument()
        expect(h1).toBeInTheDocument()
        expect(p).toBeInTheDocument()
    })
})
