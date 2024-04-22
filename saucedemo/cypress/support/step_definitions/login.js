import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as loginActions from '../actions/loginActions';
import * as loginConstants from '../constants/loginConstants';


/*Login with valid credentials*/

Given('an user with valid credentials at login page', () => {
    loginActions.visitWebPage()
})

When('the user completes the login with {string} and {string}', (username, password)=>{
    loginActions.insertCredentials(username, password)
    loginActions.clickOnLoginButton()
})

Then('the system shows main page', ()=>{
    loginActions.verifyExpectedUrlAddress(loginConstants.inventoryPath)
})

/*Login with invalid credentials*/

Given('an user with invalid credentials at login page', () => {
    loginActions.visitWebPage()
})

When('the user completes the login with invalid {string} and {string}', (username, password)=>{
    loginActions.insertCredentials(username, password)
    loginActions.clickOnLoginButton()
})

Then('the system shows an error on login', ()=>{
    loginActions.verifyExpectedUrlAddress(loginConstants.base_url)
    loginActions.checkErrorMessage()
})


/*Login withot username*/

Given('an user without credentials', () => {
    loginActions.visitWebPage()
})

When('user try to access to the web page without username', ()=>{
    loginActions.checkEmptyUsername()
    loginActions.clickOnLoginButton()
})

/*Login withot password*/

When('user try to access to the web page without password', ()=>{
    loginActions.checkEmptyPassword()
    loginActions.clickOnLoginButton()
})
