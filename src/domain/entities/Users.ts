import { User as UserFirebase } from 'firebase/auth'
import { IOverwrite } from '../../_helpers'

export type User = IOverwrite<UserFirebase, { email: string | null }> & {
  userName: string
  email: string
}
