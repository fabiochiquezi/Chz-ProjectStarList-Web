import React from 'react'
import SpinIcon2 from 'public/icons/SpinIcon2'

const Loading: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen"
            data-cy="load-page"
        >
            <SpinIcon2 width={32} height={32} color="#FB923C" />
        </div>
    )
}

export default Loading
