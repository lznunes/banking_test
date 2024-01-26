describe('Acess the bank account', () => {
  it('Log in', () => {
    cy.visit('https://parabank.parasoft.com/')
    cy.get('input[type="text"]').type('john')
    cy.get('input[type="password"]').type('demo')
    cy.get('input[type="submit"]').should('be.visible').click()
  })
})