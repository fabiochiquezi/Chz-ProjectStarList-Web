import axios from 'axios'
import { keyTMDB } from '../../keys'
import { apiKey, base } from '../config'
import { format } from '../_helpers/format'
import { WatchList } from '../../../types/apis/watch'
import { Serie } from '../../../types/models/Catalog/Serie'

export type GetSerie = (
    serie: string,
    page: string
) => Promise<WatchList<Serie>>

const getSerie: GetSerie = async (serie, page) => {
    const searchSerie = `${base}/search/tv${apiKey + keyTMDB}`
    const uri = `${searchSerie}&query=${serie}&page=${page}`
    const get: { data: WatchList<Serie> } = await axios.get(uri)
    const formatedData = format(get.data)
    return formatedData
}

export { getSerie }
