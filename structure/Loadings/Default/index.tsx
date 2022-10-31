import SpinIcon2 from 'public/icons/SpinIcon2'
import React from 'react'

const LoadingStruct: React.FC = () => (
    <div
        className="flex flex-col items-center justify-center h-screen"
        data-cy="load-page"
        data-testid="load-structure"
    >
        <SpinIcon2 width={32} height={32} color="#FB923C" />
    </div>
)

export { LoadingStruct }
