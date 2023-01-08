import { validData } from './valid'
import { Movie, Serie } from '../../../domain'
import { submitFail, submitSuccess } from './sendForm'

export type TypesAllowed = Movie | Serie
export type IList = TypesAllowed[]
export interface IDataForm {
  list: IList,
  IDSelected: string
  username: string
  catalogType: string
}
type ISubmitModal = (alert: any) => (event: any) => (data: IDataForm) => Promise<void>

export const sendData: ISubmitModal = alert => sendDataFn => async data => (validData(data)
  ? await submitSuccess(alert)(() => sendDataFn(data))
  : submitFail(alert)
)

