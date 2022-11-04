import {
    getMovies,
    getMovie,
    getSeries,
    getSerie,
    getGenreMovies
} from './index'

describe('test: api/watch', () => {
    it('getMovies"', async () => {
        const list = await getMovies('1')
        const { total_pages, total_results, page, results } = list
        expect(total_pages).not.toBeNull()
        expect(total_results).not.toBeNull()
        expect(results.length).toBeGreaterThan(1)
        expect(page).toBe(1)
    })

    it('getMovie"', async () => {
        const list = await getMovie('spider', '1')
        const { total_pages, total_results, page, results } = list
        expect(total_pages).not.toBeNull()
        expect(total_results).not.toBeNull()
        expect(results.length).toBeGreaterThan(1)
        expect(page).toBe(1)
    })

    it('getSeries"', async () => {
        const list = await getSeries('1')
        const { total_pages, total_results, page, results } = list
        expect(total_pages).not.toBeNull()
        expect(total_results).not.toBeNull()
        expect(results.length).toBeGreaterThan(1)
        expect(page).toBe(1)
    })

    it('getSerie"', async () => {
        const list = await getSerie('dragon', '1')
        console.log(list)
        const { total_pages, total_results, page, results } = list
        expect(total_pages).not.toBeNull()
        expect(total_results).not.toBeNull()
        expect(results.length).toBeGreaterThan(1)
        expect(page).toBe(1)
    })

    it('getGenreMovies"', async () => {
        const list = await getGenreMovies()
        expect(list.length).toBeGreaterThan(1)
    })
})
