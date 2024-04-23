
export const visitWebPage = (url) => cy.visit(url)

export const clickOnButton = (button) => cy.get(button).click()

export const verifyExpectedUrlAddress = (path) => cy.url().should('eq', path)

export const isVisible = (object) => cy.get(object).should('be.visible')