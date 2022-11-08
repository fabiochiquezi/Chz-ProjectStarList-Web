import {
    getMovies,
    getMovie,
    getSeries,
    getSerie,
    getGenreMovies
} from './index'

describe.skip('test: api/watch', () => {
    it('getMovies"', async () => {
        const list = await getMovies('1')
        expect(list.total_pages).not.toBeNull()
        expect(list.total_results).not.toBeNull()
        expect(list.results.length).toBeGreaterThan(1)
        expect(list.page).toBe(1)
    })

    it('getMovie"', async () => {
        const list = await getMovie('spider', '1')
        expect(list.total_pages).not.toBeNull()
        expect(list.total_results).not.toBeNull()
        expect(list.results.length).toBeGreaterThan(1)
        expect(list.page).toBe(1)
    })

    it('getSeries"', async () => {
        const list = await getSeries('1')
        expect(list.total_pages).not.toBeNull()
        expect(list.total_results).not.toBeNull()
        expect(list.results.length).toBeGreaterThan(1)
        expect(list.page).toBe(1)
    })

    it('getSerie"', async () => {
        const list = await getSerie('dragon', '1')
        expect(list.total_pages).not.toBeNull()
        expect(list.total_results).not.toBeNull()
        expect(list.results.length).toBeGreaterThan(1)
        expect(list.page).toBe(1)
    })

    it('getGenreMovies"', async () => {
        const list = await getGenreMovies()
        expect(list.length).toBeGreaterThan(1)
    })
})
