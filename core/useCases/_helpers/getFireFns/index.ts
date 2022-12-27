import { doc, DocumentData, DocumentReference, DocumentSnapshot, getDoc, setDoc, SnapshotOptions } from 'firebase/firestore'
import { db } from '../../../_settings'

type IGetDocRef = (id: string) => DocumentReference<DocumentData>
type IGetDocSnap = (id: string) => Promise<DocumentSnapshot<DocumentData>>
type IGetDocData = (id: string) => Promise<(options?: SnapshotOptions | undefined) => DocumentData | undefined>
type IVerifyDocExist = (id: string) => Promise<boolean>
type ISetDocData = (id: string) => (data: Record<string, string>) => Promise<void>

export type IGetFireFns = (table: string) => {
  getDocRef: IGetDocRef;
  getDocSnap: IGetDocSnap;
  getDocData: IGetDocData;
  verifyDocExist: IVerifyDocExist;
  setDocData: ISetDocData
}

export const getFireFns: IGetFireFns = (table) => {
  const getDocRef: IGetDocRef = id => doc(db, table, id)
  const getDocSnap: IGetDocSnap = async id => await getDoc(getDocRef(id))
  const getDocData: IGetDocData = async id => (await getDocSnap(id)).data
  const verifyDocExist: IVerifyDocExist = async id => (await getDocSnap(id)).exists()
  const setDocData: ISetDocData = id => async data => await setDoc(getDocRef(id), data)

  return {
    getDocRef,
    getDocSnap,
    getDocData,
    verifyDocExist,
    setDocData
  }
}
