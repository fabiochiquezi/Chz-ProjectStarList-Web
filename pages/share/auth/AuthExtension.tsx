import { Auth } from './Auth'
import Router from 'next/router'
import { useAlert } from '../portals'
import { signIn, signOut, authState } from './api'

export const AuthNext = Auth(Router)
export const AuthFirebase = AuthNext(useAlert)(signIn, authState, signOut)
