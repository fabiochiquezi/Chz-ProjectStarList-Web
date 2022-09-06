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
            active:scale-95 ease-in duration-50 animate-pulse hover:animate-none"
        >
            <div className="border-indigo-400 border-2 w-[120px] h-[120px] rounded-full absolute opacity-50 hover:opacity-100"></div>
            <span className="dark:text-white text-secondary text-md">More</span>
        </button>
    )
}

export default ButtonLoad
