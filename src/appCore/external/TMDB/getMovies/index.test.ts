import axios from 'axios'
import { getMovies } from '.'
jest.mock('axios')

describe('api/watch/getMovies', () => {
    beforeAll(() => {
        const mockedAxios = axios as jest.Mocked<typeof axios>
        const data = {
            total_pages: 1,
            total_results: 10,
            results: [{ poster_path: 'test01' }, { poster_path: 'test02' }],
            page: 1
        }
        jest.resetAllMocks()
        mockedAxios.get.mockResolvedValue({ data })
    })

    test('getMovies"', async () => {
        const list = await getMovies('1')
        expect(list.total_pages).not.toBeNull()
        expect(list.total_results).not.toBeNull()
        expect(list.results).not.toBeNull()
        expect(list.page).not.toBeNull()
        const thumb = 'https://image.tmdb.org/t/p/w500/test01'
        expect(list.results[0]).toEqual(expect.objectContaining({ thumb }))
    })
})
