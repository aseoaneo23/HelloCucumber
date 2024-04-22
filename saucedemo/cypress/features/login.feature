
Feature: Login into the website

Let user log in

Scenario Outline: the login is completed correctly
Given an user with valid credentials at login page
 When the user completes the login with "<username>" and "<password>" 
 Then the system shows main page

Examples: 

| username                | password     |
| standard_user           | secret_sauce |
| problem_user            | secret_sauce |
| performance_glitch_user | secret_sauce |
| error_user              | secret_sauce |
| visual_user             | secret_sauce |


Scenario Outline: the login failed because credentials
 Given an user with invalid credentials at login page
 When the user completes the login with invalid "<username>" and "<password>"
 Then the system shows an error on login


Examples: 

| username      | password        |
| bad_user1     | secret_sauce    |
| standard_user | bad_password    |
| bad_user3     | secret_bad      |
| bad_user4     | bad_sauce       |
| bad_user5     | secret_is_sauce |


Scenario: the login failed because no credentials
 Given an user without credentials
 When user try to access to the web page without username
 Then the system shows an error on login


Scenario: the login failed because no credentials
 Given an user without credentials
 When user try to access to the web page without password
 Then the system shows an error on login
