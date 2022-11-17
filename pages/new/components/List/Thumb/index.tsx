import React, { useRef } from 'react'
// import { useSetUtils } from '../../../../share'

interface ThumbProps {
    thumb: string
    index: number
    title: string
}

const Thumb: React.FC<ThumbProps> = ({ thumb, title, index }) => {
    // const { modal } = useSetUtils()
    const errorDiv = useRef<HTMLDivElement>(null)

    // if (!title) return null
    return (
        <div
            key={index}
            className="thumb mb-14 lg:mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100 simple-button"
            data-cy="thumb-default"
            data-testid="thumb-default"
            // onClick={modal.openAddItem}
        >
            <div className="w-[170px] h-[220px] overflow-hidden">
                <div
                    className={
                        'w-[170px] h-[220px] overflow-hidden rounded skeleton'
                    }
                >
                    <div
                        className="w-full h-full bg-black flex justify-center items-center text-center px-4 hidden"
                        ref={errorDiv}
                    >
                        <p>{title}</p>
                    </div>
                    <img
                        src={thumb}
                        alt={title ?? title}
                        title={title ?? title}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                        onError={e => {
                            const item = e.target as HTMLElement
                            item.style.display = 'none'
                            if (errorDiv.current) {
                                errorDiv.current.style.display = 'flex'
                            }
                        }}
                    />
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export { Thumb }
