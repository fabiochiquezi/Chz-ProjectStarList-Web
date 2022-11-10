import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'

export type PostCatalog = (userName: string) => Promise<void>

const postCatalog: PostCatalog = async userName => {
    await setDoc(doc(db, 'catalog', userName), {})
}

export { postCatalog }
