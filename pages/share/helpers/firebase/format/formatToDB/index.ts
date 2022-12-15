import { DocumentData } from 'firebase/firestore'

type IGeneralFormat = <T>(doc: DocumentData) => T

const formatToDB: IGeneralFormat = doc => {
  const data = doc.data()
  return { ...data, firebaseUID: doc.id }
}

export { formatToDB }
