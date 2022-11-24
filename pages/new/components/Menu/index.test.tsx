import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Menu } from './index'

describe('Menu', () => {
    const props = {
        routerGenre: '',
        genreList: [{ id: '1', name: 'action' }],
        routerType: 'movies',
        searchFn: jest.fn(),
        resetSearch: jest.fn(),
        changeCatalog: jest.fn()
    }
    const El = (newProps: any): any => <Menu {...props} {...newProps} />

    it('Menu', () => {
        render(<El />)
        const Menu = screen.getByTestId('Menu')
        const genreOption = screen.getByText('Genres')
        const moviesOption = screen.getByText('Movies')
        const seriesOption = screen.getByText('Series')
        const booksOption = screen.getByText('Books')
        const gamesOption = screen.getByText('Games')
        expect(Menu).toBeInTheDocument()
        expect(genreOption).toBeInTheDocument()
        expect(moviesOption).toBeInTheDocument()
        expect(seriesOption).toBeInTheDocument()
        expect(booksOption).toBeInTheDocument()
        expect(gamesOption).toBeInTheDocument()
    })

    it('routerType', () => {
        render(<El routerType="series" />)
        const selectType: HTMLSelectElement | null = document.querySelector(
            'select[name="typeSearch"]'
        )
        expect(selectType?.value).toBe('series')
    })

    it('searchFn', () => {
        render(<El />)
        const el = document.querySelector('[data-testid="SearchMenu"] input')
        if (!el) return
        fireEvent.focus(el)
        fireEvent.change(el, { target: { value: 'test' } })
        fireEvent.blur(el)
        expect(el).toBeInTheDocument()
        expect(props.searchFn).toHaveBeenCalledTimes(1)
    })

    it('resetFn', async () => {
        render(<El />)
        const el: HTMLSelectElement | null = document.querySelector(
            '[data-testid="SearchMenu"] input'
        )
        if (!el) return
        await waitFor(async () => el.focus())
        fireEvent.keyDown(el, { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(props.resetSearch).toHaveBeenCalledTimes(1)
    })

    it('changeSelect', () => {
        render(<El />)
        const el = document.querySelector('[data-testid="selectType"] select')
        if (!el) return
        fireEvent.change(el, { target: { value: 'series' } })
        expect(el).toBeInTheDocument()
        expect(props.changeCatalog).toHaveBeenCalledTimes(1)
    })
})
