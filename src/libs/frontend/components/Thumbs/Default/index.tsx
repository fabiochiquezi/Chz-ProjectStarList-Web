import { FC } from 'react'
import { IThumbProps } from '../type'

export type IThumb = FC<IThumbProps>

const Thumb: IThumb = ({ thumb, title, className = '' }) => (
  <div
    data-testid="Thumb"
    className={`thumb mb-14 lg:mb-16 w-[150px] lg:w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100 ${className}`}
  >
    <div className="w-[150px] lg:w-[170px] h-[220px] overflow-hidden">
      <div className={'w-[150px] lg:w-[170px] h-[220px] overflow-hidden rounded skeleton'}>
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
