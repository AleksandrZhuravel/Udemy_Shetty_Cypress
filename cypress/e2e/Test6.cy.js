/// <reference types="cypress" />

describe('My First Test Suite', function () {
    it('My First Test case', function () {

        //Check boxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('div.mouse-hover-content').invoke('show')

        cy.contains('Top').click()
        cy.url().should('include', 'top')

    })
})