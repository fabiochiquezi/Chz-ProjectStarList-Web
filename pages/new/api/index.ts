import { isString } from 'formik'
import { GetServerSideProps } from 'next'
import { getMovie } from './watch/getMovie'
import { getSerie } from './watch/getSerie'
import { getMovies } from './watch/getMovies'
import { getSeries } from './watch/getSeries'
import { getGenreMovies } from './watch/getGenreMovies'
import { discoverMovies } from './watch/discoverMovies'
import { discoverSeries } from './watch/discoverSeries'
import { getGenreSeries } from './watch/getGenreSeries'

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const type = context.query?.type ?? 'movies'
        const page = context.query.page ?? '1'
        const search = context.query?.search ?? ''
        const genreFilter = context.query?.genre ?? ''
        if (!isString(type)) throw new Error('Invalid type')
        if (!isString(page)) throw new Error('Invalid page')
        if (!isString(search)) throw new Error('Invalid search')
        if (!isString(genreFilter)) throw new Error('Invalid search')

        const permitedTypes = ['movies', 'series', 'games', 'books']
        const isTypePermited = permitedTypes.includes(type)
        if (!isTypePermited) throw new Error('Invalid type')

        const searchAndFiltersTogether = search && genreFilter
        if (searchAndFiltersTogether) throw new Error('Bad Request')

        let list
        let genres
        switch (type) {
            case 'movies':
                genres = await getGenreMovies()
                if (genreFilter) {
                    list = await discoverMovies([genreFilter], page)
                }
                if (search) list = await getMovie(search, page)
                if (!search && !genreFilter) list = await getMovies(page)
                break
            case 'series':
                genres = await getGenreSeries()
                if (genreFilter) {
                    list = await discoverSeries([genreFilter], page)
                }
                if (search) list = await getSerie(search, page)
                if (!search && !genreFilter) list = await getSeries(page)
                break
            default:
                throw new Error('Ivalid Type')
        }

        return {
            props: { data: { ok: true, data: { genres, list }, error: '' } }
        }
    } catch (e: unknown) {
        let message = ''
        if (e instanceof Error) message = e.message
        const res = { ok: false, data: {}, error: message }
        return { props: { data: res } }
    }
}
