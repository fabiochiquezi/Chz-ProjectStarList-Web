import { User } from 'firebase/auth'
import { ISignUp } from '../useCases'
import { createUser } from './createUser'
import { asyncPipe } from '../../../../libs/functional'

export const signUp: ISignUp = afterSignUpCB => async (user) =>
  asyncPipe<User, User>(createUser, ...afterSignUpCB)(user)

