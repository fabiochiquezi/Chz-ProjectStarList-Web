import { DocumentData, SnapshotOptions } from 'firebase/firestore'
import { userFns } from './../_helpers/index'

export type IGetUser = (id: string) =>
  Promise<((options?: SnapshotOptions | undefined) =>
    DocumentData | undefined) | null>

export const getUser: IGetUser = async id => await userFns.getDocData(id) ?? null
