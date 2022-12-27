import { DocumentData, SnapshotOptions } from 'firebase/firestore'

type ISetUser = (id: string) => (data: Record<string, unknown>) => Promise<void>
type IGetUser = (id: string) =>
  Promise<((options?: SnapshotOptions | undefined) => DocumentData | undefined) | null>

export type { ISetUser, IGetUser }
