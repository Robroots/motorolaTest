// Not much id's or unique selectors in app - need to be flexible somehow

const mainNavigationListElementSelector = '.short-hamburger-menu';
const userPanelListElementSelector = '.utils-item';
const hamburgerIdSelector = '#hambugerMenu';

//Get commands

Cypress.Commands.add('navbarGetLogo', () => {
  cy.get('.navbar-brand');
});

Cypress.Commands.add('navbarGetNavlinksList', () => {
  cy.get(mainNavigationListElementSelector);
});

Cypress.Commands.add('navbarGetLinkCheapTickets', () => {
  cy.get(`${mainNavigationListElementSelector} [href="/"]`);
});

Cypress.Commands.add('navbarGetLinkHotels', () => {
  cy.get(`${mainNavigationListElementSelector} [href*="/hotele"]`)
});

Cypress.Commands.add('navbarGetLinkSpecialOffers', () => {
  cy.get(`${mainNavigationListElementSelector} [href*="/bilety-lotnicze/promocje"]`)
});

Cypress.Commands.add('navbarGetLinkBussinessArea', () => {
  cy.get(`${mainNavigationListElementSelector} [href*="/strefa-biznes"]`);
});

Cypress.Commands.add('navbarGetLinkContact', () => {
  cy.get(`${mainNavigationListElementSelector} [href*="/kontakt"]`);
});

Cypress.Commands.add('navbarGetLinkContact', () => {
  cy.get(`${mainNavigationListElementSelector} [href*="/kontakt"]`);
});

Cypress.Commands.add('navbarGetUserPanelList', () => {
  cy.get(userPanelListElementSelector);
});

Cypress.Commands.add('navbarGetUserPanelInfoline', () => {
  cy.get(`${userPanelListElementSelector}:has(.phone-number)`);
});

Cypress.Commands.add('navbarGetUserPanelLastSearches', () => {
  cy.get(`${userPanelListElementSelector}:has([class*="lastSearches"])`);
});

Cypress.Commands.add('navbarGetUserPanelFavorites', () => {
  cy.get(`${userPanelListElementSelector}:has([class*="favorites"])`);
});

Cypress.Commands.add('navbarGetUserPanelLogin', () => {
  cy.get(`${userPanelListElementSelector}.user-item`);
});

Cypress.Commands.add('navbarGetUserPanelHamburger', () => {
  cy.get(`${userPanelListElementSelector}:has([class*="hamburger"])`);
});

//Interaction commands

Cypress.Commands.add('navbarGoToHomeByLogo', () => {
  cy.navbarGetLogo().click();
});

Cypress.Commands.add('navbarGoToHomeByNavLink', () => {
  cy.navbarGetLinkCheapTickets().click();
});

Cypress.Commands.add('navbarGoToHotels', () => {
  cy.navbarGetLinkHotels().click();
});

Cypress.Commands.add('navbarGoToSpecialOffers', () => {
  cy.navbarGetLinkSpecialOffers().click();
});

Cypress.Commands.add('navbarGoToBussinessArea', () => {
  cy.navbarGetLinkBussinessArea().click();
});

Cypress.Commands.add('navbarGoToContact', () => {
  cy.navbarGetLinkContact().click();
});

Cypress.Commands.add('navbarShowLastSearches', () => {
  cy.navbarGetUserPanelLastSearches().trigger('mouseenter');
});

Cypress.Commands.add('navbarHideLastSearches', () => {
  cy.navbarGetUserPanelLastSearches().trigger('mouseleave');
});

Cypress.Commands.add('navbarShowFavorites', () => {
  cy.navbarGetUserPanelFavorites().trigger('mouseenter');
});

Cypress.Commands.add('navbarHideFavorites', () => {
  cy.navbarGetUserPanelFavorites().trigger('mouseleave');
});

Cypress.Commands.add('navbarShowLoginModal', () => {
  cy.navbarGetUserPanelLogin().click();
});

Cypress.Commands.add('navbarShowHamburgerContent', () => {
  cy.navbarGetUserPanelHamburger()
  .find(hamburgerIdSelector)
  .click();
});

Cypress.Commands.add('navbarHideHamburgerContent', () => {
  cy.navbarGetUserPanelHamburger()
    .should('have.class', 'open')
    .find(hamburgerIdSelector)
    .click();
});