import * as Constants from '../constants/loginConstants';


export const visitWebPage = () => cy.visit(Constants.base_url)

export const insertCredentials = (username, password) =>{
    cy.get(Constants.usernameInput).type(username)
    cy.get(Constants.passwordInput).type(password)
}

export const clickOnLoginButton = () => cy.get(Constants.loginButton).click()

export const verifyExpectedUrlAddress = (path) => cy.url().should('eq', path)

export const checkErrorMessage = () =>{
    cy.get(Constants.errorContainer)
}

export const checkEmptyUsername = () => cy.get(Constants.usernameInput).should('be.empty')

export const checkEmptyPassword = () => cy.get(Constants.passwordInput).should('be.empty')