import * as Yup from 'yup'

const validation = Yup.object({
    catalogType: Yup.string().required('Required')
})

export { validation }
