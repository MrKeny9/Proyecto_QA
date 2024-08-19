/// <reference types="cypress" />

describe('Agregar producto al carrito', () => {
  it('TC004 | Agregar un producto del catalogo al carrito', () => {

    // Visita la página de demoblaze.com
    cy.visit('https://www.demoblaze.com/');

    // Busca el producto Nokia Lumia
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
    
    // Click al boton "Add to cart"
    cy.get('.col-sm-12 > .btn').click();

    // Ingresar al carrito
    cy.get('#cartur').click();

    // Esperar que cargue por completo y toma captura
    cy.url().should('include', 'cart.html');
    cy.get('.success > :nth-child(1) > img').should('be.visible')
    cy.screenshot('pagina-carrito');
  });
});
