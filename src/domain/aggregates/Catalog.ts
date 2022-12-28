import { Movie, Serie } from '../'

export interface GetList<T extends Movie | Serie> {
  page: number
  total_pages: number
  total_results: number
  results: T[]
}
