declare namespace Cypress {
    interface Chainable {
        deleteTableDB(table: string): void
        addItemDB(path: string, data: Record<string, any>): void
    }
}
