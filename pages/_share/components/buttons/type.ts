import { IPresentComponent } from 'pages/types'
import { ReactEventHandler } from 'react'

export interface IBtnSignInProps extends IPresentComponent {
  onClick: (e?: ReactEventHandler) => unknown
}
