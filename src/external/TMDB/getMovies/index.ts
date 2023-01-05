import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { GetList, Movie } from '../types'
import { format } from '../_helpers/format'

export type GetMovies = (page: string) => Promise<GetList<Movie>>

const getMovies: GetMovies = async page => {
  const moviesTopRated = `${base}/movie/top_rated${apiKey + keyTMDB}`
  const uri = `${moviesTopRated}&page=${page}`
  const get: { data: GetList<Movie> } = await axios.get(uri)
  const formatedData = format(get.data)
  return formatedData
}

export { getMovies }
