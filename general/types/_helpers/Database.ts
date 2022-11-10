interface DatabaseProps {
    uid: string
    index?: string
    createdAt?: string
    lastUpdate?: string
}

export type DBDocument<T> = T & DatabaseProps
