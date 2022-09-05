import * as Yup from 'yup'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'
import { useAuth } from 'context/AuthContext'
import CloseIcon from 'public/icons/CloseIcon'
import SpinIcon2 from 'public/icons/SpinIcon2'
import { useSetUtils } from 'context/UtilsContext'
import { useCatalogStore } from 'store/catalogStore'
import { postFireDoc } from 'firebase/firestore/post'

type dataForm = {
    name: string
    thumb: string
    state: string
    type: string
}

const validate = Yup.object({
    thumb: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    type: Yup.string().required('Required')
})

const AddItem: React.FC = () => {
    const { setModal, openAlert } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string

    async function handleSubmit(data: dataForm) {
        const { name, thumb, type } = data
        if (loading) return
        setLoading(true)

        try {
            if (!user) throw new Error('User not identified')
            await postFireDoc(state, user.uid, { name, thumb, type })
            store.addItem({ name, thumb, type }, state)
            openAlert('Item added successfully', 1)
            setModal(false)
        } catch (e) {
            openAlert('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
        }
    }

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
                    state: '',
                    type: ''
                }}
                validationSchema={validate}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(data, props) => {
                    props.validateForm()
                    handleSubmit(data)
                }}
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
                                className="mb-9"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                error={formik.errors.name}
                            />
                            <Input
                                label="Thumb"
                                className="mb-9"
                                placeholder="http://example.com"
                                name="thumb"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.thumb}
                                error={formik.errors.thumb}
                            />
                            {/*
                            <Select
                                label="State"
                                className="mb-9"
                                name="state"
                                onChange={formik.handleChange}
                                value={formik.values.state}
                                error={formik.errors.state}
                            >
                                <option
                                    className="bg-primary text-white"
                                    value={'doing'}
                                >
                                    Doing
                                </option>
                                <option
                                    className="bg-primary text-white"
                                    value={'illdo'}
                                >
                                    I'll Do
                                </option>
                                <option
                                    className="bg-primary text-white"
                                    value={'did'}
                                >
                                    Did
                                </option>
                            </Select>
                            */}
                            <Select
                                label="Type"
                                className="mb-9"
                                name="type"
                                onChange={formik.handleChange}
                                value={formik.values.type}
                                error={formik.errors.type}
                            >
                                <option
                                    className="bg-primary text-white"
                                    value={'watch'}
                                >
                                    Watch
                                </option>
                                <option
                                    className="bg-primary text-white"
                                    value={'play'}
                                >
                                    Play
                                </option>
                                <option
                                    className="bg-primary text-white"
                                    value={'read'}
                                >
                                    Read
                                </option>
                            </Select>
                        </div>

                        <button
                            className="btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            {!loading ? (
                                <span className="">Send</span>
                            ) : (
                                <SpinIcon2 className="positive -top-1" />
                            )}
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddItem
