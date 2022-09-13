import { useSetUtils } from '../../../context/UtilsContext/types'
import React from 'react'

interface props {
    index: number
    thumb: string
    name: string
}

const Thumb: React.FC<props> = ({ index, thumb, name }) => {
    const { openModalAlterItem } = useSetUtils()

    return (
        <div
            key={index}
            className="thumb mb-14 lg:mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100 cursor-pointer simple-button"
            onClick={() => openModalAlterItem({ index, thumb })}
            data-cy="thumb-default"
            data-testid="thumb-default"
        >
            <div className="w-[170px] h-[220px] overflow-hidden">
                <div
                    className={
                        'w-[170px] h-[220px] overflow-hidden rounded skeleton'
                    }
                >
                    <img
                        src={thumb}
                        alt={name ?? name}
                        title={name ?? name}
                        onError={e => {
                            const item = e.target as HTMLElement
                            item.style.display = 'none'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export { Thumb }
