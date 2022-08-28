import React from 'react'

type props = { onClick: () => void }

const AddThumb: React.FC<props> = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="order-2 border-2 border-gray-800 w-[170px] h-[220px] rounded-lg flex justify-center items-center text-xl text-gray-500 cursor-pointer simple-button border-dashed mb-14"
        >
            Add +
        </div>
    )
}

export default AddThumb
