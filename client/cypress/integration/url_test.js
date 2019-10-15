Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("My movie list function", function(){
    it("checks the url value rendered by the MediaList component",function(){
        cy.visit('http://localhost:3000/movies/0')
        cy.contains('Home').click()
        cy.url().should('includes', 'http://localhost:3000/')
    })
})

//'match' requires its argument be a 'RegExp'. You passed: 'http://localhost:3000/'