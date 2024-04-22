# Name and description of the project

🥒 Cypress with Cucumber configuration manual 🥒

How to configure a project that allows to run Cypress tests with Cucumber

## Index

- [Requirements](#requirements)
- [Cucumber configuration](#CucumberConfiguration)
- [Cypress configuration](#CypressConfiguration)

## Requirements

To start with the configuration make sure you have:

- Node.js (You can visit: https://nodejs.org/en/download )
- A text editor
- Basic experience using terminal

## CucumberConfiguration

1. The first step is to check you have Node.js. You can type on your **terminal**:

    *node -v* or *npm -v*

    The Node.js version should appear

2. Now you have to create a new directory and a empty Node.js project using:

    *mkdir* hellocucumber
    *cd* hellocucumber
    *npm init --yes*

3. Add Cucumber as a development dependency with:

    *npm install --save-dev @cucumber/cucumber*

4. Open your text editor and change the *test* section in **Package.json**. It should look like this:

````
    {
  "name": "hellocucumber",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "cucumber-js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cucumber": "^10.4.0"
  }
}

````
5. Prepare the file structure, from the project root:

    *mkdir features*
    *mkdir features/step_definitions*

6. Create a file called **cucumber.js** at the root of the project and add the following sentences:

````
module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}'`
}

````

7. To finish this configuration you have to create a file called **features/step_definitions/stepdefs.js** with this content:

    ````
    const assert = require('assert');
    const { Given, When, Then } = require('@cucumber/cucumber');
    
    ````
 Now you have a basic project with Cucumber
    



## CypressConfiguration