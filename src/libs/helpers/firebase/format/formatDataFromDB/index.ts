import { DocumentData } from 'firebase/firestore'

type IGeneralFormat = <T>(doc: DocumentData) => T

const formatDataFromDB: IGeneralFormat = doc => {
  const data = doc.data()
  return { ...data, uid: doc.id }
}

export { formatDataFromDB }
