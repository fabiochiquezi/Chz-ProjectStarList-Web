import { User } from 'firebase/auth'
import { ISignUp } from '../useCases'
import { createUser } from './createUser'
import { initiateCatalog } from './initiateCatalog'
import { asyncPipe } from '../../../_helpers/functional/asyncPipe'

export const signUp: ISignUp = async (user) =>
  asyncPipe<User, User>(createUser, initiateCatalog)(user)

