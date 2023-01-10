import { SelectButton } from '../../../../../libs/frontend/components'
import { Genre as IGenreDomain } from '../../../../external/TMDB'
import React, { ChangeEvent, FC } from 'react'

type IGenre = FC<{
  defaultValue: string
  genreList: IGenreDomain[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}>

const Genre: IGenre = ({ defaultValue, genreList, onChange }) => (
  <SelectButton
    name="genres"
    className="mr-3"
    onChange={onChange}
    colorClass="bg-skin-primary"
    defaultValue={defaultValue}
  >
    <option
      className="bg-skin-base-primary text-white h-10"
      value={''}
      onSelect={() => console.log('ooooooooo')}
    >
      Genres
    </option>
    {genreList.map((el, index) => (
      <option
        className="bg-skin-base-primary text-white h-10"
        value={el.id}
        key={index}
      >
        {el.name}
      </option>
    ))}
  </SelectButton>
)


export { Genre }
