import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { GetList, Serie } from '../types'
import { format } from '../_helpers/format'

export type DiscoverSeries = (
  genres: string[],
  page: string
) => Promise<GetList<Serie>>

const discoverSeries: DiscoverSeries = async (genres, page) => {
  const moviesTopRated = `${base}/discover/tv${apiKey + keyTMDB}`
  const uri = `${moviesTopRated}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}`
  const get: { data: GetList<Serie> } = await axios.get(uri)
  const formatedData = format(get.data)
  return formatedData
}

export { discoverSeries }
