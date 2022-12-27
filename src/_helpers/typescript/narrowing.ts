export const narrowString = (str: string | any): string => {
  if (typeof str !== 'string') throw new Error('invalid data')
  return str
}
