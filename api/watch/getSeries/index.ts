import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { WatchList } from '../../../types/apis/watch'
import { Serie } from '../../../types/models/Catalog/Serie'

export type GetSeries = (page: string) => Promise<WatchList<Serie>>

const getSeries: GetSeries = async page => {
    const seriesTopRated = `${base}/tv/top_rated${apiKey + keyTMDB}`
    const uri = `${seriesTopRated}&page=${page}`
    const get: { data: WatchList<Serie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getSeries }
