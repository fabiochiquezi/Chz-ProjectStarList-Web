import { SpinIcon } from '../../../assets'
import React, { FC } from 'react'

export type ILoadingPage = FC<{
  height?: string
  classList?: string
}>

const LoadingPage: ILoadingPage = ({ height = 'h-screen', classList }) => (
  <div
    className={`flex flex-col items-center justify-center ${height} ${classList}`}
    data-testid="LoadingPage"
  >
    <SpinIcon width={32} height={32} color="#FB923C" />
  </div>
)

export { LoadingPage }
