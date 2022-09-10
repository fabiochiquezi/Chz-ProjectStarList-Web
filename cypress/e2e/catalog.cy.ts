describe('Catalog', () => {
    const coverImg =
        'http://cdn.shopify.com/s/files/1/0552/4976/4526/products/STL242363.jpg?v=1659332339'

    const list = '[data-cy="section-list"]'
    const addThumb = '[data-cy="add-thumb"]'
    const thumbDefault = '[data-cy="thumb-default"]'
    const formAdd = '[data-cy="form-addNewItem"]'

    beforeEach(() => {
        cy.login()
        cy.visit('/catalog/doing')
    })

    it.skip('data', () => {
        cy.get(list)
            .find('span')
            .eq(0)
            .should('have.text', 'YOUR LIST IS EMPTY')
        cy.get(list)
            .find('span')
            .eq(1)
            .should('have.text', 'Start adding movies, books... Right now!')
        cy.get(addThumb)
        cy.get(thumbDefault).should('not.exist')
    })

    it('add', () => {
        cy.wait(3000)
        cy.get(thumbDefault).should('not.exist')
        cy.get(addThumb).click()
        cy.get(formAdd).find('[name="thumb"]').type(coverImg)
        cy.get(formAdd).find('[type="submit"]').click()
        cy.wait(3000)
        cy.get(thumbDefault).should('exist')
    })

    afterEach(() => {
        // cy.logout()
    })
})
