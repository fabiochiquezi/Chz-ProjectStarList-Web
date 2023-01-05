import { Search as SearchInput } from '../../../../../libs/frontend/components'
import { FC, useState } from 'react'

export type ISearch = FC<{
  onSearch: (search: string) => void,
  onReset: () => void
}>

const Search: ISearch = ({ onSearch, onReset }) => {
  const [search, setSearch] = useState('')

  function handleSearch(): void {
    console.log('aaa')
    onSearch(search)
  }

  return (
    <div
      data-testid="SearchMenu"
      className="w-[300px] lg:w-[260px] lg:mr-8 mt-1"
    >
      <SearchInput
        value={search}
        callSearch={handleSearch}
        callReset={onReset}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
