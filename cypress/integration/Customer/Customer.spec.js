/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      

    })
//login

it('Attempt to login as Harry Potter', () =>{
  
    cy.contains('Customer Login').click()
    cy.get('#userSelect')
    .select('Harry Potter')

    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text','Harry Potter')

})

//Deposit an amount
it('Attempt to Deposit an amount', () =>{

    cy.contains('Customer Login').click()
    cy.get('#userSelect')
    .select('Harry Potter')

    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text','Harry Potter')

    cy.contains('Deposit').click()
    cy.get('.form-control').type('100')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text','Deposit Successful')
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text','100')
})

//Withdraw an amount

it('Attempt to Withdraw an amount=> should fail', () =>{

    cy.contains('Customer Login').click()
    cy.get('#userSelect')
    .select('Harry Potter')

    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text','Harry Potter')

    cy.contains('Withdrawl').click()
    cy.get('.form-control').type('100')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text','Transaction Failed. You can not withdraw amount more than the balance.')


})

it('Attempt to Withdraw an amount=> should succeed', () =>{

    cy.contains('Customer Login').click()
    cy.get('#userSelect')
    .select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text','5096')

    cy.get('.fontBig').should('have.text','Hermoine Granger')

    cy.contains('Withdrawl').click()
    cy.get('.form-control').type('100')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text','Transaction successful')
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text','4996')


})
})
