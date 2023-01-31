const elements = require('./elements').ELEMENTS;

class FormPage{
    fieldForm(name, lastName, businessName, email){
        cy.get(elements.name).type(name,  {force: true} );
        cy.get(elements.lastName).type(lastName,  {force: true} );
        cy.get(elements.businessName).type(businessName,  {force: true} );
        cy.get(elements.email).type(email,  {force: true} );
    }

    verifySum(){
        cy.get(elements.number1).invoke('text').then((number1) => {
            cy.get(elements.number2).invoke('text').then((number2) => {
               var result = parseInt(number1) + parseInt(number2);
               cy.get(elements.total).type(result, {force: true});
            })
        })
    }
    verifyIfSuccess(){
        cy.get(elements.submit).click({force: true});
        cy.contains('Thank you!').should('be.visible');
    }

    mandatoryField(mandatory){
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alert')
        })
        cy.get(elements.submit).click({force: true});
        cy.get('@alert').should('have.been.calledOnceWith', mandatory);
    }
}

export default FormPage;