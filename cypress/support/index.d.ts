declare namespace Cypress {
    interface Chainable {
        deleteCatalogDB(table: string): void
        setTableDB(path: string, data: Record<string, any>): void
    }
}
