import { Genre as IGenre } from '../../../external/TMDB'
import React, { ChangeEvent, FC } from 'react'
import { ParsedUrlQuery } from 'querystring'
import { MenuWrapper } from './Wrapper'
import { Catalog } from './Catalog'
import { Genre } from './Genre'
import Search from './Search'

type ISelectEvent = ChangeEvent<HTMLSelectElement>

type IMenu = FC<{
  loadPage: (url: string) => void
  genreList: IGenre[]
  query: ParsedUrlQuery
}>

const Menu: IMenu = ({ loadPage, genreList, query }) => {
  const { type, genre } = query

  const menuFns = {
    search: (search: string) => loadPage(`${type}?search=${search}`),
    resetSearch: () => loadPage(`${type}`),
    genreFilter: (e: ISelectEvent) => loadPage(`${type}?genre=${e.target.value}`),
    switchCatalog: (e: ISelectEvent) => loadPage(e.target.value)
  }

  const catalogEl = <Catalog
    defaultValue={String(type)}
    onChange={menuFns.switchCatalog}
  />
  const searchEl = <Search
    onSearch={menuFns.search}
    onReset={menuFns.resetSearch}
  />
  const genreEl = <Genre
    genreList={genreList}
    defaultValue={String(genre)}
    onChange={menuFns.genreFilter}
  />

  return <MenuWrapper Catalog={catalogEl} Search={searchEl} Genre={genreEl} />
}

export { Menu }
