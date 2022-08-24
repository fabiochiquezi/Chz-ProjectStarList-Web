import Link from 'next/link'
import React from 'react'

type props = {
    text: string
    path: string
    width?: number
}

const Button01: React.FC<props> = ({ text, path, width }) => {
    const wide = width ? `w-[${width}px]` : 'auto'
    return (
        <Link href={path}>
            <a
                className={`uppercase text-center text-orange-400 lg:text-sm py-[8px] px-5 border-orange-400 border-2 rounded-md lg:-border-none hover:opacity-50 simple-button inline-block `}
            >
                {text}
            </a>
        </Link>
    )
}

export default Button01
