import React, { FC } from 'react'
import { BtnOutline } from './BtnOutline'

interface IMenu {
  userName: string
  catalogType: string
}

const Menu: FC<IMenu> = ({ userName, catalogType }) => {
  return (
    <header>
      <ul className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end items-center">
        <li>
          <BtnOutline
            href={`/${userName}?catalog=doing`}
            isActive={catalogType === 'doing' || !catalogType}
            text="DOING"
          />
        </li>
        <li>
          <BtnOutline
            href={`/${userName}?catalog=did`}
            isActive={catalogType === 'did'}
            text="DONE"
          />
        </li>
        <li>
          <BtnOutline
            href={`/${userName}?catalog=illdo`}
            isActive={catalogType === 'illdo'}
            text="I'LL DO"
          />
        </li>
      </ul>
    </header>
  )
}

export { Menu }
