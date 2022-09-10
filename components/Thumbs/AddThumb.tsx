import React from 'react'

interface props {
    onClick: () => void
}

const AddThumb: React.FC<props> = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="order-2 border-2 border-gray-800 w-[170px] h-[220px] rounded-lg flex justify-center items-center text-xl text-gray-500 cursor-pointer simple-button border-dashed mb-14
            xl:w-[153px] xl:h-[198px] xl:mt-2
            2xl:w-[170px] 2xl:h-[220px] 2xl:mt-0"
            data-cy="add-thumb"
        >
            Add +
        </div>
    )
}

export default AddThumb
