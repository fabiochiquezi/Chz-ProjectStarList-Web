import { getMovie } from 'pages/new/api/watch/getMovie'
import { getSerie } from 'pages/new/api/watch/getSerie'
import { getMovies } from 'pages/new/api/watch/getMovies'
import { getSeries } from 'pages/new/api/watch/getSeries'

async function reqSearch(
    type: string,
    search: string,
    page: string
): Promise<any> {
    let list
    switch (type) {
        case 'movies':
            list = await getMovie(search, page)
            break
        case 'series':
            list = await getSerie(search, page)
            break
    }
    return list
}

async function reqDefault(type: string, page: string): Promise<any> {
    let list
    switch (type) {
        case 'movies':
            list = await getMovies(page)
            break
        case 'series':
            list = await getSeries(page)
            break
        default:
            list = await getMovies(page)
            break
    }
    return list
}

export { reqSearch, reqDefault }
