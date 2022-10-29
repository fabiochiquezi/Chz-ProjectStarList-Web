export const keyTMDB = '?api_key=d8e3f7af0b3a6ce1d6ef511c0fd94259'
export const TMDB = 'https://api.themoviedb.org'
export const versionTMDB = '3'
export const imagesTMDB = 'https://image.tmdb.org/'
export const fileConfigTMDB = 't/p/w500'

export const TMDBupComing = `${TMDB}/${versionTMDB}/movie/upcoming${keyTMDB}`
export const getTMDBCoverURI = (path: string): string =>
    `${imagesTMDB}/${fileConfigTMDB}/${path}`
