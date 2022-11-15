export interface dataSubmit {
    thumb: string
}

export interface AddProps {
    setCatalogList: (table: string, id: string, data: any[]) => Promise<void>
}
