/// <reference types="cypress" />
/// <reference types="../../support" />

describe('Login modal', ()=>{
  it('opens login modal and checks content then closes modal', ()=>{
    const emailPlaceholderVal = 'Wpisz adres email';
    const passPlaceholder = 'Nowe hasło';
    const rememberMeLabel = 'Nie wylogowuj mnie';
    const modalPathExtension = '#modal-';

    cy.navbarShowLoginModal();
    cy.location('hash')
      .should('include', modalPathExtension)
    cy.loginModalGetCloseBtn()
      .scrollIntoView()
      .should('be.visible');
    cy.get('.login-title')
      .should('be.visible')
      .and('have.text', 'Zaloguj się');
    cy.loginModalGetEmailInput()
      .should('be.visible')
      .and('have.attr', 'placeholder', emailPlaceholderVal);
    cy.loginModalGetPasswordInput()
      .should('be.visible')
      .and('have.attr', 'placeholder', passPlaceholder);
    cy.loginModalGetRememberMeInput()
      .siblings('label[for="keep"]')
      .should('have.text', rememberMeLabel);
  });
});