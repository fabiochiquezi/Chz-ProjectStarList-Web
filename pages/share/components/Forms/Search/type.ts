import { ChangeEvent } from 'react'

export interface ISearchProps {
  value: string
  className?: string
  callReset: () => void
  callSearch: (search: string) => Promise<void> | void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
