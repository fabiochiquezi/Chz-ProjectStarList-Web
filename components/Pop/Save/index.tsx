import SpinIcon2 from 'public/icons/SpinIcon2'
import React from 'react'

const PopSave: React.FC = () => {
    return (
        <div className="fixed right-10 bottom-[40px] z-[100] rounded-lg w-[198px] h-[52px] flex items-center justify-center bg-black">
            <SpinIcon2
                width={16}
                height={16}
                color="#FB923C"
                className="top-[2px] left-[-4px]"
            />
            <p className="text-white text-sm relative left-[-4px] top-[1px]">
                Saving...Don&lsquo;t close!
            </p>
        </div>
    )
}

export default PopSave
