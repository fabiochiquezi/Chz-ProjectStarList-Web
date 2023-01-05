import { Movie as MovieTMDB, Serie as SerieTMDB } from 'src/external/TMDB/types'


export interface Movie extends MovieTMDB {
  catalogType: string
}

export interface Serie extends SerieTMDB {
  catalogType: string
}
