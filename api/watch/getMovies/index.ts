import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { WatchList } from '../../../types/apis/watch'
import { Movie } from '../../../types/models/Catalog/Movie'

export type GetMovies = (page: string) => Promise<WatchList<Movie>>

const getMovies: GetMovies = async page => {
    const moviesTopRated = `${base}/movie/top_rated${apiKey + keyTMDB}`
    const uri = `${moviesTopRated}&page=${page}`
    const get: { data: WatchList<Movie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getMovies }
