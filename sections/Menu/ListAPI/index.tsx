import { SelectButton } from 'components/Forms/Select/Button'
import { Search } from 'components/Forms/Search/Default'
import React, { FC, memo, useState } from 'react'
import { useRouter } from 'next/router'

interface props {
    changeSelect: (e: MouseEvent) => void
    searchFn: (search: string) => Promise<void>
    reqSearch: string
}

const MenuListAPI: FC<props> = ({ changeSelect, searchFn, reqSearch = '' }) => {
    const router = useRouter()
    const routerType = router.query.type
    const [search, setSearch] = useState(reqSearch)

    return (
        <div className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end">
            <div className="w-[200px] lg:w-[260px] mr-6 lg:mr-8 mt-1">
                <Search
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    callSearch={searchFn}
                />
            </div>

            <div>
                <SelectButton
                    label=""
                    name="typeSearch"
                    onChange={changeSelect}
                    value={routerType}
                    error=""
                    defaultValue={routerType as string}
                >
                    <option
                        className="bg-primary text-white h-10"
                        value={'movies'}
                    >
                        Movies
                    </option>
                    <option
                        className="bg-primary text-white h-10"
                        value={'series'}
                    >
                        Series
                    </option>
                    {/* <option className="bg-primary text-white" value={'books'}>
                        Books
                    </option> */}
                </SelectButton>
            </div>
        </div>
    )
}

export default memo(MenuListAPI)
