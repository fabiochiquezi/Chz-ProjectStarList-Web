import { FC, useState } from 'react'
import { Search as SearchInput } from '../../../../_share/components'

export type ISearch = FC<{
  onSearch: (search: string) => void,
  onReset: () => void
}>

const Search: ISearch = ({ onSearch, onReset }) => {
  const [search, setSearch] = useState('')

  function handleSearch(): void {
    onSearch(search)
  }

  return (
    <div
      data-testid="SearchMenu"
      className="w-[200px] lg:w-[260px] mr-6 lg:mr-8 mt-1"
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
