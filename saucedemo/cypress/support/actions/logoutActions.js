import * as logoutConstants from '../constants/logoutConstants'
import * as commonActions from '../actions/commonActions';

export const navigateToMainPage = () =>{
    commonActions.visitWebPage(logoutConstants.base_url)
    cy.get(logoutConstants.usernameInput).type(logoutConstants.loggedUsername)
    cy.get(logoutConstants.passwordInput).type(logoutConstants.loggedPassword)
    commonActions.clickOnButton(logoutConstants.loginButton)
    cy.wait(1000)
}
export const navigateToLeftMenu = () =>{
    commonActions.clickOnButton(logoutConstants.leftMenuId)
    cy.wait(1500)
}
