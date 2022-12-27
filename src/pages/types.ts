// Database
interface DocumentDBExtraProps {
  uid: string
  index?: string
  createdAt?: string
  lastUpdate?: string
}
type DocumentFromDB<T> = T & DocumentDBExtraProps

// Responses
interface ResponseSuccess<T> {
  ok: true
  request: T
  error: string
}
interface ResponseError {
  ok: false
  request: {}
  error: string
}
type Resp<T> = ResponseSuccess<T> | ResponseError

// Presentational Components
interface IPresentComponent {
  className?: string
}

//
export type {
  DocumentDBExtraProps,
  DocumentFromDB,
  ResponseSuccess,
  ResponseError,
  Resp,
  IPresentComponent
}
