import { GenreTMDBT, MovieT } from './../general/types/TMDB'
import axios from 'axios'
import { keyTMDB } from './keys'
import { catalogI } from '../general/types/catalog'

// set up
const TMDB = 'https://api.themoviedb.org'
const version = '3'
const images = 'https://image.tmdb.org/t/p/w500'
const uri = `${TMDB}/${version}`
// movies
// const moviesUpComming = `${uri}/movie/upcoming${keyTMDB}`
const moviesTopRated = `${uri}/movie/top_rated${keyTMDB}`
const genresMovies = `${uri}/genre/movie/list${keyTMDB}`
const searchMovie = `${uri}/search/movie${keyTMDB}`
// series
const seriesTopRated = `${uri}/tv/top_rated${keyTMDB}`
const searchSerie = `${uri}/search/tv${keyTMDB}`
// images
const getCover = (c: string): string => `${images}/${c}`

async function getMovies(page: string): Promise<MovieT[]> {
    const uri = `${moviesTopRated}&page=${page}`
    const get = await axios.get(uri)
    const results = get.data.results
    const addCover = (item: any): catalogI => ({
        ...item,
        thumb: getCover(item.poster_path)
    })
    get.data.results = results.map(addCover)
    return get.data
}

async function getMovie(movie: string, page: string): Promise<MovieT[]> {
    const uri = `${searchMovie}&query=${movie}&page=${page}`
    const get = await axios.get(uri)
    const results = get.data.results
    const addCover = (item: any): catalogI => ({
        ...item,
        thumb: getCover(item.poster_path)
    })
    get.data.results = results.map(addCover)
    return get.data
}

async function getGenreMovies(): Promise<GenreTMDBT[]> {
    const get = await axios.get(genresMovies)
    return get.data.genres
}

async function getSeries(page: string): Promise<MovieT[]> {
    const uri = `${seriesTopRated}&page=${page}`
    const get = await axios.get(uri)
    const results = get.data.results
    const addCover = (item: any): catalogI => ({
        ...item,
        thumb: getCover(item.poster_path)
    })

    get.data.results = results.map(addCover)
    return get.data
}

async function getSerie(serie: string, page: string): Promise<MovieT[]> {
    const uri = `${searchSerie}&query=${serie}&page=${page}`
    const get = await axios.get(uri)
    const results = get.data.results
    const addCover = (item: any): catalogI => ({
        ...item,
        thumb: getCover(item.poster_path)
    })
    get.data.results = results.map(addCover)
    return get.data
}

export { getMovies, getMovie, getGenreMovies, getSeries, getSerie }
