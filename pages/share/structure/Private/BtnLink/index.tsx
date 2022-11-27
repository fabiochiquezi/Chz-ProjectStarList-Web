import React from 'react'

interface props {
    onClick: (newRoute: string) => void
    isActive: boolean
    text: string
}

const BtnLink: React.FC<props> = ({ onClick, isActive, text }) => (
    <a
        onClick={() => onClick('/new/movies')}
        className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4
        inline-block md:py-10 lg:py-0 anim-button
        ${isActive && 'text-orange-400'}`}
    >
        {text}
    </a>
)

export { BtnLink }
