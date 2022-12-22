import { ParsedUrlQuery } from 'querystring'
import React, { FC } from 'react'

interface PaginationType {
  maxPages: number
  query: ParsedUrlQuery
  load: () => void
  push: any
}

const Pagination: FC<PaginationType> = ({ maxPages, query, load, push }) => {
  const { page, type, search, genre } = query
  const parsePage = parseInt(String(page)) || 1

  function changePage(newPage: number): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    load()
    if (search) {
      push(`${type}?search=${search}&page=${newPage}`)
      return
    }
    if (genre) {
      push(`${type}?genre=${genre}&page=${newPage}`)
      return
    }
    push(`${type}?page=${newPage}`)
  }

  return (
    <ul
      className="flex justify-center items-center"
      data-testid="Pagination"
    >
      {/* {page > 2 && (
        <li
          className="w-[50px] h-[50px] border-white border-2 rounded-full flex justify-center items-center text-md anim-button mr-[24px] opacity-10"
          onClick={() => changePage(1)}
        >
          1
        </li>
      )} */}
      {parsePage > 1 && (
        <li
          className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl anim-button"
          onClick={() => changePage(parsePage - 1)}
        >
          {parsePage - 1}
        </li>
      )}
      <li
        className={`w-[72px] h-[72px] border-orange-600 text-orange-600 font-bold border-2 rounded-full flex justify-center items-center text-xl anim-button ${parsePage === 1 ? '' : 'ml-[16px]'
          }`}
      >
        {parsePage}
      </li>
      {parsePage + 1 <= maxPages && (
        <li
          className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl ml-[16px] anim-button"
          onClick={() => changePage(parsePage + 1)}
        >
          {parsePage + 1}
        </li>
      )}
      {parsePage === 1 && parsePage + 2 < maxPages && (
        <li
          className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl ml-[20px] anim-button"
          onClick={() => changePage(parsePage + 2)}
        >
          {parsePage + 2}
        </li>
      )}
      {/* {page + 5 < maxPages && (
        <li
          className="w-[50px] h-[50px] border-white border-2 rounded-full flex justify-center items-center text-md anim-button ml-[24px] opacity-10"
          onClick={() => changePage(page + 10)}
        >
          ..{page + 5}
        </li>
      )} */}
    </ul>
  )
}

export { Pagination }
