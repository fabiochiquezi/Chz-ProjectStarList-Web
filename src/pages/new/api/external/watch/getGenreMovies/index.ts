import axios from 'axios'
import { keyTMDB } from '../../keys'
import { Genre } from '../../../../types'
import { apiKey, base } from '../config'

export type GetGenreMovies = () => Promise<Genre[]>

const getGenreMovies: GetGenreMovies = async () => {
    const genresMovies = `${base}/genre/movie/list${apiKey + keyTMDB}`
    const get = await axios.get(genresMovies)
    return get.data.genres
}

export { getGenreMovies }
