import * as Constants from '../constants/loginConstants';


export const insertCredentials = (username, password) =>{

    if (username === 'empty'){
        cy.get(Constants.passwordInput).type(password)
    }else if (password === 'empty'){
        cy.get(Constants.usernameInput).type(username)
    } else {
        cy.get(Constants.usernameInput).type(username)
        cy.get(Constants.passwordInput).type(password)
    }
}


export const checkErrorMessage = (error) =>{
    cy.get(Constants.errorContainer).should('be.visible')
    cy.get(Constants.errorContainer).should('have.text', error)
} 

export const loginObjectsAreVisible = () => {
    cy.get(Constants.usernameInput).should('be.visible')
    cy.get(Constants.passwordInput).should('be.visible')
    cy.get(Constants.loginButton).should('be.visible')
}