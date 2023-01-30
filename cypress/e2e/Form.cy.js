import Form from '../support/Pages/Form/page';
const form = new Form;

var mandatories = new Object();
mandatories = {
    firstName : 'Please type your first name',
    lastName : 'Please type your last name',
    businessName : 'Please type your business name',
    email : 'Please type your email name',
    result : 'Please input result number'
}
    
beforeEach(function () {
    cy.visit('/');
    cy.generateFixture();
    cy.fixture('items').then((user) => {
    // "this" is still the test context object
        this.user = user
    })
})
describe('User page', () => {
    it('Register', function () {
        form.fieldForm(this.user.name, this.user.lastName, this.user.businessName, this.user.email);
        form.verifySum();
        form.verifyIfSuccess();
    })
  })

describe('mandatory fields', () => {
    it('do not fill in the name field', function () {
        form.fieldForm('{backspace}', this.user.lastName, this.user.businessName, this.user.email);
        form.verifySum();
        form.mandatoryField(mandatories.firstName);
    })

    it('do not fill in the last name field', function () {
        form.fieldForm(this.user.name, '{backspace}', this.user.businessName, this.user.email);
        form.verifySum();
        form.mandatoryField(mandatories.lastName);
    })

    it('do not fill in the business name field', function () {
        form.fieldForm(this.user.name, this.user.lastName, '{backspace}', this.user.email);
        form.verifySum();
        form.mandatoryField(mandatories.businessName);
    })

    it('do not fill in the email field', function () {
        form.fieldForm(this.user.name, this.user.lastName, this.user.businessName, '{backspace}');
        form.verifySum();
        form.mandatoryField(mandatories.email);
    })

    it('do not fill in the result field', function () {
        form.fieldForm(this.user.name, this.user.lastName, this.user.businessName, this.user.email);
        form.mandatoryField(mandatories.result);
    })
})