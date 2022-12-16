import { FC } from 'react'

export interface IThumbProps {
  thumb: string
  title: string
  className?: string
}

const Thumb: FC<IThumbProps> = ({ thumb, title, className = '' }) => (
  <div
    data-testid="Thumb"
    data-cy="thumb-default"
    className={`thumb mb-14 lg:mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100 ${className}`}
  >
    <div className="w-[170px] h-[220px] overflow-hidden">
      <div className={'w-[170px] h-[220px] overflow-hidden rounded skeleton'}>
        <img
          src={thumb}
          alt={title}
          title={title}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          onError={e => {
            const item = e.target as HTMLElement
            item.classList.add('img-error')
            item.style.display = 'none'
          }}
        />
      </div>
    </div>
  </div>
)

export { Thumb }
