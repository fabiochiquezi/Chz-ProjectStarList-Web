import { GetServerSideProps } from 'next'
import { workTypes } from '../../../domain/Globals'
import { getMovie } from '../../../external/TMDB/getMovie'
import { getSerie } from '../../../external/TMDB/getSerie'
import { getMovies } from '../../../external/TMDB/getMovies'
import { getSeries } from '../../../external/TMDB/getSeries'
import { getGenreMovies } from '../../../external/TMDB/getGenreMovies'
import { discoverMovies } from '../../../external/TMDB/discoverMovies'
import { discoverSeries } from '../../../external/TMDB/discoverSeries'
import { getGenreSeries } from '../../../external/TMDB/getGenreSeries'
import { GetList, Genre, Movie, Serie } from '../../../external/TMDB/types'

type TGetData = (
  typeQ: string,
  genreQ: string,
  pageQ: string,
  searchQ: string
) => Promise<{
  genreList: Genre[]
  workList: GetList<Movie> | GetList<Serie>
}>

const getData: TGetData = async (typeQ, genreQ, pageQ, searchQ) => {
  let genresPromise
  let listPromise

  switch (typeQ) {
    case 'movies':
      genresPromise = getGenreMovies()
      if (genreQ) listPromise = discoverMovies([genreQ], pageQ)
      if (searchQ) listPromise = getMovie(searchQ, pageQ)
      if (!searchQ && !genreQ) listPromise = getMovies(pageQ)
      break

    case 'series':
      genresPromise = getGenreSeries()
      if (genreQ) listPromise = discoverSeries([genreQ], pageQ)
      if (searchQ) listPromise = getSerie(searchQ, pageQ)
      if (!searchQ && !genreQ) listPromise = getSeries(pageQ)
      break
  }

  const [genreList, workList] = await Promise.all([
    genresPromise,
    listPromise
  ])
  if (!genreList || !workList) throw new Error('500')
  return { genreList, workList }
}

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { type, page, search, genre } = context.query
    const typeQ = type ? String(type) : 'movies'
    const pageQ = page ? String(page) : '1'
    const searchQ = search ? String(search) : ''
    const genreQ = genre ? String(genre) : ''

    const isTypePermited = workTypes.includes(typeQ)
    if (!isTypePermited) throw new Error('Invalid type')

    const searchAndFiltersTogether = search && genreQ
    if (searchAndFiltersTogether) throw new Error('Bad Request')

    const request = await getData(typeQ, genreQ, pageQ, searchQ)
    return {
      props: { data: { ok: true, request, error: '' } }
    }
  } catch (e: unknown) {
    let message = ''
    if (e instanceof Error) message = e.message
    const res = { ok: false, request: {}, error: message }
    return { props: { data: res } }
  }
}
