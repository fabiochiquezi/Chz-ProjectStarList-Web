export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: any[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  thumb: string
}

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

export interface GenreWatch {
  id: number
  name: string
}
