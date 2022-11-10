export interface ResponseSuccess<T> {
    ok: true
    data: T
    error: string
}

export interface ResponseError {
    ok: false
    data: {}
    error: string
}

export type Resp<T> = ResponseSuccess<T> | ResponseError
