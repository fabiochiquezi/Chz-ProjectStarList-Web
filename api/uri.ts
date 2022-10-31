import { keyTMDB } from './keys'

// The Movies Api (https://developers.themoviedb.org/3)
const TMDB = 'https://api.themoviedb.org'
const versionTMDB = '3'
const imagesTMDB = 'https://image.tmdb.org/'
const fileTMBDB = 't/p/w500'

const moviesUpCommingTMDB = `${TMDB}/${versionTMDB}/movie/upcoming${keyTMDB}`
const moviesTopRatedTMDB = `${TMDB}/${versionTMDB}/movie/top_rated${keyTMDB}`
const seriesTopRatedTMDB = `${TMDB}/${versionTMDB}/tv/top_rated${keyTMDB}`
const movieTMDB = `${TMDB}/${versionTMDB}/search/movie${keyTMDB}`
const getCoverTMDB = (path: string): string =>
    `${imagesTMDB}/${fileTMBDB}/${path}`

export const uriTMDB = {
    movies: {
        upcoming: moviesUpCommingTMDB,
        topRated: moviesTopRatedTMDB,
        movie: movieTMDB
    },
    series: {
        topRated: seriesTopRatedTMDB
    },
    getCover: getCoverTMDB
}

// Books draftbit (https://example-data.draftbit.com/)
export const drafbit = 'https://example-data.draftbit.com/books'

// Google Books (https://developers.google.com/books/docs/overview)
