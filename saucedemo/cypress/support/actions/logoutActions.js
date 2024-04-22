import * as logoutConstants from '../constants/logoutConstants'

export const navigateToMainPage = () =>{
    cy.visit('https://www.saucedemo.com/',)
    cy.get(logoutConstants.usernameInput).type(logoutConstants.loggedUsername)
    cy.get(logoutConstants.passwordInput).type(logoutConstants.loggedPassword)
    cy.get(logoutConstants.loginButton).click()
    cy.wait(1000)
}
export const navigateToLeftMenu = () =>{
    cy.get(logoutConstants.leftMenuId).click({ force: true })
    cy.wait(1500)
}
export const clickOnLogoutButton = () =>{
    cy.get(logoutConstants.logoutLink).click()
}
export const checkOnLoginPage = () =>{
    cy.url().should('eq',logoutConstants.base_url)
}