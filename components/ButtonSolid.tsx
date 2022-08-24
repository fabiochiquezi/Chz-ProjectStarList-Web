import Link from 'next/link'
import React from 'react'

type props = {
    text: string
    path: string
    width?: number
}

const ButtonSolid: React.FC<props> = ({ text, path, width }) => {
    const wide = width ? `w-[${width}px]` : 'auto'
    return (
        <Link href={path}>
            <a
                className={`uppercase text-center text-white lg:text-sm py-[8px] px-5 bg-blue-600 rounded-md hover:opacity-50 simple-button inline-block tracking-wide`}
            >
                {text}
            </a>
        </Link>
    )
}

export default ButtonSolid
