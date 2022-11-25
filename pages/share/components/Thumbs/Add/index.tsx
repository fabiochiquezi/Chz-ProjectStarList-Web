import React, { FC } from 'react'

interface AddThumbType {
    onClick: () => void
}

const AddThumb: FC<AddThumbType> = ({ onClick }) => (
    <div
        onClick={onClick}
        data-cy="add-thumb"
        data-testid="add-thumb"
        className="
            text-center order-2 border-2 border-gray-800
            w-[170px] h-[220px] rounded-lg flex
            justify-center items-center text-xl
            text-gray-500 cursor-pointer anim-button
            border-dashed mb-14 xl:w-[153px] xl:h-[198px]
            xl:mt-2 2xl:w-[170px] 2xl:h-[220px] 2xl:mt-0
        "
    >
        Add + <br />
        manually
    </div>
)

export { AddThumb }
