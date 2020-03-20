/// <reference types="cypress" />
/// <reference types="../../support" />

describe('Navbar links', ()=>{
  const redirectCommandsArr = [
    { command: cy.navbarGoToHomeByLogo, pathExtension: '/' },
    { command: cy.navbarGoToHomeByNavLink, pathExtension: '/' },
    { command: cy.navbarGoToHotels, pathExtension: '/hotele' },
    { command: cy.navbarGoToSpecialOffers, pathExtension: '/bilety-lotnicze/promocje' },
    { command: cy.navbarGoToBussinessArea, pathExtension: '/strefa-biznes' },
    { command: cy.navbarGoToContact, pathExtension: '/kontakt' }
  ];

  it('goes to each navbar link and checks redirection', ()=>{
    cy.wrap(redirectCommandsArr).each(item => {
      const {command, pathExtension} = item;

      command();
      cy.location('pathname').should('eq', pathExtension);
    })
  })
})