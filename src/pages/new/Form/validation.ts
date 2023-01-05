import * as Yup from 'yup'

export const validation = Yup.object({
  catalogType: Yup.string().required('Required')
})
