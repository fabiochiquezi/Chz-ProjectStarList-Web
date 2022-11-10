import axios from 'axios'
import { keyTMDB } from '../../keys'
import { List, Serie } from 'types/TMDB'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'

export type GetSeries = (page: string) => Promise<List<Serie>>

const getSeries: GetSeries = async page => {
    const seriesTopRated = `${base}/tv/top_rated${apiKey + keyTMDB}`
    const uri = `${seriesTopRated}&page=${page}`
    const get: { data: List<Serie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getSeries }
