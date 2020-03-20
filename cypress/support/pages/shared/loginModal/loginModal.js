const loginModalPrefixSelector = '.loginModal'

Cypress.Commands.add('loginModalGetCloseBtn', () => {
  cy.get('[data-protractor="login-page-exit-button"]');
})

Cypress.Commands.add('loginModalGetEmailInput', () => {
  cy.get('[name="email"]');
})

Cypress.Commands.add('loginModalGetPasswordInput', () => {
  cy.get('[name="pass"]');
})

Cypress.Commands.add('loginModalGetRememberMeInput', () => {
  cy.get('[name="keep"]');
})

Cypress.Commands.add('loginModalGetSubmitBtn', () => {
  cy.get(`${loginModalPrefixSelector} button[type="submit"]`);
})

