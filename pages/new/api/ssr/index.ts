import { GetServerSideProps } from 'next'
import { getMovie } from '../external/watch/getMovie'
import { getSerie } from '../external/watch/getSerie'
import { getMovies } from '../external/watch/getMovies'
import { getSeries } from '../external/watch/getSeries'
import { getGenreMovies } from '../external/watch/getGenreMovies'
import { discoverMovies } from '../external/watch/discoverMovies'
import { discoverSeries } from '../external/watch/discoverSeries'
import { getGenreSeries } from '../external/watch/getGenreSeries'

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const { type, page, search, genre } = context.query
        const typeQ = type ? String(type) : 'movies'
        const pageQ = page ? String(page) : '1'
        const searchQ = search ? String(search) : ''
        const genreQ = genre ? String(genre) : ''

        const permitedTypes = ['movies', 'series', 'games', 'books']
        const isTypePermited = permitedTypes.includes(typeQ)
        if (!isTypePermited) throw new Error('Invalid type')

        const searchAndFiltersTogether = search && genreQ
        if (searchAndFiltersTogether) throw new Error('Bad Request')

        let list = null
        let genres = null
        switch (type) {
            case 'movies':
                genres = await getGenreMovies()
                if (genreQ) list = await discoverMovies([genreQ], pageQ)
                if (search) list = await getMovie(searchQ, pageQ)
                if (!search && !genreQ) list = await getMovies(pageQ)
                if (!list) throw new Error('500')
                break

            case 'series':
                genres = await getGenreSeries()
                if (genreQ) list = await discoverSeries([genreQ], pageQ)
                if (search) list = await getSerie(searchQ, pageQ)
                if (!search && !genreQ) list = await getSeries(pageQ)
                if (!list) throw new Error('500')
                break
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
