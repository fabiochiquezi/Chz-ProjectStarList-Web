import { SelectButton, Search } from '../../../share/components'
import React, { ChangeEvent, FC, useState } from 'react'
import { Genre } from 'pages/new/types'

interface MenuType {
    changeCatalog: (e: ChangeEvent<HTMLSelectElement>) => void
    genreFilter: (e: ChangeEvent<HTMLSelectElement>) => void
    searchFn: (search: string) => void
    resetSearch: () => void
    routerType: string
    genreList: Genre[]
    routerGenre: string
}

const Menu: FC<MenuType> = ({
    searchFn,
    genreList,
    resetSearch,
    genreFilter,
    changeCatalog,
    routerType = '',
    routerGenre = ''
}) => {
    const [search, setSearch] = useState('')
    return (
        <div
            className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex
            justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end"
            data-testid="Menu"
        >
            <div
                data-testid="SearchMenu"
                className="w-[200px] lg:w-[260px] mr-6 lg:mr-8 mt-1"
            >
                <Search
                    value={search}
                    callSearch={searchFn}
                    callReset={resetSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="flex justify-between">
                <SelectButton
                    name="genres"
                    className="mr-3"
                    onChange={genreFilter}
                    colorClass="bg-orange-600"
                    defaultValue={routerGenre}
                >
                    <option
                        className="bg-primary text-white h-10"
                        value={''}
                        onSelect={() => console.log('ooooooooo')}
                    >
                        Genre
                    </option>
                    {genreList.map((el, index) => (
                        <option
                            className="bg-primary text-white h-10"
                            value={el.id}
                            key={index}
                        >
                            {el.name}
                        </option>
                    ))}
                </SelectButton>

                <div data-testid="selectType">
                    <SelectButton
                        name="typeSearch"
                        onChange={changeCatalog}
                        defaultValue={routerType}
                    >
                        <option
                            className="bg-primary text-white h-10"
                            value="movies"
                        >
                            Movies
                        </option>
                        <option
                            className="bg-primary text-white h-10"
                            value="series"
                        >
                            Series
                        </option>
                        <option className="bg-primary text-white" value="books">
                            Books
                        </option>
                        <option className="bg-primary text-white" value="books">
                            Games
                        </option>
                    </SelectButton>
                </div>
            </div>
        </div>
    )
}

export { Menu }
