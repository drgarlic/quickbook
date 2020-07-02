/// <reference types="cypress" />

describe('App page', () => {
    it('Successfully loads', () => {
        cy.visit('/app');
        cy.url().should('include', '/#/app');
        cy.get('#editor');
    });
});
