export interface ResponseSuccess<T> {
  ok: true
  request: T
  error: string
}
export interface ResponseError {
  ok: false
  request: {}
  error: string
}
export type Resp<T> = ResponseSuccess<T> | ResponseError
