import { Input } from '../../../components/Forms/Inputs/Default'
import { FormikProps } from 'formik'
import React from 'react'

interface props {
    formik: FormikProps<{
        name: string
        thumb: string
        type: string
    }>
}

const Fields: React.FC<props> = ({ formik }) => (
    <>
        {/*
        <Input
            label="Name"
            className="mb-9"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
        />
    */}
        <Input
            label="Cover"
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
            label="Type"
            className="mb-9"
            name="type"
            onChange={formik.handleChange}
            value={formik.values.type}
            error={formik.errors.type}
        >
            <option className="bg-primary text-white" value={'watch'}>
                Watch
            </option>
            <option className="bg-primary text-white" value={'play'}>
                Play
            </option>
            <option className="bg-primary text-white" value={'read'}>
                Read
            </option>
        </Select>
        */}
    </>
)

export { Fields }
