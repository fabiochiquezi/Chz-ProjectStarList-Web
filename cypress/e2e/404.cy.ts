describe('Home', () => {
    const page404 = '[data-cy="404-page"]'

    it('login', () => {
        cy.login()
        cy.visit('/catalog/aaa')
        cy.get(page404)
            .find('h1 span')
            .should('have.text', '404 - Page not found')
        cy.get(page404).find('h1 + a').should('have.text', 'Go back home')
    })
})
