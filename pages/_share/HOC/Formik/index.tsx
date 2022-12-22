import { Formik, FormikProps } from 'formik'
import { SpinIcon } from 'pages/_share/assets'
import { useState, FC } from 'react'

export type IFormHOC = FC<{
  Fields: IFields,
  onSubmit: (data: any) => Promise<void>,
  validation: any,
  initialValues: Record<string, string>
}>
export type IFields = FC<{
  formik: FormikProps<Record<string, string>>,
  BtnSubmit?: IButtonSend
}>
export type IButtonSend = FC<{
  title?: string
}>

const FormikHOC: IFormHOC = ({ Fields, onSubmit, validation, initialValues }) => {
  const [loadingForm, setLoading] = useState(false)

  async function handleSubmit(data: unknown): Promise<void> {
    setLoading(true)
    await onSubmit(data)
    setLoading(false)
  }

  const BtnSubmit: IButtonSend = ({ title = 'send' }) => <button
    type="submit"
    disabled={!!loadingForm}
    className="btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
  >
    {!loadingForm ? <span>{title}</span> : <SpinIcon className="positive -top-1" />}
  </button>

  return (
    <Formik
      initialValues={initialValues}
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
          <Fields formik={formik} BtnSubmit={BtnSubmit} />
        </form>
      )}
    </Formik>
  )
}
export { FormikHOC }
