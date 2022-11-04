import axios from 'axios'
import { keyTMDB } from '../keys'
import { Genre, List, Movie, Serie } from '../../general/types/TMDB'

const base = 'https://api.themoviedb.org/3'
const apiKey = '?api_key='

const addCover = <T extends { poster_path: string }>(item: T): T => {
    const images = 'https://image.tmdb.org/t/p/w500'
    const getCover = (c: string): string => `${images}/${c}`
    const thumb = getCover(item.poster_path)
    return { ...item, thumb }
}

async function requestTMDB<T>(uri: string): Promise<List<T>> {
    const get = await axios.get(uri)
    const results = get.data.results
    get.data.results = results.map(addCover)
    return get.data
}

async function getMovies(page: string): Promise<List<Movie>> {
    const moviesTopRated = `${base}/movie/top_rated${apiKey + keyTMDB}`
    const uri = `${moviesTopRated}&page=${page}`
    return await requestTMDB(uri)
}

async function getMovie(movie: string, page: string): Promise<List<Movie>> {
    const searchMovie = `${base}/search/movie${apiKey + keyTMDB}`
    const uri = `${searchMovie}&query=${movie}&page=${page}`
    return await requestTMDB(uri)
}

async function getGenreMovies(): Promise<Genre[]> {
    const genresMovies = `${base}/genre/movie/list${apiKey + keyTMDB}`
    const get = await axios.get(genresMovies)
    return get.data.genres
}

async function getSeries(page: string): Promise<List<Serie>> {
    const seriesTopRated = `${base}/tv/top_rated${apiKey + keyTMDB}`
    const uri = `${seriesTopRated}&page=${page}`
    return await requestTMDB(uri)
}

async function getSerie(serie: string, page: string): Promise<List<Serie>> {
    const searchSerie = `${base}/search/tv${apiKey + keyTMDB}`
    const uri = `${searchSerie}&query=${serie}&page=${page}`
    return await requestTMDB(uri)
}

export { getMovies, getMovie, getGenreMovies, getSeries, getSerie }
