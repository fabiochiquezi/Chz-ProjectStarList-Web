export type {
  DBIndex,
  DBTime,
  DBUID,
  fromDB,
  fromDBwithTime,
  fromDBwithIndex,
  fromDBfull
} from './_utils/DB'

export type { User, UserAuth, UserFull } from './entities/Users'
export type { Serie, Movie, GenreWatch } from './entities/CatalogWatch'
export type { GetList } from './aggregates/Catalog'
