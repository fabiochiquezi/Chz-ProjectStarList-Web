import React, { FC } from 'react'

interface props {
    page: number
    changePage: (page: number) => void
    maxPages: number
}

const Pagination: FC<props> = ({ page, changePage, maxPages }) => {
    console.log(maxPages)
    return (
        <ul className="flex justify-center items-center">
            {page > 2 && (
                <li
                    className="w-[50px] h-[50px] border-white border-2 rounded-full flex justify-center items-center text-md simple-button mr-[24px] opacity-10"
                    onClick={() => changePage(1)}
                >
                    1
                </li>
            )}
            {page > 1 && (
                <li
                    className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl simple-button"
                    onClick={() => changePage(page - 1)}
                >
                    {page - 1}
                </li>
            )}
            <li
                className={`w-[72px] h-[72px] border-orange-600 text-orange-600 font-bold border-2 rounded-full flex justify-center items-center text-xl simple-button ${
                    page === 1 ? '' : 'ml-[16px]'
                }`}
            >
                {page}
            </li>
            {page + 1 <= maxPages && (
                <li
                    className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl ml-[16px] simple-button"
                    onClick={() => changePage(page + 1)}
                >
                    {page + 1}
                </li>
            )}
            {page === 1 && page + 2 < maxPages && (
                <li
                    className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl ml-[20px] simple-button"
                    onClick={() => changePage(page + 2)}
                >
                    {page + 2}
                </li>
            )}
            {page + 5 < maxPages && (
                <li
                    className="w-[50px] h-[50px] border-white border-2 rounded-full flex justify-center items-center text-md simple-button ml-[24px] opacity-10"
                    onClick={() => changePage(page + 10)}
                >
                    ..{page + 5}
                </li>
            )}
        </ul>
    )
}

export { Pagination }
