import * as Yup from 'yup'

export const validation = Yup.object({
    thumb: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    type: Yup.string().required('Required')
})
