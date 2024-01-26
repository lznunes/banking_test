describe('Acess the bank account', () => {
  it('Log in', () => {
    cy.visit('https://parabank.parasoft.com/')
    cy.get('input[type="text"]').type('john')
    cy.get('input[type="password"]').type('demo')
    cy.get('input[type="submit"]').should('be.visible').click()
  })

  it('Log in  user and password empty', () => {
    cy.visit('https://parabank.parasoft.com/')
    cy.get('input[type="submit"]').should('be.visible').click()
    cy.contains('Please enter a username and password.', {timeout:1000}).should('be.visible')
  })

  it('Log in with wrong user', () => {
    cy.visit('https://parabank.parasoft.com/')
    cy.get('input[type="text"]').type('jhon')
    cy.get('input[type="password"]').type('demo1')
    cy.get('input[type="submit"]').should('be.visible').click()
    cy.contains('An internal error has occurred and has been logged.', {timeout:1000}).should('be.visible')
  })




})