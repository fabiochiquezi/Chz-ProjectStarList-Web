import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { Movie } from 'core'
import { WatchList } from '../../../../types/watch'

export type GetMovie = (
  movie: string,
  page: string
) => Promise<WatchList<Movie>>

const getMovie: GetMovie = async (movie, page) => {
  const searchMovie = `${base}/search/movie${apiKey + keyTMDB}`
  const uri = `${searchMovie}&query=${movie}&page=${page}`
  const get: { data: WatchList<Movie> } = await axios.get(uri)
  const formatedData = format(get.data)
  return formatedData
}

export { getMovie }
