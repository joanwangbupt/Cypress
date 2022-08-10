import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I am on URL "join"', ()=>{
    cy.visit('/')
})

And('I should see the text box for the EMAIL ADDRESS',()=>{
    cy.get('#email').should('be.visible')
})

When('I enter an email address {string}',(emailAddress)=>{
    cy.get('#email').type(emailAddress)
})

And('I click the JOIN button',()=>{
    cy.xpath('//*[@id="__next"]/div[1]/div[2]/div/div/div[1]/div[2]/div/div[2]/button').click()
})

Then('I should see the warning text "Please enter a valid email address"',()=>{
    cy.get('#email-error-text').contains('Please enter a valid email address').should('exist')
})

Then('I should see the CREATE ACCOUNT button',()=>{
    cy.get('#create-account').should('be.visible')
})

And('I enter the PASSWORD {string}',(password)=>{
    cy.get('#password').type(password)
})

And('I enter the FIRST NAME {string}',(first_name)=>{
    cy.get('#first-name').type(first_name)
})

And('I enter the LAST NAME {string}',(last_name)=>{
    cy.get('#last-name').type(last_name)
})

And('I enter the MOBILE NUMBER {string}',(mobilephone)=>{
    cy.get('#mobile-phone').type(mobilephone)
})

And('I enter the DATE OF BIRTH {string}',(date_of_birth)=>{
    cy.get('#date-of-birth').type(date_of_birth)
})

And('I enter the ADDRESS FINDER {string}',(address)=>{
    cy.get('#address').type(address)
})

And('I choose the standard address',()=>{
    cy.xpath('//*[@class="MuiList-root MuiList-padding"]/div[1]').click()
})

And('I click the CREATE ACCOUNT button',()=>{
    cy.get('#create-account').click()
})

And('I will be logged in',()=>{
    cy.url().should('eq', 'https://www.myer.com.au/account')
})

Then('I should see the warning text "You already have an account"',()=>{
    cy.contains('You already have an account').should('exist')
})