


Feature: Login into saucedemo

login.feature

Let customer login

Scenario: the login is completed correctly
 Given an user with valid credentials at login page
 When the user completes the login
 Then the system shows main page


