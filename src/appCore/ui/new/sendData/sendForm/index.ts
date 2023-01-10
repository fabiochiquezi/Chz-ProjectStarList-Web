type ISubmitFail = (alert: any) => void
type ISubmitSuccess = (alert: any) => (sendData: () => Promise<void>) => Promise<void>

export const submitFail: ISubmitFail = alert => alert.error('Something went wrong')

export const submitSuccess: ISubmitSuccess = alert => async sendData => {
  await sendData()
  alert.success('Item added successfully', 1000)
}

