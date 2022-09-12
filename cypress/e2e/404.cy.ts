describe('404 Page', () => {
    const page404 = '[data-cy="404-page"]'

    beforeEach(() => {
        cy.login()
        cy.visit('/catalog/aaa')
    })

    it('should give 404 page', () => {
        cy.url().should('to.equal', 'http://localhost:3000/404')
    })

    it('should have all data necessary', () => {
        cy.get(page404)
            .find('h1 span')
            .should('have.text', '404 - Page not found')
        cy.get(page404).find('h1 + a').should('have.text', 'Go back home')
        cy.get(page404).find('h1 + a').click()
        cy.url().should('to.equal', 'http://localhost:3000/catalog/doing')
    })
})
