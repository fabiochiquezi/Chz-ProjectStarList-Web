import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { GetList, Movie } from '../types'

export type GetMovie = (
  movie: string,
  page: string
) => Promise<GetList<Movie>>

const getMovie: GetMovie = async (movie, page) => {
  const searchMovie = `${base}/search/movie${apiKey + keyTMDB}`
  const uri = `${searchMovie}&query=${movie}&page=${page}`
  const get: { data: GetList<Movie> } = await axios.get(uri)
  const formatedData = format(get.data)
  return formatedData
}

export { getMovie }
