/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager')
      

    })
//Add customer

it('Attempt to add a customer', () =>{
  
    cy.contains('Add Customer').click()
    const prenom = 'firstName'
    const nom='lastName'
    const code = '1234'
    cy.get(':nth-child(1) > .form-control').type(`${prenom}`)
    cy.get(':nth-child(2) > .form-control').type(`${nom}`)
    cy.get(':nth-child(3) > .form-control').type(`${code}{enter}`)
    cy.get('.ng-submitted > .btn').click()

    cy.contains('Customers').click()
    cy.contains('firstName').should('exist')



})

//Open account

it('Attempt to open Account',()=>{
    cy.contains('Add Customer').click()
    cy.contains('Open Account').click()
    cy.get('#userSelect').type('Harry Potter')
    cy.get('#currency').type('Dollar')
    cy.contains('Process').click()

})
//Search customer
it('Attempt to search a customer',()=>{
    cy.contains('Customers').click()
    const nom1='Harry'
    const nom2='azerty'
    cy.get('.form-control').type(`${nom1}{enter}`)
    cy.contains('Harry').should('exist')
    cy.get('.form-control').type(`${nom2}{enter}`)
    cy.contains('azerty').should('not.exist')

})
//Delete customer
it('Attempt to delete a customer',()=>{
    cy.contains('Customers').click()
    const nom1='Harry'
    cy.get('.form-control').type(`${nom1}{enter}`)
    cy.contains('Harry').should('exist')
    cy.get(':nth-child(1) > :nth-child(5) > button').should('contain','Delete').click()
    cy.contains('Harry').should('not.exist')
})

})