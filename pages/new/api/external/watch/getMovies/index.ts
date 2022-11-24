import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { Movie } from '../../../../../share/types'
import { WatchList } from '../../../../types/watch'

export type GetMovies = (page: string) => Promise<WatchList<Movie>>

const getMovies: GetMovies = async page => {
    const moviesTopRated = `${base}/movie/top_rated${apiKey + keyTMDB}`
    const uri = `${moviesTopRated}&page=${page}`
    const get: { data: WatchList<Movie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getMovies }
