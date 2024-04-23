import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as logoutActions from '../actions/logoutActions';
import * as commonActions from '../actions/commonActions';
import * as logoutConstants from '../constants/logoutConstants'


/*Logout with success*/ 

Given('a logged user in the left menu', () =>{
    logoutActions.navigateToMainPage()
    commonActions.isVisible(logoutConstants.leftMenuId)
    logoutActions.navigateToLeftMenu()
})

When('the user proceeds to logout', ()=>{
    commonActions.isVisible(logoutConstants.logoutLink)
    commonActions.clickOnButton(logoutConstants.logoutLink)
})

Then('the user is at login page', ()=>{
    commonActions.verifyExpectedUrlAddress(logoutConstants.base_url)
})