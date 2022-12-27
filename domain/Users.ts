import { User as UserFirebase } from 'firebase/auth'

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U


export type User = Overwrite<UserFirebase, { email: string | null }> & {
  userName: string
  email: string
}
