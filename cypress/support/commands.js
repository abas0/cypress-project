// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import faker from '@faker-js/faker'

Cypress.Commands.add("access", () => {
    cy.visit("http://automationpractice.com/index.php")
})

Cypress.Commands.add('generateFixture', () => {
    const { faker } = require('@faker-js/faker');

    cy.writeFile('cypress/fixtures/items.json', {
            'name': `${faker.name.firstName()}`,
            'lastName': `${faker.name.lastName()}`,
            'businessName':  `${faker.name.firstName()} ${faker.name.lastName()}`,
            'email': `${faker.internet.email()}`
    })
})
   