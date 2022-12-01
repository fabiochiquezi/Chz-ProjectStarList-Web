import { Auth } from './Auth'
import { useAlert } from '../portals'
import { useRouter } from 'next/router'
import { AuthFirebaseAPI } from './api'

export const AuthNext = Auth(useRouter)
export const AuthFirebase = AuthNext(useAlert)(AuthFirebaseAPI)
