/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    navbarGetLogo(): Chainable<any>

    navbarGetNavlinksList(): Chainable<any>
    navbarGetLinkCheapTickets(): Chainable<any>
    navbarGetLinkHotels(): Chainable<any>
    navbarGetLinkSpecialOffers(): Chainable<any>
    navbarGetLinkBussinessArea(): Chainable<any>
    navbarGetLinkContact(): Chainable<any>

    navbarGetUserPanelList(): Chainable<any>
    navbarGetUserPanelInfoline(): Chainable<any>
    navbarGetUserPanelLastSearches(): Chainable<any>
    navbarGetUserPanelFavorites(): Chainable<any>
    navbarGetUserPanelLogin(): Chainable<any>
    navbarGetUserPanelHamburger(): Chainable<any>

    navbarGoToHomeByLogo(): Chainable<any>
    navbarGoToHomeByNavLink(): Chainable<any>
    navbarGoToHotels(): Chainable<any>
    navbarGoToSpecialOffers(): Chainable<any>
    navbarGoToBussinessArea(): Chainable<any>
    navbarGoToContact(): Chainable<any>

    navbarShowLastSearches(): Chainable<any>
    navbarHideLastSearches(): Chainable<any>
    navbarShowFavorites(): Chainable<any>
    navbarHideFavorites(): Chainable<any>
    navbarShowLoginModal(): Chainable<any>
    navbarHideLoginModal(): Chainable<any>
    navbarShowHamburgerContent(): Chainable<any>
    navbarHideHamburgerContent(): Chainable<any>

    hamGetNavLinksList(): Chainable<any>
    hamGetLinkCarRent(): Chainable<any>
    hamGetLinkBussinessArea(): Chainable<any>
    hamGetLinkAboutUs(): Chainable<any>
    hamGetLinkRules(): Chainable<any>
    hamGetLinkAds(): Chainable<any>
    hamGetLinkCheapFlightLines(): Chainable<any>
    hamGetLinkFaq(): Chainable<any>

    hamGoToCarRent(): Chainable<any>
    hamGoToBussinessArea(): Chainable<any>
    hamGoToAboutUs(): Chainable<any>
    hamGoToRules(): Chainable<any>
    hamGoToAds(): Chainable<any>
    hamGoToCheapFlightLines(): Chainable<any>
    hamGoToFaq(): Chainable<any>
  }
}