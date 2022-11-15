import SpinIcon from '../../../pages/share/assets/icons/SpinIcon'
import React, { FC } from 'react'

interface props {
    height?: string
}

const LoadingStruct: FC<props> = ({ height = 'h-screen' }) => (
    <div
        className={`flex flex-col items-center justify-center ${height}`}
        data-cy="load-page"
        data-testid="load-structure"
    >
        <SpinIcon width={32} height={32} color="#FB923C" />
    </div>
)

export { LoadingStruct }
