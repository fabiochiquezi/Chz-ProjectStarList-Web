import * as Yup from 'yup'

const validation = Yup.object({
    thumb: Yup.string().required('Required')
})

export { validation }
