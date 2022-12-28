import { Movie, Serie } from '../../share/types'

export interface WatchList<T extends Movie | Serie> {
  page: number
  total_pages: number
  total_results: number
  results: T[]
}
