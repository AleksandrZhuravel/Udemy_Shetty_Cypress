/// <reference types="cypress" />

describe('My First Test Suite', function () {
    it('My First Test case', function () {

        //Check boxes
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.visit('https://qaclickacademy.com/practice.php');
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //window:alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'www.rahulshettyacademy')

        cy.go('back')



    })
})