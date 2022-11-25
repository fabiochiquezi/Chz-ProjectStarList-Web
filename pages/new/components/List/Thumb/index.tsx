import React, { useRef } from 'react'

interface ThumbProps {
    id: string | number
    thumb: string
    title: string
    onClick: (id: string | number) => void
}

const Thumb: React.FC<ThumbProps> = ({ thumb, title, onClick, id }) => {
    const errorDiv = useRef<HTMLDivElement>(null)

    return (
        <div
            className="thumb mb-14 lg:mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100 anim-button relative"
            data-cy="thumb-default"
            data-testid="Thumb"
            onClick={() => onClick(id)}
        >
            <div className="absolute left-0 top-0 w-[170px] h-[220px] transition duration-150 ease-out opacity-0 hover:opacity-100">
                <div className="bg-black opacity-75 w-full h-full"></div>
                <span className="text-orange-600 font-thin text-4xl absolute left-[50%] top-[50%] ml-[-15px] mt-[-15px]">
                    +
                </span>
            </div>
            <div className="w-[170px] h-[220px] overflow-hidden">
                <div className="w-[170px] h-[220px] overflow-hidden rounded skeleton">
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
                            const errDiv = errorDiv.current
                            if (errDiv) errDiv.style.display = 'flex'
                        }}
                    />
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export { Thumb }
