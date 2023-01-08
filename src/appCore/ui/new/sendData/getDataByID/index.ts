import { IList, TypesAllowed } from '..'

export const getDataByID = (list: IList) => (IDSelected: string): TypesAllowed | undefined =>
  list.find(item => String(item.id) === IDSelected)
