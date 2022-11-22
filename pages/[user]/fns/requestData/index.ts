import { Movie, Serie } from '../../../share/types'
import { getCatalogDid } from '../../api/get/catalogDid'
import { getCatalogDoing } from '../../api/get/catalogDoing'
import { getCatalogIlldo } from '../../api/get/catalogIlldo'

async function requestData(
    catalogURI: string,
    userURI: string
): Promise<Array<Movie | Serie>> {
    let list
    switch (catalogURI) {
        case 'doing':
            list = await getCatalogDoing(userURI)
            break
        case 'did':
            list = await getCatalogDid(userURI)
            break
        case 'illdo':
            list = await getCatalogIlldo(userURI)
            break
        default:
            list = await getCatalogDoing(userURI)
            break
    }
    return list
}

export { requestData }
