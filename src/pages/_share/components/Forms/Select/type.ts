import { ChangeEvent, ReactNode } from 'react'

export interface ISelectProps {
  name: string
  className?: string
  children: ReactNode
  defaultValue: string
  error?: string | undefined
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
