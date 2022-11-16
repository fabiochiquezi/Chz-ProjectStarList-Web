import { Auth } from '.'
import { authState } from './api/authState'
import { signIn as signInFirebase } from './api/signIn'
import { signOut as signOutFirebase } from './api/signOut'

export const AuthFirebase = Auth(signInFirebase, authState, signOutFirebase)
