describe('Home', () => {
    const btnSign1 = '[data-cy="btn-signIn1"]'
    const btnSign2 = '[data-cy="btn-signIn2"]'
    const btnGithub = '[data-cy="btn-github"]'
    const hero = '[data-cy="hero-showProject"]'
    const list = '[data-cy="section-list"]'

    beforeEach(() => {
        cy.visit('/')
    })

    test('data', () => {
        cy.get(btnSign1)
        cy.get(btnSign2)
        cy.get(btnGithub)

        cy.get(hero).within(() => {
            cy.get('h1').should('exist')
            cy.get('h1').should(
                'contain.text',
                'Your list of great works souvenirs'
            )
            cy.get('p').should('exist')
            cy.get('p').should(
                'contain.text',
                'Mount your own list of movies, cartoons, series, books and games.'
            )
        })

        cy.get(list).within(() => {
            cy.get('h1').should('exist')
            cy.get('h1').should('contain.text', 'YOUR VIRTUAL MEMORY LIST')
            cy.get('p').should('exist')
            cy.get('p').should(
                'contain.text',
                'From watching, reading or playing...'
            )
        })
    })
})
