/// <reference types="cypress" />

describe('Home page', () => {
    it('Successfully loads', () => {
        cy.visit('/');
        cy.url().should('include', '/#/');
        cy.contains('Github');
    });
});
