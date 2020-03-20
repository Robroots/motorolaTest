import './navbar'

// Not much id's or unique selectors in app - need to be flexible somehow
const commonDropdownMenuSelector = 'div.dropdown-menu';
const commonMenuListSelector = 'ul.nav-hamburger';

//Get commands

Cypress.Commands.add('hamGetNavLinksList', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector}[ng-if]`);
})

Cypress.Commands.add('hamGetLinkCarRent', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/samochody"]`);
})

Cypress.Commands.add('hamGetLinkBussinessArea', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/strefa-biznes"]`);
})

Cypress.Commands.add('hamGetLinkAboutUs', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/nasze-wartosci"]`);
})

Cypress.Commands.add('hamGetLinkRules', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/regulaminy"]`);
})

Cypress.Commands.add('hamGetLinkAds', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/reklama"]`);
})

Cypress.Commands.add('hamGetLinkCheapFlightLines', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/tanie-linie-lotnicze"]`);
})

Cypress.Commands.add('hamGetLinkFaq', () => {
  cy.navbarShowHamburgerContent().siblings(commonDropdownMenuSelector)
    .find(`${commonMenuListSelector} a[href="/faq"]`);
})

// Interaction commands

Cypress.Commands.add('hamGoToCarRent', () => {
  cy.hamGetLinkCarRent().click();
})

Cypress.Commands.add('hamGoToBussinessArea', () => {
  cy.hamGetLinkBussinessArea().click();
})

Cypress.Commands.add('hamGoToAboutUs', () => {
  cy.hamGetLinkAboutUs().click();
})

Cypress.Commands.add('hamGoToRules', () => {
  cy.hamGetLinkRules().click();
})

Cypress.Commands.add('hamGoToAds', () => {
  cy.hamGetLinkAds().click();
})

Cypress.Commands.add('hamGoToCheapFlightLines', () => {
  cy.hamGetLinkCheapFlightLines().click();
})

Cypress.Commands.add('hamGoToFaq', () => {
  cy.hamGetLinkFaq().click();
})
