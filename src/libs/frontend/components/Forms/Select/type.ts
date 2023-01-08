import { ChangeEvent, ReactNode } from 'react'
import { IPresentComponent } from '../../types'

export interface ISelectProps extends IPresentComponent {
  name: string
  children: ReactNode
  defaultValue: string
  error?: string | undefined
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
