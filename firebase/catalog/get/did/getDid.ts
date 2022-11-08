import { db } from '../../../settings'
import { Movie, Serie } from 'types/TMDB'
import { collection, getDocs } from 'firebase/firestore'

export async function getDid(userName: string): Promise<Array<Movie | Serie>> {
    const list: any[] = []
    const collect = collection(db, 'catalog', userName, 'did')
    const querySnapshot = await getDocs(collect)
    querySnapshot.forEach(doc => list.push({ uid: doc.id, ...doc.data() }))
    return list
}
