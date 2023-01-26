describe('fillOutForm', () => {
    it('Register', () => {
        cy.visit('https://phptravels.com/demo/');
        cy.get("input[name = 'first_name']").type('João',  {force: true} );
        cy.get("input[name = 'last_name']").type('da Silva',  {force: true} );
        cy.get("input[name = 'business_name']").type('João da Silva',  {force: true} );
        cy.get("input[name = 'email']").type("a@gmail.com",  {force: true} );
        cy.get("#numb1").invoke('text').then((number1) => {
            cy.get("#numb2").invoke('text').then((number2) => {
               var result = parseInt(number1) + parseInt(number2);
               cy.get("#number").type(result, {force: true});
            })
        })
        cy.get('#demo').click({force: true});
        cy.contains('Thank you!').should('be.visible');
    });
});