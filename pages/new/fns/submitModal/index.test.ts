import { submitModal } from '.'

describe('submitModal', () => {
    const postDoing = jest.fn()
    const postDid = jest.fn()
    const postIlldo = jest.fn()
    const list: any = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const idSelected = '2'
    const userName = 'userName'

    it('type wrong', async () => {
        const data: any = { catalogType: 'wrong' }
        const submitModalFn = submitModal(postDoing, postDid, postIlldo)
        const submitFn = submitModalFn(list, idSelected, userName)
        try {
            await submitFn(data)
        } catch (e: any) {
            expect(e.message).toBe('Something went wrong')
        }

        expect.assertions(1)
    })

    it('didnt find item at the list', async () => {
        expect.assertions(1)
        const data: any = { catalogType: 'doing' }
        const submitModalFn = submitModal(postDoing, postDid, postIlldo)
        const submitFn = submitModalFn(list, '4', userName)
        try {
            await submitFn(data)
        } catch (e: any) {
            expect(e.message).toBe('Something went wrong')
        }
    })

    it('calls postDoing', async () => {
        const data: any = { catalogType: 'doing' }
        submitModal(postDid, postDoing, postIlldo)(list, '2', userName)(data)
        expect(postDoing).toBeCalledTimes(1)
    })

    it('calls postDid', async () => {
        const data: any = { catalogType: 'did' }
        submitModal(postDid, postDoing, postIlldo)(list, '2', userName)(data)
        expect(postDid).toBeCalledTimes(1)
    })

    it('calls postIlldo', async () => {
        const data: any = { catalogType: 'illdo' }
        submitModal(postDoing, postDid, postIlldo)(list, '2', userName)(data)
        expect(postIlldo).toBeCalledTimes(1)
    })
})
