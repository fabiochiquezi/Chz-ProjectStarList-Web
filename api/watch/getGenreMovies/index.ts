import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { WatchGenre } from '../../../types/apis/watch'

export type GetGenreMovies = () => Promise<WatchGenre[]>

const getGenreMovies: GetGenreMovies = async () => {
    const genresMovies = `${base}/genre/movie/list${apiKey + keyTMDB}`
    const get = await axios.get(genresMovies)
    console.log(get)
    return get.data.genres
}

export { getGenreMovies }
