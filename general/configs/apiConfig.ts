export const keyTMDB = '?api_key=d8e3f7af0b3a6ce1d6ef511c0fd94259'
export const TMDB = 'https://api.themoviedb.org'
export const versionTMDB = '3'
export const imagesTMDB = 'https://image.tmdb.org/'
export const fileConfigTMDB = 't/p/w500'

export const moviesUpCommingTMDB = `${TMDB}/${versionTMDB}/movie/upcoming${keyTMDB}`
export const moviesTopRatedTMDB = `${TMDB}/${versionTMDB}/movie/top_rated${keyTMDB}`
export const seriesTopRatedTMDB = `${TMDB}/${versionTMDB}/tv/top_rated${keyTMDB}`
export const getTMDBCoverURI = (path: string): string =>
    `${imagesTMDB}/${fileConfigTMDB}/${path}`

export const googleKey = 'AIzaSyBgdAJTfv2pfCj6pqge06xijmROp9AW-Dw'
// export const twitchIgdbClientID = 'cbq50ck61tf3e0iosgkaezz9sdh2xa'
// export const twitchIgdbKey = 'acyvnjana0d5tiu9u4q0d8ycwsd281'
// export const igdbAuthentication = `https://id.twitch.tv/oauth2/token?client_id=${twitchIgdbClientID}&client_secret=${twitchIgdbKey}&grant_type=client_credentials`
