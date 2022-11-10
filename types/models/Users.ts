export interface User {
    displayName: string
    email: string
}

export interface UserDB extends User {
    uid: string
}
