import { SelectButton } from 'components/Forms/Select/Button'
import { Search } from 'components/Forms/Search/Default'
import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'

interface props {
    onLoad: () => void
}

const MenuListAPI: FC<props> = ({ onLoad }) => {
    const router = useRouter()
    const routerType = router.query.type
    const [search, setSearch] = useState('')

    function onSelectMenuChange(e: any): void {
        onLoad()
        router.push(e.target.value)
    }

    return (
        <div className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end">
            <div className="w-[200px] lg:w-[260px] mr-6 lg:mr-8 mt-1">
                <Search
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div>
                <SelectButton
                    label=""
                    name="typeSearch"
                    onChange={onSelectMenuChange}
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
                    <option className="bg-primary text-white" value={'books'}>
                        Books
                    </option>
                </SelectButton>
            </div>
        </div>
    )
}

export { MenuListAPI }
