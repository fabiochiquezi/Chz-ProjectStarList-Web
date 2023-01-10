import React, { useRef } from 'react'
import styles from './styles.module.css'
import { CloseIcon } from '../../../../../libs/frontend/assets'

interface ThumbProps {
  id: string | number
  thumb: string
  title: string
  openModalUpdate: (id: string | number) => void
  openModalDelete: (id: string | number) => void
}

const Thumb: React.FC<ThumbProps> = ({ thumb, title, openModalUpdate, openModalDelete, id }) => {
  const errorDiv = useRef<HTMLDivElement>(null)

  return (
    <div
      className={`thumb mb-14 lg:mb-16 w-[150px] sm:w-[170px] order-3 lg:col-span-1  2xl:scale-100 anim-button relative ${styles.Box}`}
      data-testid="Thumb"
    >
      <div className="absolute left-0 top-0 w-[150px] sm:w-[170px] h-[220px] transition duration-150 ease-out opacity-0 hover:opacity-100" onClick={() => openModalUpdate(id)}>
        <div className="bg-black opacity-75 w-full h-full"></div>
        <span className="text-skin-primary font-thin text-4xl absolute left-[50%] top-[50%] ml-[-15px] mt-[-15px]">
          +
        </span>
      </div>
      <div className="w-[150px] sm:w-[170px] h-[220px] overflow-hidden">
        <div className="w-[150px] sm:w-[170px] h-[220px] overflow-hidden rounded skeleton">
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
        </div>
        <div className={`text-center w-[170px] mx-auto mt-3 inline-block flex items-center justify-between ${styles.BarIcons}`}>
          <div
            className={styles.CloseIcon}
            onClick={() => openModalDelete(id)}
          >
            <CloseIcon color="#ef4444" width={22} height={18} />
          </div>

        </div>
      </div>
    </div>
  )
}

export { Thumb }
