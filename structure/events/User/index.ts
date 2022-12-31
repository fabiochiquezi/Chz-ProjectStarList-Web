import { getUser } from './getUser'
import { setUser } from './setUser'
import { IGetUser, ISetUser } from './useCases'

interface IUserFirebase { setUser: ISetUser; getUser: IGetUser; }
export const UserFirebase: IUserFirebase = ({ setUser, getUser })
