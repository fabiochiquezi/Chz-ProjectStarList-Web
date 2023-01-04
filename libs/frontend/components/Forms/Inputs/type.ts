import { FormikHandlers } from 'formik'
import { IPresentComponent } from '../../types'

export interface IInputProps extends IPresentComponent {
  name: string
  type?: string
  value?: string
  error: string | undefined
  onChange: FormikHandlers['handleChange']
}
