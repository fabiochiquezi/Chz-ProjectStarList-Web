export type { DBIndex, DBTime, DBUID, fromDB, fromDBwithTime, fromDBwithIndex, fromDBfull } from './typescript/types/DB'
export type { Resp } from './typescript/types/Response'
export type { IOverwrite } from './typescript/types/Overwrite'
export { narrowString } from './typescript/fns/narrowing'
export { isString, isUndefined } from './typescript/fns/testTypes'

export { asyncPipe } from './functional/asyncPipe'

export { formatDataFromDB } from './firebase/format/formatDataFromDB'
export { signInWithGoogle } from './firebase/signIn'
export { getFireFns } from './firebase/functions'
