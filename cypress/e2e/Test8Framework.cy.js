/// <reference types="cypress" />

describe('My Second Test Suite', function () {

    before(function () {
        //Runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('My First Test case', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
        // cy.get('h4.card-title').each(($el, index, $list) => {

        //     if ($el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })

        cy.selectProduct('Blackberry')
    })
})