export interface Response<T> {
    ok: boolean
    data: T | null
    error: string
}
