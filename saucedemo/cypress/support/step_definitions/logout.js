import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as logoutActions from '../actions/logoutActions';

/*Logout with success*/ 

Given('a logged user in the left menu', () =>{
    logoutActions.navigateToMainPage()
    logoutActions.navigateToLeftMenu()
})

When('the user proceeds to logout', ()=>{
    logoutActions.clickOnLogoutButton()
})

Then('the user is at login page', ()=>{
    logoutActions.checkOnLoginPage()
})