import { getFireFns } from '../../utils'
import { ISetUser } from '../useCases'
const { setDocData } = getFireFns('users')

export const setUser: ISetUser = (id) => async data => await setDocData(id)(data)
