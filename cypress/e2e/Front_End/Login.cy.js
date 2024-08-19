describe('Inicio de sesion', function()
{
    beforeEach(() =>
    {
        cy.visit('https://www.demoblaze.com/');
    
        cy.get('#login2').click()
        cy.wait (2000)
        cy.get('#loginusername')
        .type('prrodrigue1');
        cy.get('#loginpassword')
        .type('Ande1234',{log:false});
        cy.get('.btn-primary').contains('Log in').click();
    })
it ('Test Case 1',function(){

});
});