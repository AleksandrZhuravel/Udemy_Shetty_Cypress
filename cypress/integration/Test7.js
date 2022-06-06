/// <reference types="cypress" />

describe('My First Test Suite', function () {
    it('My First Test case', function () {

        //Check boxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
        })

    })
})