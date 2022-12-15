import { DocumentFromDB } from 'pages/types'


export interface Serie {
  backdrop_path: string
  first_air_date: string
  genre_ids: any[]
  id: number
  name: string
  origin_country: any[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  thumb: string
}

export type SerieDB = DocumentFromDB<Serie>
