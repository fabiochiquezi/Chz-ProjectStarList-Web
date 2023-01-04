import { IPresentComponent } from './../../types'
import { ChangeEvent } from 'react'

export interface ISearchProps extends IPresentComponent {
  value: string
  callReset: () => void
  callSearch: (search: string) => Promise<void> | void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
