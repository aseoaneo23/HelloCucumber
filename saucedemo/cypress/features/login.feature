
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
 Given an user with invalid or empty credentials at login page
 When the user completes the login with invalid "<username>" and "<password>"
 Then the system shows an "<error>" on login


Examples: 

| username      | password     | error                                                                     |
| bad_user1     | secret_sauce | Epic sadface: Username and password do not match any user in this service |
| standard_user | bad_password | Epic sadface: Username and password do not match any user in this service |
| bad_user3     | secret_bad   | Epic sadface: Username and password do not match any user in this service |
| empty         | secret_sauce | Epic sadface: Username is required                                        |
| standard_user | empty        | Epic sadface: Password is required                                        |

