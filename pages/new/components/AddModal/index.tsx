import { Formik } from 'formik'
import { validation } from './validation'
import { Select } from 'pages/_share/components'
import { CloseIcon, SpinIcon } from 'pages/_share/assets'
import React, { FC, memo, ReactElement, useRef, useState } from 'react'

interface AddModalType {
  closeModal: () => void
  onSubmit: (data: { catalogType: string }) => Promise<void>
}

const Modal: FC<AddModalType> = ({ closeModal, onSubmit }) => {
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
    <div
      className="absolute w-[90%] w-[316px] mx-auto z-50 left-[50%] ml-[-158px] top-[10%]
            sm:max-w-[440px] sm:ml-[-220px] sm:top-[10%] sm:w-full
            md:max-w-[600px] md:ml-[-300px] md:top-[20%]
            lg:top-[25%] modal-anim-2"
    >
      <div
        onClick={closeModal}
        className="absolute right-4 top-0 p-8 -mr-8 -mt-8 anim-button z-10"
      >
        <CloseIcon width={22} height={16} />
      </div>

      <div>
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
            <form
              className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700"
              onSubmit={formik.handleSubmit}
            >
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
      </div>
    </div>
  )
}

export const AddModal = memo(Modal)
