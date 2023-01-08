import { asyncPipe } from './../../../../../libs/functional'
import { User as UserFirebase } from 'firebase/auth'
import { getUser } from '../../../User/getUser'
import { signUp } from './../../signUp/index'
import { User } from '../../../../domain'

export const ifNoUserSignUp = (afterSignUpCB: any) => async (user: UserFirebase): Promise<User> =>
  asyncPipe<UserFirebase, User>(
    async (user) => await getUser(user.uid),
    async (existUser) => !existUser && await signUp(afterSignUpCB)(user)
  )(user)
