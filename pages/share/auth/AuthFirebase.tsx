import { Auth } from '.'
import Router from 'next/router'
import { authState } from './api/authState'
import { signIn as signInFirebase } from './api/signIn'
import { usePortalAlert } from '../portals/Alerts/Default'
import { signOut as signOutFirebase } from './api/signOut'

const AuthBase = Auth(usePortalAlert, Router)
export const AuthFirebase = AuthBase(signInFirebase, authState, signOutFirebase)

const test = pipe(
  Auth(usePortalAlert, Router),
  Provider => Provider(signInFirebase, authState, signOutFirebase)
)
