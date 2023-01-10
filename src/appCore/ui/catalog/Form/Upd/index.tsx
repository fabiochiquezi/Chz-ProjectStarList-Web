import { FormikProps } from 'formik'
import React, { FC } from 'react'
import { Select } from 'src/libs/frontend/components'

type IUpdateFields = FC<{
  formik: FormikProps<Record<string, string>>
  BtnSubmit?: FC<{ title?: string }>
}>

export const UpdateFields: IUpdateFields = ({ formik, BtnSubmit }) => (
  <div>
    <h3 className="mb-2 text-xl text-white font-bold mt-1">
      Change list
    </h3>

    <p className="mb-5 text-white">
      Update this work to a new list between: doing, done or I&apos;lldo.
    </p>

    <div className="mt-3 md:grid grid-cols-2 gap-x-8">
      <Select
        label="Type"
        className="mb-9"
        name="catalogType"
        onChange={formik.handleChange}
        error={formik.errors.catalogType}
        defaultValue={formik.values.catalogType}
      >
        <option
          className="bg-skin-base-primary text-white"
          value={'doing'}
        >
          Doing
        </option>
        <option
          className="bg-skin-base-primary text-white"
          value={'illdo'}
        >
          I&apos;ll do
        </option>
        <option
          className="bg-skin-base-primary text-white"
          value={'done'}
        >
          Done
        </option>
      </Select>
      {BtnSubmit && <BtnSubmit />}
    </div>
  </div>
)

