import { Select } from '../../../../libs/frontend/components'
import { FormikProps } from 'formik'
import { FC } from 'react'

type IFormAddFields = FC<{
  formik: FormikProps<Record<string, string>>
  BtnSubmit?: FC<{ title?: string }>
}>

const FormAddFields: IFormAddFields = ({ formik, BtnSubmit }) => (
  <div data-testid="FormAddFields">
    <h3 className="mb-2 text-xl text-white font-bold mt-1">
      Add new item
    </h3>

    <p className="mb-5 text-white">
      Search for the work you want on google, select
      images, choose one, select &quot;copy link&quot;
      and paste here.
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
          className="bg-primary text-white"
          value={'doing'}
        >
          Doing
        </option>
        <option
          className="bg-primary text-white"
          value={'illdo'}
        >
          I&apos;ll do
        </option>
        <option
          className="bg-primary text-white"
          value={'did'}
        >
          Did
        </option>
      </Select>
      {BtnSubmit && <BtnSubmit />}
    </div>
  </div>
)


export { FormAddFields }
