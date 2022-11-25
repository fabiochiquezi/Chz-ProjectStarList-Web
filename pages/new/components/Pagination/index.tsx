import React, { FC } from 'react'

interface PaginationType {
    page: number
    changePage: (page: number) => void
    maxPages: number
}

const Pagination: FC<PaginationType> = ({ page, changePage, maxPages }) => {
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
            {page > 1 && (
                <li
                    className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl anim-button"
                    onClick={() => changePage(page - 1)}
                >
                    {page - 1}
                </li>
            )}
            <li
                className={`w-[72px] h-[72px] border-orange-600 text-orange-600 font-bold border-2 rounded-full flex justify-center items-center text-xl anim-button ${
                    page === 1 ? '' : 'ml-[16px]'
                }`}
            >
                {page}
            </li>
            {page + 1 <= maxPages && (
                <li
                    className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl ml-[16px] anim-button"
                    onClick={() => changePage(page + 1)}
                >
                    {page + 1}
                </li>
            )}
            {page === 1 && page + 2 < maxPages && (
                <li
                    className="w-[64px] h-[64px] border-white border-2 rounded-full flex justify-center items-center text-xl ml-[20px] anim-button"
                    onClick={() => changePage(page + 2)}
                >
                    {page + 2}
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
