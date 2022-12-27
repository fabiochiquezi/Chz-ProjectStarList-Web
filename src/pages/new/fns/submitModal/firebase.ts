import { postCatalogDid } from '../../api/catalog/did'
import { postCatalogDoing } from '../../api/catalog/doing'
import { postCatalogIlldo } from '../../api/catalog/illdo'
import { submitModal } from '.'

export const submitModalFirebase = submitModal(
    postCatalogDid,
    postCatalogDoing,
    postCatalogIlldo
)
