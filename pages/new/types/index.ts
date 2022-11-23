import { Movie, Serie } from '../../share/types'
import { WatchList } from './watch'

export interface Genre {
    id: number
    name: string
}

export interface Data<T extends Movie | Serie> {
    list: WatchList<T>
    genres: Genre[]
}
