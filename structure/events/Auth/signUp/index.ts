import { User } from 'firebase/auth'
import { ISignUp } from '../useCases'
import { createUser } from './createUser'
import { initiateCatalog } from './initiateCatalog'
import { asyncPipe } from '../../../../libs/helpers'

export const signUp: ISignUp = async (user) =>
  asyncPipe<User, User>(createUser, initiateCatalog)(user)

