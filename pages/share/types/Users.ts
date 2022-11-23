import { User as UserFirebase } from 'firebase/auth'

export interface User extends UserFirebase {
    userName: string
}

export interface UserDB extends User {
    uid: string
}
