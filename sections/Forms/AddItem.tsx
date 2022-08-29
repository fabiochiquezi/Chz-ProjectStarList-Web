import React from 'react'
import Input from '../../components/Forms/Input'
import { useSetUtils } from '../../context/UtilsContext'
import CloseIcon from '../../public/icons/CloseIcon'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validate = Yup.object({
    thumb: Yup.string().required('Required'),
    name: Yup.string().required('Required')
})

const AddItem: React.FC = () => {
    const { setModal } = useSetUtils()
    return (
        <div
            className="absolute w-[90%] w-[316px] mx-auto z-50 left-[50%] ml-[-158px] top-[10%]
                    sm:max-w-[440px] sm:ml-[-220px] sm:top-[10%] sm:w-full
                    md:max-w-[600px] md:ml-[-300px] md:top-[20%]
                    lg:top-[25%]"
        >
            <Formik
                initialValues={{
                    name: '',
                    thumb: '',
                    background: '',
                    rate: '',
                    category: '',
                    type: ''
                }}
                validationSchema={validate}
                onSubmit={data => console.log(data)}
            >
                {formik => (
                    <form
                        className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700"
                        onSubmit={formik.handleSubmit}
                    >
                        <h3 className="mb-5 text-xl font-bold mt-1">
                            Add new item
                        </h3>

                        <div
                            onClick={() => setModal(false)}
                            className="absolute right-4 top-5 p-8 -mr-8 -mt-8 simple-button"
                        >
                            <CloseIcon width={22} height={16} />
                        </div>

                        <div className="mt-3 md:grid grid-cols-2 gap-x-8">
                            <Input
                                label="Name"
                                className="mb-7"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                error={formik.errors.name}
                            />
                            <Input
                                label="Thumb"
                                className="mb-7"
                                placeholder="http://example.com"
                                name="thumb"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.thumb}
                                error={formik.errors.thumb}
                            />
                            <Input
                                label="Background"
                                className="mb-7"
                                name="background"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.background}
                                error={formik.errors.background}
                            />
                            <Input
                                label="Rate"
                                className="mb-7"
                                name="rate"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.rate}
                                error={formik.errors.rate}
                            />
                            <Input
                                label="Category"
                                className="mb-7"
                                name="category"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.category}
                                error={formik.errors.category}
                            />
                            <Input
                                label="Type"
                                className="mb-7"
                                name="type"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.type}
                                error={formik.errors.type}
                            />
                        </div>

                        <button
                            className=" mt-8 btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm sm:mt-9 md:mt-2"
                            type="submit"
                        >
                            <span className="">Send</span>
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddItem
