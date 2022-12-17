import { IPresentComponent } from 'pages/types'
import { FC, ReactElement } from 'react'

export type ISignInEvent = () => Promise<void>

export type IBtnSignIn = FC<{
  title?: string,
  onClick: ISignInEvent
} & IPresentComponent>

export type IHero = FC<{
  title: string,
  description: string,
  BtnSignIn: ReactElement<IBtnSignIn>
}>
