import { db } from 'firebase/settings'
import { collection, getDocs } from 'firebase/firestore'
import { Movie, Serie } from 'types/TMDB'

export async function getDoing(
    userName: string
): Promise<Array<Movie | Serie>> {
    const list: any[] = []
    const collect = collection(db, 'catalog', userName, 'doing')
    const querySnapshot = await getDocs(collect)
    querySnapshot.forEach(doc => {
        list.push({ uid: doc.id, ...doc.data() })
    })
    return list
}