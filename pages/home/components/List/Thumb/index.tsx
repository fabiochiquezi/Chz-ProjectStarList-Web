import { FC } from 'react'

export interface ThumbType {
    thumb: string
    title: string
}

const Thumb: FC<ThumbType> = ({ thumb, title }) => (
    <div
        className="thumb mb-14 lg:mb-16 w-[170px] order-3
                lg:col-span-1 xl:scale-90 2xl:scale-100"
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
                    title={title}
                    alt={title}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                    onError={e => {
                        const item = e.target as HTMLElement
                        item.style.display = 'none'
                    }}
                />
            </div>
        </div>
    </div>
)

export { Thumb }
