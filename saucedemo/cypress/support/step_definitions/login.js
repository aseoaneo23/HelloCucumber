import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as commonActions from '../actions/commonActions';
import * as loginActions from '../actions/loginActions';
import * as loginConstants from '../constants/loginConstants';


/*Login with valid credentials*/

Given('an user with valid credentials at login page', () => {
    commonActions.visitWebPage(loginConstants.base_url)
})

When('the user completes the login with {string} and {string}', (username, password)=>{
    loginActions.loginObjectsAreVisible()
    loginActions.insertCredentials(username, password)
    commonActions.clickOnButton(loginConstants.loginButton)
})

Then('the system shows main page', ()=>{
    commonActions.verifyExpectedUrlAddress(loginConstants.inventoryPath)
})

/*Login with invalid credentials*/

Given('an user with invalid or empty credentials at login page', () => {
    commonActions.visitWebPage(loginConstants.base_url)
})

When('the user completes the login with invalid {string} and {string}', (username, password)=>{
    loginActions.loginObjectsAreVisible()
    loginActions.insertCredentials(username, password)
    commonActions.clickOnButton(loginConstants.loginButton)
})

Then('the system shows an {string} on login', (error)=>{
    commonActions.verifyExpectedUrlAddress(loginConstants.base_url)
    loginActions.checkErrorMessage(error)
})


