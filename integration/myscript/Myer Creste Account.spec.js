describe('Create Accout Test', () => {

  it('Success Create Accout', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('contains','/inventory.html')
    //https://www.myer.com.au/join
    //cy.get('#email').type('joanwangbupt@gmail.com')
    //cy.xpath('//*[@id="__next"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[2]/button').click()

  })
})