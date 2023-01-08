import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { GetList, Serie } from '../types'

export type GetSeries = (page: string) => Promise<GetList<Serie>>

const getSeries: GetSeries = async page => {
  const seriesTopRated = `${base}/tv/top_rated${apiKey + keyTMDB}`
  const uri = `${seriesTopRated}&page=${page}`
  const get: { data: GetList<Serie> } = await axios.get(uri)
  const formatedData = format(get.data)
  return formatedData
}

export { getSeries }
