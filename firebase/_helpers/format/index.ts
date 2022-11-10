import { DocumentData } from 'firebase/firestore'

type GeneralFormat = <T>(doc: DocumentData) => T

const generalFormat: GeneralFormat = doc => {
    const data = doc.data()
    return { ...data, firebaseUID: doc.id }
}

export { generalFormat }
