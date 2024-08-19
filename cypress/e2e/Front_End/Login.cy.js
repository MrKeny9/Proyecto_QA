describe('Inicio de sesion', function()
{
    it ('Inicio de sesion ', () => {
     //Visite URL especificada 
        cy.visit('https://www.demoblaze.com/');
    
        cy.get('#login2').click()
        //espera de 2 segundos
        cy.wait (2000)
        cy.get('#loginusername')
        .type('Cypressautomation');
        cy.get('#loginpassword')
        //False evita que Cypress registre la contraseña en los logs de la consola para mantenerla oculta.
        .type('Cypress123',{log:false});
        cy.get('.btn-primary').contains('Log in').click();

        cy.wait(4000)
});
});
