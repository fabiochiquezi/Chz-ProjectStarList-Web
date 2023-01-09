import { ParsedUrlQuery } from 'querystring'

export const getUserName = (query: ParsedUrlQuery): string => (typeof query.user !== 'string' ? '' : query.user)

export const getCatalogType = (query: ParsedUrlQuery): string => (typeof query.catalog !== 'string' ? 'doing' : query.catalog)
