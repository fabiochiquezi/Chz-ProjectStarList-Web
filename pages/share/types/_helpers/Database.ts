export interface DocumentDBExtraProps {
    uid: string
    index?: string
    createdAt?: string
    lastUpdate?: string
}

export type DocumentFromDB<T> = T & DocumentDBExtraProps
