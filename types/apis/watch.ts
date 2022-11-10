import { Movie } from '../models/Catalog/Movie'
import { Serie } from '../models/Catalog/Serie'

export interface WatchGenre {
    id: number
    name: string
}

export interface WatchList<T extends Movie | Serie> {
    page: number
    total_pages: number
    total_results: number
    results: T[]
}

export interface WatchData<T extends Movie | Serie> {
    list: WatchList<T>
    genres: WatchGenre[]
}
