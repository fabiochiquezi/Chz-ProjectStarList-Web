import { format } from './format'

describe('/api/watch/_helpers/format', () => {
    it('format', () => {
        const test = ''
        const results = [{ poster_path: 'test01' }]
        const data = { test, results }
        const formated = format(data as any)

        const thumb = 'https://image.tmdb.org/t/p/w500/test01'
        const expectResult = { poster_path: 'test01', thumb }
        expect(formated).toEqual({ test, results: [expectResult] })
    })
})
