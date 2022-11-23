import { postCatalogDoing } from 'pages/new/api/catalog/post/doing'
import { Movie, Serie } from 'pages/share/types'

type OnSubmitAddModal = (
    list: Array<Movie | Serie>,
    iDSelected: string,
    userName: string
) => (data: { catalogType: string }) => Promise<void>

const submitModal: OnSubmitAddModal =
    (list, iDSelected, userName) => async data => {
        const permitedTypes = ['doing', 'illdo', 'did']
        const { catalogType } = data

        const isTypeOk = permitedTypes.includes(catalogType)
        if (!isTypeOk) throw new Error('Something went wrong')

        const sendData = list.find(item => String(item.id) === iDSelected)

        switch (catalogType) {
            case 'doing':
                await postCatalogDoing(sendData, userName)
                break
        }
    }

export { submitModal }
