import axios from 'axios'
import {
    getTMDBCoverURI,
    moviesTopRatedTMDB,
    seriesTopRatedTMDB
} from 'general/configs/apiConfig'
import { catalogI } from 'store/catalog/types'

async function getSeries(page: string): Promise<catalogI[]> {
    const getList = await axios.get(`${seriesTopRatedTMDB}&page=${page}`)
    const getResults = getList.data.results
    const newArr: catalogI[] = getResults.map((item: any) => {
        const path = item.poster_path
        return { thumb: getTMDBCoverURI(path) }
    })
    return newArr
}

async function getMovies(page: string): Promise<catalogI[]> {
    const getList = await axios.get(`${moviesTopRatedTMDB}&page=${page}`)
    const getResults = getList.data.results
    const newArr: catalogI[] = getResults.map((item: any) => {
        const path = item.poster_path
        return { thumb: getTMDBCoverURI(path) }
    })
    return newArr
}

async function getBooks(page: string): Promise<catalogI[]> {
    const getList = await axios.get(
        `https://example-data.draftbit.com/books?_page=${page}&_limit=20`
    )
    const getResults = getList.data
    const newArr: catalogI[] = getResults.map((item: any) => {
        return { thumb: item.image_url }
    })
    return newArr
}

export { getMovies, getSeries, getBooks }
