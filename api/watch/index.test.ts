import axios from 'axios'
import {
    getMovies,
    getMovie,
    getSeries,
    getSerie,
    getGenreMovies,
    format
} from './index'

// If want to test with the TMDB API remove the axios mock
// and the expect in the tests with 'w/ mock'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('api/watch', () => {
    describe('request lists', () => {
        beforeEach(() => {
            jest.resetAllMocks()
            mockedAxios.get.mockResolvedValue({
                data: {
                    total_pages: 1,
                    total_results: 10,
                    results: [
                        { poster_path: 'test01' },
                        { poster_path: 'test02' }
                    ],
                    page: 1
                }
            })
        })

        it('getMovies"', async () => {
            const list = await getMovies('1')
            expect(list.total_pages).not.toBeNull()
            expect(list.total_results).not.toBeNull()
            expect(list.results).not.toBeNull()
            expect(list.page).not.toBeNull()

            // w/ mock
            expect(list.results[0]).toEqual(
                expect.objectContaining({
                    thumb: 'https://image.tmdb.org/t/p/w500/test01'
                })
            )
        })

        it('getMovie"', async () => {
            const list = await getMovie('spider', '1')
            expect(list.total_pages).not.toBeNull()
            expect(list.total_results).not.toBeNull()
            expect(list.results).not.toBeNull()
            expect(list.page).not.toBeNull()

            // w/ mock
            expect(list.results[0]).toEqual(
                expect.objectContaining({
                    thumb: 'https://image.tmdb.org/t/p/w500/test01'
                })
            )
        })

        it('getSeries"', async () => {
            const list = await getSeries('1')
            expect(list.total_pages).not.toBeNull()
            expect(list.total_results).not.toBeNull()
            expect(list.results).not.toBeNull()
            expect(list.page).not.toBeNull()

            // w/ mock
            expect(list.results[0]).toEqual(
                expect.objectContaining({
                    thumb: 'https://image.tmdb.org/t/p/w500/test01'
                })
            )
        })

        it('getSerie"', async () => {
            const list = await getSerie('dragon', '1')
            expect(list.total_pages).not.toBeNull()
            expect(list.total_results).not.toBeNull()
            expect(list.results).not.toBeNull()
            expect(list.page).not.toBeNull()

            // w/ mock
            expect(list.results[0]).toEqual(
                expect.objectContaining({
                    thumb: 'https://image.tmdb.org/t/p/w500/test01'
                })
            )
        })
    })

    describe.skip('request genres', () => {
        it('getGenreMovies"', async () => {
            jest.resetAllMocks()
            const list = await getGenreMovies()
            // console.log(list)
            // Implement...
        })
    })

    describe('formatation', () => {
        it('format', () => {
            const data = {
                test: '',
                results: [{ poster_path: 'test01' }]
            }
            const formated = format(data as any)
            expect(formated).toEqual({
                test: '',
                results: [
                    {
                        poster_path: 'test01',
                        thumb: 'https://image.tmdb.org/t/p/w500/test01'
                    }
                ]
            })
        })
    })
})
