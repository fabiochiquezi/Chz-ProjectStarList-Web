import { IPresentComponent } from '../types'

export interface IBtnProps extends IPresentComponent {
  onClick?: () => unknown
  disabled?: boolean
}
