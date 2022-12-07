export const isString = (s: unknown): boolean => typeof s === 'string'
export const isUndefined = (s: unknown): boolean => typeof s === 'undefined'

export function getTimeNow(): string {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  const date = `${mm}/${dd}/${yyyy}`
  return date
}
