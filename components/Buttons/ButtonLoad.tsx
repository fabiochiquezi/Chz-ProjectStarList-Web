import React from 'react'

type props = {
    onClick: () => void
}

const ButtonLoad: React.FC<props> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="order-4 md:mt-4 lg:mt-16 flex items-center justify-center justify-self-center relative
            sm:col-span-3 lg:col-span-5 xl:col-span-7
            opacity-50 hover:opacity-100 active:scale-95 ease-in duration-100"
        >
            <div className="border-indigo-400 border-2 w-[136px] h-[136px] rounded-full absolute animate-pulse"></div>
            <span className="dark:text-gray-300 text-secondary text-md">
                Load More...
            </span>
        </button>
    )
}

export default ButtonLoad
