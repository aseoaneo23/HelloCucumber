# CypressAndCucumber

🌳 Cypress with Cucumber configuration manual 🥒

How to configure a project that allows to run Cypress tests with Cucumber

## 📇Index

- ✔️[Requirements](#requirements)
- 🥒[Cucumber Configuration](#cucumber-configuration)
- 🌳[Cypress Configuration](#cypress-configuration)
- 🥪[Conecting both](#connecting-configuration)


## Requirements

To start with the configuration make sure you have:

- Node.js (You can visit: https://nodejs.org/en/download )
- A text editor
- Basic experience using terminal

## Cucumber configuration

1. The first step is to check you have Node.js. You can type on your **terminal**:

````
    node -v or npm -v
````

 The Node.js version should appear

2. Now you have to create a new directory and a empty Node.js project using:

````
    mkdir hellocucumber
    cd hellocucumber
    npm init --yes
````

3. Add Cucumber as a development dependency with:

````
    npm install --save-dev @cucumber/cucumber
````

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

````
    mkdir features
    mkdir support/step_definitions --> support is created default
````

 Now you have a basic project with Cucumber
 Type the following command on your root folder to verify that works:

 ````
npm test

````
You have to see something like 0 tests. Its done!


## Cypress configuration

1. First step is install cypress with:

````
   npm install cypress --save-dev
````

2. Now cypress is ready to run, type:

````
   npx cypress open
````


## Connecting configuration

In order to connect Cypress with Cucumber, we have to:

1. Install two necessary dependences using:

````
  npm install --save-dev @badeball/cypress-cucumber-preprocessor
````
````
  npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

````

2. The next step is add configuration bundler in *cypress.config.js. Pay attention to your directories*
   Your file must look like this:
   ````
   const { defineConfig } = require("cypress");
    const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
    const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
    const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

    module.exports = defineConfig({
      e2e: {
         async setupNodeEvents(on, config) {
          // implement node event listeners here
          const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
          });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on,config);

      return config;
    },
    specPattern: "cypress/features/**/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
      },
    });


4. To complete the last step, we have to add some information on the file *package.json*. You need to specify the step_definitions file (check your directory structure):
   
   ````
    "@badeball/cypress-cucumber-preprocessor": {
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber-json",
      "filterSpecs": true,
      "omitFiltered": true,
      "e2e": {
        "stepDefinitions": "cypress/support/step_definitions/**/*.{js}"
      },
      "filePrefix": "",
      "fileSuffix": ".cucumber"
        }
      }
   
   ````

