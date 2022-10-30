import { useSetUtils } from '../../../context/UtilsContext/types'
import React from 'react'

interface ThumbProps {
    thumb: string
    index: number
}

const SimpleThumb: React.FC<ThumbProps> = ({ thumb, index }) => {
    const { modal } = useSetUtils()

    return (
        <div
            key={index}
            className="thumb mb-14 lg:mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100"
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
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                        // alt={name ?? name}
                        // title={name ?? name}
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

export { SimpleThumb }
