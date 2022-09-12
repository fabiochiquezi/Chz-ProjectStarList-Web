describe('Structure', () => {
    const loadPage = '[data-cy="load-page"]'
    const menu = '[data-cy="menu-structure"] li'
    const name = '[data-cy="rightMenu-structure"] li:nth-child(1) span'
    const signOutButton = '[data-cy="rightMenu-structure"] li:last-child'
    const btnMobile = '[data-cy="btn-mobile"]'

    beforeEach(() => {
        cy.login()
        cy.visit('/catalog/doing')
    })

    context('Desktop', () => {
        it('should have all data necessary', () => {
            cy.get(loadPage)
            cy.get(menu).should('have.length', 3)
            cy.get(menu).eq(0).should('have.text', 'DOING')
            // eslint-disable-next-line
            cy.get(menu).eq(1).should('have.text', "I'll DO")
            cy.get(menu).eq(2).should('have.text', 'DID')
            cy.get(name).should('exist')
            cy.get(signOutButton).should('have.text', 'Sign Out')
            cy.get(signOutButton).click()
            cy.url().should('to.equal', 'http://localhost:3000/')
        })

        it('menu should work', () => {
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/doing')
            cy.wait(1000)

            cy.get(menu).eq(1).find('a').click()
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/illdo')
            cy.wait(1000)

            cy.get(menu).eq(2).find('a').click()
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/did')
            cy.wait(1000)

            cy.get(menu).eq(0).find('a').click()
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/doing')
        })
    })

    context.only('Mobile', () => {
        it('should have all data necessary', () => {
            cy.viewport('iphone-6')
            cy.get(loadPage)
            cy.get(btnMobile).click()
            cy.get(menu).should('have.length', 3)
            cy.get(menu).eq(0).should('have.text', 'DOING')
            // eslint-disable-next-line
            cy.get(menu).eq(1).should('have.text', "I'll DO")
            cy.get(menu).eq(2).should('have.text', 'DID')
            cy.get(name).should('exist')
            cy.get(signOutButton).should('have.text', 'Sign Out')
            cy.get(signOutButton).click()
            // cy.url().should('to.equal', 'http://localhost:3000/')
        })

        it.only('menu should work', () => {
            cy.viewport('iphone-6')
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/doing')
            cy.wait(1000)

            cy.get(btnMobile).click()
            cy.get(menu).eq(1).find('a').click()
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/illdo')
            cy.wait(1000)

            cy.get(btnMobile).click()
            cy.get(menu).eq(2).find('a').click()
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/did')
            cy.wait(1000)

            cy.get(btnMobile).click()
            cy.get(menu).eq(0).find('a').click()
            cy.get(loadPage)
            cy.url().should('to.equal', 'http://localhost:3000/catalog/doing')
        })
    })

    afterEach(() => {
        cy.logout()
    })
})
