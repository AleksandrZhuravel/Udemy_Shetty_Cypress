/// <reference types="cypress" />
import HomePage from '../e2e/pageObjects/HomePage'
import ProductPage from '../e2e/pageObjects/ProductPage'

describe('My Second Test Suite', function () {

    before(function () {
        //Runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('My First Test case', function () {
        
        const homePage = new HomePage();
        const productPage = new ProductPage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/');


        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        Cypress.config('defaultCommandTimeout', 8000)

        productPage.checkOutButton().click()

        cy.contains('Checkout').click()
        cy.get('#country').type('India')

        cy.get('.suggestions > ul > li > a')

        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        // cy.get('select').select(this.data.gender)
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        // cy.get('#inlineRadio3').should('be.disabled')

        // cy.get(':nth-child(2) > .nav-link').click()
        // cy.get('h4.card-title').each(($el, index, $list) => {

        //     if ($el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })

        // this.data.productName.forEach(function (element) {
        //     console.log(element);
        //     cy.selectProduct(element)
        // });

        // this.data.productName.forEach(function (element) {
        //     console.log(element);
        //     cy.selectProduct(element)
        // }
        // );

        // this.data.productName.forEach(element => {
        //     console.log(element);
        //     cy.selectProduct(element)
        // });
    })
})