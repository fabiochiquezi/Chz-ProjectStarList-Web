import { Formik, FormikProps } from 'formik'
import { SpinIcon } from '../../assets'
import { useState, FC } from 'react'
import { BtnSolid } from 'libs/frontend/components'

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

  const BtnSubmit: IButtonSend = ({ title = 'send' }) =>
    <BtnSolid disabled={!!loadingForm} className="bg-skin-success py-[8px] h-[39px] w-[90px] self-end justify-self-end flex">
      {!loadingForm ? <span>{title}</span> : <SpinIcon className="positive -top-[-2px]" />}
    </BtnSolid>


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
