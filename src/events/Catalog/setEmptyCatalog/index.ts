import { getFireFns } from '../../utils'
import { IsetEmptyCatalog } from '../useCases'
const { setDocData } = getFireFns('catalog')

export const setEmptyCatalog: IsetEmptyCatalog = async id => await setDocData(id)({})

