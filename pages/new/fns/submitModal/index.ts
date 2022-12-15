import { Movie, Serie } from 'core'

type OnSubmitAddModal = (
  postDid: any,
  postDoing: any,
  postIlldo: any
) => (
  list: Array<Movie | Serie>,
  iDSelected: string,
  userName: string
) => (data: { catalogType: string }) => Promise<void>

const submitModal: OnSubmitAddModal =
  (postDid, postDoing, postIlldo) =>
    (list, idSelected, userName) =>
      async data => {
        const permitedTypes = ['doing', 'illdo', 'did']
        const { catalogType } = data

        const isTypeOk = permitedTypes.includes(catalogType)
        if (!isTypeOk) throw new Error('Something went wrong')

        const sendData = list.find(item => String(item.id) === idSelected)
        if (!sendData) throw new Error('Something went wrong')

        switch (catalogType) {
          case 'doing':
            await postDoing(sendData, userName)
            break
          case 'did':
            await postDid(sendData, userName)
            break
          case 'illdo':
            await postIlldo(sendData, userName)
            break
        }
      }

export { submitModal }
