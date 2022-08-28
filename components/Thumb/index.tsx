import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface props {
    index: number
    thumb: string
    name: string
}

const Thumb: React.FC<props> = ({ index, thumb, name }) => {
    return (
        <div
            key={index}
            className="mb-14 lg:mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100"
        >
            <div className="w-[170px] h-[220px] overflow-hidden">
                {thumb ? (
                    <div
                        className={`w-[170px] h-[220px] overflow-hidden rounded skeleton`}
                    >
                        <img
                            src={thumb}
                            onError={e => {
                                const item = e.target as HTMLElement
                                item.style.display = 'none'
                            }}
                        />
                    </div>
                ) : (
                    <Skeleton count={5} />
                )}
            </div>

            {/*<h3 className="mt-3 text-[16px] break-word">{name}</h3>*/}
        </div>
    )
}

export default Thumb
