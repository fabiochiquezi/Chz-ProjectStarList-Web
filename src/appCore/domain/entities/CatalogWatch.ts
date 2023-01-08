import { Movie as MovieTMDB, Serie as SerieTMDB } from '../../external/TMDB/types'


export interface Movie extends MovieTMDB {
  catalogType: string
}

export interface Serie extends SerieTMDB {
  catalogType: string
}
