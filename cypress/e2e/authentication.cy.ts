describe('Authentication', () => {
    beforeEach(() => {
        cy.logout()
    })

    it('should prevent unsingned user to access page', () => {
        cy.logout()
        cy.visit('/catalog/doing')
        cy.url().should('to.equal', 'http://localhost:3000/')
    })

    it('should allow user autenticated to access page', () => {
        cy.login()
        cy.visit('/catalog/doing')
        cy.url().should('to.equal', 'http://localhost:3000/catalog/doing')
    })

    it('should redirect to home when sign out', () => {
        cy.login()
        cy.visit('/catalog/doing')
        cy.logout()
        cy.url().should('to.equal', 'http://localhost:3000/')
    })

    afterEach(() => {
        // cy.logout()
    })
})
