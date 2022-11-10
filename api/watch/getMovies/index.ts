import axios from 'axios'
import { keyTMDB } from '../../keys'
import { List, Movie } from 'types/TMDB'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'

export type GetMovies = (page: string) => Promise<List<Movie>>

const getMovies: GetMovies = async page => {
    const moviesTopRated = `${base}/movie/top_rated${apiKey + keyTMDB}`
    const uri = `${moviesTopRated}&page=${page}`
    const get: { data: List<Movie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getMovies }
