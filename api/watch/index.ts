import axios from 'axios'
import { keyTMDB } from '../keys'
import { Genre, List, Movie, Serie } from '../../general/types/TMDB'

const base = 'https://api.themoviedb.org/3'
const apiKey = '?api_key='

function format<T extends Movie | Serie>(data: List<T>): List<T> {
    function addThumb<T extends Movie | Serie>(item: T): T {
        const images = 'https://image.tmdb.org/t/p/w500'
        const getThumb = (c: string): string => `${images}/${c}`
        const thumb = getThumb(item.poster_path)
        return { ...item, thumb }
    }

    const formatedResults = data.results.map(addThumb)
    const newData = { ...data, results: formatedResults }
    return newData
}

async function getMovies(page: string): Promise<List<Movie>> {
    const moviesTopRated = `${base}/movie/top_rated${apiKey + keyTMDB}`
    const uri = `${moviesTopRated}&page=${page}`
    const get: { data: List<Movie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

async function getMovie(movie: string, page: string): Promise<List<Movie>> {
    const searchMovie = `${base}/search/movie${apiKey + keyTMDB}`
    const uri = `${searchMovie}&query=${movie}&page=${page}`
    const get: { data: List<Movie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

async function getGenreMovies(): Promise<Genre[]> {
    const genresMovies = `${base}/genre/movie/list${apiKey + keyTMDB}`
    const get = await axios.get(genresMovies)
    console.log(get)
    return get.data.genres
}

async function getSeries(page: string): Promise<List<Serie>> {
    const seriesTopRated = `${base}/tv/top_rated${apiKey + keyTMDB}`
    const uri = `${seriesTopRated}&page=${page}`
    const get: { data: List<Serie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

async function getSerie(serie: string, page: string): Promise<List<Serie>> {
    const searchSerie = `${base}/search/tv${apiKey + keyTMDB}`
    const uri = `${searchSerie}&query=${serie}&page=${page}`
    const get: { data: List<Serie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getMovies, getMovie, getGenreMovies, getSeries, getSerie, format }
