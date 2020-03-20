/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    loginModalGetCloseBtn(): Chainable<any>
    loginModalGetEmailInput(): Chainable<any>
    loginModalGetPasswordInput(): Chainable<any>
    loginModalGetRememberMeInput(): Chainable<any>
    loginModalGetSubmitBtn(): Chainable<any>
    loginModalGetRegisterLink(): Chainable<any>
    loginModalGetForgotPassLink(): Chainable<any>
  }
}