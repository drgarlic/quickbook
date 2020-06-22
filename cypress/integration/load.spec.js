/// <reference types="cypress" />

describe('Home page', () => {
    it('Successfully loads', () => {
        cy.visit('/');
        cy.url().should('include', '/#/');
        cy.contains('Github');
    })
})

describe('App page', () => {
    it('Successfully loads', () => {
        cy.visit('/app');
        cy.url().should('include', '/#/app');
        cy.get('#editor');
    })
})
