import { IDataForm, IList } from '..'
import { getDataByID } from '../getDataByID'

type IisPermitedType = (catalogType: string) => boolean
type IhasSelectedItem = (list: IList) => (IDSelected: string) => boolean
type IvalidData = (data: IDataForm) => boolean

export const isPermitedType: IisPermitedType = catalogType =>
  (!!['doing', 'illdo', 'did'].includes(catalogType))

export const hasSelectedItem: IhasSelectedItem = list => IDSelected =>
  !!getDataByID(list)(IDSelected)

export const validData: IvalidData = ({ list, IDSelected, catalogType }) => (!((
  !hasSelectedItem(list)(IDSelected) ||
  !isPermitedType(catalogType)
)))

