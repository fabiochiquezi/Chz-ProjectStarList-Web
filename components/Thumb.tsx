import React from 'react'
import { catalogI } from '../general/types/catalog'

interface props {
    index: number
    thumb: string
    name: string
}

const Thumb: React.FC<props> = ({ index, thumb, name }) => {
    return (
        <div
            key={index}
            className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100"
        >
            <div className="w-[170px] h-[220px] overflow-hidden">
                <img src={thumb} width={170} height={220} />
            </div>

            <h3 className="mt-3 text-[16px] break-word">{name}</h3>
        </div>
    )
}

export default Thumb
