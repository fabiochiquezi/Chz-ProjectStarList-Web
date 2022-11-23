import axios from 'axios'
import { keyTMDB } from '../../keys'
import { Genre } from '../../../types'
import { apiKey, base } from '../config'

export type GetGenreSeries = () => Promise<Genre[]>

const getGenreSeries: GetGenreSeries = async () => {
    const genresMovies = `${base}/genre/tv/list${apiKey + keyTMDB}`
    const get = await axios.get(genresMovies)
    return get.data.genres
}

export { getGenreSeries }
