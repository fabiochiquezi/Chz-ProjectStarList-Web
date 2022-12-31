import { getFireFns } from '../../../../libs/helpers'
import { IsetEmptyCatalog } from '../useCases'
const { setDocData } = getFireFns('catalog')

export const setEmptyCatalog: IsetEmptyCatalog = async id => await setDocData(id)({})

