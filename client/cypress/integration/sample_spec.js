describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(false)
    })
  })

  describe('My First Test', function() {
      it("visits the kitchen sink", function(){
          cy.visit('http://example.cypress.io')
          cy.pause()
          cy.contains('type').click()
          cy.url().should('include', '/commands/actions')

          cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
      })
  })