/// <reference types="cypress" />
/// <reference types="../../support" />

describe('Navbar content as guest', () => {
  it('checks navbar content', () => {
    const elsToCheckVisibility = [
      cy.navbarGetLogo,
      cy.navbarGetNavlinksList,
      cy.navbarGetLinkBussinessArea,
      cy.navbarGetLinkCheapTickets,
      cy.navbarGetLinkContact,
      cy.navbarGetLinkHotels,
      cy.navbarGetLinkSpecialOffers,
      cy.navbarGetUserPanelList,
      cy.navbarGetUserPanelFavorites,
      cy.navbarGetUserPanelHamburger,
      cy.navbarGetUserPanelInfoline,
      cy.navbarGetUserPanelLastSearches,
      cy.navbarGetUserPanelLogin,
    ]

    cy.wrap(elsToCheckVisibility).each(element => {
      element().should('be.visible');
    })
  })

  it('checks initial active navlink', () => {
    cy.navbarGetLinkCheapTickets().should('have.class', 'active');
  })

  it('checks user panel contact content', () => {
    const phoneNum = '22 201 11 99';
    const workHours = '9-17';
    const email = 'rezerwacje@fru.pl';

    cy.navbarGetUserPanelInfoline()
      .should('contain.text', phoneNum)
      .and('contain.text', workHours)
      .and('contain.text', email);
  })

  it('checks if tooltips visible after mouseenter on favorites and lastSearched elements & if disappears after mouseout', () => {
    const itemsToHoverConfig = [{
        textToCheck: 'Historia wyszukiwania',
        showTooltip: cy.navbarShowLastSearches,
        hideTooltip: cy.navbarHideLastSearches
      },
      {
        textToCheck: 'Ulubione',
        showTooltip: cy.navbarShowFavorites,
        hideTooltip: cy.navbarHideFavorites
      }
    ];

    cy.wrap(itemsToHoverConfig).each(item => {
      const {showTooltip, hideTooltip, textToCheck} = item;

      showTooltip()
        .as('userPanelElement')
        .should('have.descendants', `div:contains(${textToCheck})`);

      cy.get('@userPanelElement')
        .find(`div:contains(${textToCheck})`)
        .should('be.visible');

      hideTooltip()
        .should('not.have.descendants', `div:contains(${textToCheck})`);

      cy.get('@userPanelElement')
        .find(`div:contains(${textToCheck})`)
        .should('not.exist');
    });
  });

  it('checks hamburger menu open & close', () => {
    cy.navbarShowHamburgerContent()
      .should('have.attr', 'aria-expanded', 'true')
      .siblings('div.dropdown-menu')
      .should('be.visible');
    cy.navbarHideHamburgerContent()
      .should('have.attr', 'aria-expanded', 'false')
      .siblings('div.dropdown-menu')
      .should('not.be.visible');
  })

  it('checks hamburger menu content if has list elements headers and links', () => {
    const liHeaders = ['usługi', 'fru.pl', 'użyteczne linki'];
    const linksToCheckVisibility = [
      cy.hamGetLinkCarRent,
      cy.hamGetLinkBussinessArea,
      cy.hamGetLinkAboutUs,
      cy.hamGetLinkRules,
      cy.hamGetLinkAds,
      cy.hamGetLinkCheapFlightLines,
      cy.hamGetLinkFaq
    ]

    cy.hamGetNavLinksList()
      .should('be.visible')
      .find('>li>span.submenu-title')
      .should('be.visible')
      .and('have.length', liHeaders.length)
      .each((listItem, i) => {
        const normalizedText = listItem.text().toLowerCase();
        cy.wrap(normalizedText).should('eq', liHeaders[i]);
      });
    cy.navbarHideHamburgerContent();
    
    cy.wrap(linksToCheckVisibility).each(link => {
      link().should('be.visible')
      cy.navbarHideHamburgerContent();
    })
  
  })

  it.only('checks userPanel login element when not logged in', () => {
    cy.navbarGetUserPanelLogin()
      .find('[data-protractor="main-page-login-button"]')
      .should('have.text', 'Zaloguj')
  })
});