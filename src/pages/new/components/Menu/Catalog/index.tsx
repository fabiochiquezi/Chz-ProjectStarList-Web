import { SelectButton } from '../../../../../../libs/frontend/components'
import React, { ChangeEvent, FC } from 'react'

export type ICatalog = FC<{
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  defaultValue: string
}>

const Catalog: ICatalog = ({ onChange, defaultValue }) => {
  return (
    <SelectButton
      name="typeSearch"
      onChange={onChange}
      defaultValue={defaultValue}
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
  )
}

export { Catalog }
