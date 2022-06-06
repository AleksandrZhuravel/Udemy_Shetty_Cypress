/// <reference types="cypress" />

describe('My First Test Suite', function() {
    it('My First Test case', function() 
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1')
       
      
    })
})