import { SpinIcon } from '../../../assets'
import React, { FC } from 'react'

interface ILoadingProps {
  height?: string
  classList?: string
}

const LoadingPage: FC<ILoadingProps> = ({ height = 'h-screen', classList }) => (
  <div
    className={`flex flex-col items-center justify-center ${height} ${classList}`}
    data-cy="load-page"
    data-testid="LoadingPage"
  >
    <SpinIcon width={32} height={32} color="#FB923C" />
  </div>
)

export { LoadingPage }
