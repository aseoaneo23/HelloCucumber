import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

/*This is only a check to verify that the enviroment is working*/ 


Given('an user with valid credentials at login page', () => {
    cy.visit("https://saucedemo.com")
    
});

When('the user completes the login', ()=>{
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
})

Then('the system shows main page', ()=>{
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
})