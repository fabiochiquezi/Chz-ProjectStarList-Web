import axios from 'axios'
import { Genre } from 'types/TMDB'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'

export type GetGenreMovies = () => Promise<Genre[]>

const getGenreMovies: GetGenreMovies = async () => {
    const genresMovies = `${base}/genre/movie/list${apiKey + keyTMDB}`
    const get = await axios.get(genresMovies)
    console.log(get)
    return get.data.genres
}

export { getGenreMovies }
