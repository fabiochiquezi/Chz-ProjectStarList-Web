import React, { FC, ReactElement } from 'react'
import { ISearch } from '../Search'

interface MenuType {
  Search: ReactElement<ISearch>
  Genre: ReactElement<any>
  Catalog: ReactElement<any>
}

const MenuWrapper: FC<MenuType> = ({
  Search,
  Genre,
  Catalog
}) => (
  <div
    className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex flex-col lg:flex-row items-center align-center justify-center mb-16 md:mb-10 lg:mb-11 lg:justify-end"
    data-testid="Menu"
  >
    <div className='mb-12 lg:mb-0'>
      {Search}
    </div>

    <div className="flex justify-between">
      {Genre}

      <div data-testid="selectType">
        {Catalog}
      </div>
    </div>
  </div>
)


export { MenuWrapper }
