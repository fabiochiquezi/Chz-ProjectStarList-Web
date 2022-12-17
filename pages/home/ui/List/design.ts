import { IPresentComponent } from 'pages/types'
import { FC, ReactElement } from 'react'

interface IWorkData {
  title: string,
  thumb: string
}

export type IThumb = FC<{
  title: string,
  thumb: string
} & IPresentComponent>

export type ITitle = FC<{
  title: string,
  description: string
} & IPresentComponent>

export type IList = FC<{
  Title: ReactElement<IThumb>,
  Thumb: (props: IWorkData) => ReactElement<IThumb>
  list: IWorkData[]
}>
