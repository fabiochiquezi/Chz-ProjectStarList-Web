import { User } from 'firebase/auth'
import { ISignUp } from '../useCases'
import { createUser } from './createUser'
import { asyncPipe } from '../../../../_helpers/'
import { initiateCatalog } from './initiateCatalog'

export const signUp: ISignUp = async (user) =>
  asyncPipe<User, User>(createUser, initiateCatalog)(user)

