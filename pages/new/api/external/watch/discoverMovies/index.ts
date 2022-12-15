import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { Movie } from 'core'
import { WatchList } from '../../../../types/watch'

export type DiscoverMovies = (
  genres: string[],
  page: string
) => Promise<WatchList<Movie>>

const discoverMovies: DiscoverMovies = async (genres, page) => {
  const moviesTopRated = `${base}/discover/movie${apiKey + keyTMDB}`
  const uri = `${moviesTopRated}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}&with_watch_monetization_types=flatrate`
  const get: { data: WatchList<Movie> } = await axios.get(uri)
  const formatedData = format(get.data)
  return formatedData
}

export { discoverMovies }
