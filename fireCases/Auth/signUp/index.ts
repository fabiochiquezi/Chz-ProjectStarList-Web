import { ISignUp } from '../useCases'
import { createUser } from './createUser'
import { initiateCatalog } from './initiateCatalog'

export const signUp: ISignUp = async (user) => {
  await createUser(user)
  await initiateCatalog(user)
}
