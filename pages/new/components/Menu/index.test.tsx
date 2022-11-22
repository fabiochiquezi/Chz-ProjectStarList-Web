import { render } from '@testing-library/react'
import { Menu } from '.'

describe('Menu', () => {
    const props = {
        routerType: '',
        searchFn: jest.fn(),
        resetSearch: jest.fn(),
        changeSelect: jest.fn()
    }

    it('Menu', () => {
        render(<Menu {...props} />)
    })
})
