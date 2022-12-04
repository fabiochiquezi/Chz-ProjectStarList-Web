import * as Yup from 'yup'

export const validation = Yup.object({
  thumb: Yup.string().required('Required')
})
