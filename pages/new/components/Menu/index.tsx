import { SelectButton, Search } from '../../../share/components'
import React, { ChangeEvent, FC, useState } from 'react'

interface MenuType {
    changeSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    searchFn: (search: string) => Promise<void>
    reqSearch?: string
    resetSearch: () => void
    routerType: string
}

const Menu: FC<MenuType> = ({
    searchFn,
    resetSearch,
    changeSelect,
    routerType = ''
}) => {
    const [search, setSearch] = useState('')

    return (
        <div className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end">
            <SelectButton
                label=""
                name="genres"
                onChange={changeSelect}
                error=""
                defaultValue={routerType}
                // className="bg-orange-600"
            >
                <option
                    className="bg-orange-600 text-white h-10"
                    value={'movies'}
                >
                    Genre
                </option>
            </SelectButton>

            <div className="w-[200px] lg:w-[260px] mr-6 lg:mr-8 mt-1">
                <Search
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    callSearch={searchFn}
                    callReset={resetSearch}
                />
            </div>

            <div>
                <SelectButton
                    error=""
                    label=""
                    name="typeSearch"
                    onChange={changeSelect}
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
    )
}

export { Menu }
