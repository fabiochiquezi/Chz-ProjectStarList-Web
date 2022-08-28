import React from 'react'
import Input from '../../components/Forms/Input'
import { useSetUtils } from '../../context/UtilsContext'
import ArrowRight1 from '../../public/icons/ArrowRight1'
import CloseIcon from '../../public/icons/CloseIcon'

const AddItem: React.FC = () => {
    const { setModal } = useSetUtils()
    return (
        <form
            className="flex flex-col max-w-[316px] ml-[-158px] mt-[-300px] px-7 py-8 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl overflow-x-hidden overflow-y-scroll
            sm:max-w-[440px]
            md:max-w-[600px]"
        >
            <h3 className="mb-5 text-xl font-bold mt-1">Add a new Item</h3>

            <div
                onClick={() => setModal(false)}
                className="absolute right-4 top-5 p-8 -mr-8 -mt-8 simple-button"
            >
                <CloseIcon width={22} height={16} />
            </div>

            <div className="mt-3 md:grid grid-cols-2 gap-x-8">
                <Input label="Name" className="mb-6" />
                <Input label="Thumb" className="mb-6" />
                <Input label="Background" className="mb-6" />
                <Input label="Rate" className="mb-6" />
                <Input label="Category" className="mb-6" />
                <Input label="Type" className="mb-6Z" />
            </div>

            <button className="mt-8 btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative text-sm">
                <span className="">Send</span>
            </button>
            {/*<button className="mt-16 text-right text-green-700">SEND</button>*/}
        </form>
    )
}

export default AddItem
