import { myID } from 'firebase.mysettings'

describe('Catalog', () => {
    const coverImg =
        'http://cdn.shopify.com/s/files/1/0552/4976/4526/products/STL242363.jpg?v=1659332339'

    const list = '[data-cy="section-list"]'
    const addThumb = '[data-cy="add-thumb"]'
    const thumb = '[data-cy="thumb-default"]'
    const formAdd = '[data-cy="form-addNewItem"]'
    const formAlter = '[data-cy="form-alterItem"]'
    const formDel = '[data-cy="form-delItem"]'
    const btnUpdate = '[data-cy="btn-update"]'
    const btnOpenDelForm = '[data-cy="btnOpen-delForm"]'
    const btnLoad = '[data-cy="btn-load"]'
    const btnDel = '[data-cy="btn-delete"]'

    beforeEach(() => {
        cy.deleteCatalogDB('doing')
        cy.login()
        cy.visit('/catalog/doing')
    })

    it('should have the necessary data', () => {
        cy.get(list)
            .find('span')
            .eq(0)
            .should('have.text', 'YOUR LIST IS EMPTY')
        cy.get(list)
            .find('span')
            .eq(1)
            .should('have.text', 'Start adding movies, books... Right now!')
        cy.get(addThumb)
        cy.get(thumb).should('not.exist')
    })

    it('should get data', () => {
        cy.fixture('movies').then(data => {
            cy.setTableDB(`doing/${myID}`, data)
            cy.get(thumb).should('have.length', 15)
            cy.get(btnLoad).click()
            cy.get(thumb).should('have.length', 20)
        })
    })

    it('should add item', () => {
        cy.wait(3000)
        cy.get(thumb).should('not.exist')
        cy.get(addThumb).click()
        cy.get(formAdd).find('[name="thumb"]').type(coverImg)
        cy.get(formAdd).find('[type="submit"]').click()
        cy.wait(3000)
        cy.get(thumb).should('exist')
    })

    it('should delete item', () => {
        cy.setTableDB(`doing/${myID}`, { list: [{ thumb: coverImg }] })
        cy.get(thumb).trigger('mouseover')
        cy.get(btnOpenDelForm).click({ force: true })
        cy.get(formDel).find(btnDel).click()
        cy.get(thumb).should('not.exist')
    })

    it('should update item', () => {
        cy.setTableDB(`doing/${myID}`, { list: [{ thumb: coverImg }] })
        cy.get(thumb).click()
        cy.get(formAlter)
        cy.get('[name="thumb"]').clear().type('aaa')
        cy.get(btnUpdate).click()
    })

    afterEach(() => {
        cy.deleteCatalogDB('doing')
        cy.logout()
    })
})
