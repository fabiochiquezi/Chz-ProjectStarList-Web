export type GetUserName = (email: string) => string
export const getUserName: GetUserName = email => email?.split('@')[0]
