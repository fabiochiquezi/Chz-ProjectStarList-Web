import axios from 'axios'
import { keyTMDB } from '../../keys'
import { List, Movie } from 'types/TMDB'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'

export type GetMovie = (movie: string, page: string) => Promise<List<Movie>>

const getMovie: GetMovie = async (movie, page) => {
    const searchMovie = `${base}/search/movie${apiKey + keyTMDB}`
    const uri = `${searchMovie}&query=${movie}&page=${page}`
    const get: { data: List<Movie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getMovie }
