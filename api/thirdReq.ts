import axios from 'axios'
import { catalogI } from '../general/types/catalog'
import { drafbit, uriTMDB } from './uri'

async function getSeries(page: string): Promise<catalogI[]> {
    const { getCover, series } = uriTMDB
    const topRapted = series.topRated
    const uri = `${topRapted}&page=${page}`
    const get = await axios.get(uri)
    const results = get.data.results
    const cover = (el: any): catalogI => ({ thumb: getCover(el.poster_path) })

    return results.map(cover)
}

async function getMovies(page: string): Promise<catalogI[]> {
    const { getCover, movies } = uriTMDB
    const topRapted = movies.topRated
    const uri = `${topRapted}&page=${page}`
    const get = await axios.get(uri)
    const results = get.data.results
    const cover = (el: any): catalogI => ({ thumb: getCover(el.poster_path) })

    return results.map(cover)
}

async function getMovie(movie: string): Promise<any> {
    try {
        const { getCover } = uriTMDB
        const uri = uriTMDB.getMovie(movie)
        const get = await axios.get(uri)
        const results = get.data.results
        const cover = (el: any): catalogI => ({
            thumb: getCover(el.poster_path)
        })
        return results.map(cover)
    } catch (e) {
        return e
    }
}

async function getBooks(page: string): Promise<catalogI[]> {
    const get = await axios.get(`${drafbit}?_page=${page}&_limit=20`)
    const results = get.data
    const cover = (item: any): catalogI => ({ thumb: item.image_url })
    return results.map(cover)
}

export { getMovies, getSeries, getBooks, getMovie }
