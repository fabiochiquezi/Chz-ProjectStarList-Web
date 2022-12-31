export interface DBTime { createdAt: Date; lastUpdate: Date }
export interface DBIndex { index: number }
export interface DBUID { uid: string }

export type fromDB<T> = DBUID & T
export type fromDBwithTime<T> = DBUID & DBTime & T
export type fromDBwithIndex<T> = DBUID & DBIndex & T
export type fromDBfull<T> = DBUID & DBTime & DBIndex & T
