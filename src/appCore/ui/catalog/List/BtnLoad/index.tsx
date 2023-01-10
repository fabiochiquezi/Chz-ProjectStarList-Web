import React from 'react'

interface props {
  onClick: () => void
}

const BtnLoad: React.FC<props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="order-4 mb-28 md:mb-12 lg:mb-6 md:mt-4 lg:mt-16 flex items-center justify-center justify-self-center relative sm:col-span-3 lg:col-span-5 xl:col-span-7 active:scale-95 ease-in duration-50 animate-pulse hover:animate-none"
    data-testid="BtnLoad"
  >
    <div className="border-skin-secondary border-2 w-[120px] h-[120px] rounded-full absolute opacity-50 hover:opacity-100"></div>
    <span className="text-white text-md">More</span>
  </button>
)

export { BtnLoad }
