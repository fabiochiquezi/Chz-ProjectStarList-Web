import { getFireFns } from '../../../../libs/firebase'
import { User } from '../../../domain'
import { IGetUser } from '../useCases'

const { getDocData } = getFireFns('users')

export const getUser: IGetUser = async id => await getDocData(id) as User
