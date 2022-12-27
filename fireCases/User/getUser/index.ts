import { getFireFns } from '../../utils'
import { IGetUser } from '../useCases'
const { getDocData } = getFireFns('users')

export const getUser: IGetUser = async id => await getDocData(id) ?? null
