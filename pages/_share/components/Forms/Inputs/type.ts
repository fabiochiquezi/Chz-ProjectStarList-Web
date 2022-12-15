import { FormikHandlers } from 'formik'

export interface IInputProps {
  name: string
  type?: string
  value?: string
  className?: string
  error: string | undefined
  onChange: FormikHandlers['handleChange']
}
