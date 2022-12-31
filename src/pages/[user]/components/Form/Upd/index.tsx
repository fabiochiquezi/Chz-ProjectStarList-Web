import { Formik } from 'formik'
import { validation } from './validation'
import { Select } from '../../../../_share/components'
import { SpinIcon } from '../../../../../../libs/frontend/assets'
import React, { FC, ReactElement, useRef, useState } from 'react'

interface AddModalType {
  closeModal: () => void
  onSubmit: (data: { catalogType: string }) => Promise<void>
}

const UpdateItem: FC<AddModalType> = ({ closeModal, onSubmit }) => {
  const [loading, setLoading] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const Spin = <SpinIcon className="positive -top-1" />
  const BtnSend = (): ReactElement => (!loading ? <span>Send</span> : Spin)

  async function handleSubmit(data: { catalogType: string }): Promise<void> {
    setLoading(true)
    await onSubmit(data)
    setLoading(false)
  }

  return (
    <Formik
      initialValues={{ catalogType: 'illdo' }}
      validationSchema={validation}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (data, { validateForm }) => {
        await validateForm()
        handleSubmit(data)
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
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
          </div>

          <button
            className="btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
            type="submit"
            disabled={!!loading}
            ref={btnRef}
          >
            <BtnSend />
          </button>
        </form>
      )}
    </Formik>
  )
}

export { UpdateItem }
