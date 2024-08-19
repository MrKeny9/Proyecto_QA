/// <reference types="cypress" />

describe('Proyecto Calidad de Software', () => {
    it('TC005 | Eliminar un producto del carrito', () => {
  
      // Visita la página de demoblaze.com
      cy.visit('https://www.demoblaze.com/');
  
      // Busca el producto Nokia Lumia
      cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
      
      // Click al boton "Add to cart"
      cy.get('.col-sm-12 > .btn').click();
  
      //volver a la pagina principal 
      cy.get('#nava').click();
  
      //se agrega producto nuevo 
      cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').click();
  
      // Click al boton "Add to cart"
      cy.get('.col-sm-12 > .btn').click();
  
      // Ingresar al carrito
      cy.get('#cartur').click();
  
      // Esperar que cargue por completo y toma captura
      cy.url().should('include', 'cart.html');
      cy.get('.success > :nth-child(1) > img').should('be.visible')
      cy.screenshot('pagina-carrito');
  
      // se borra uno de los productos agregados
      cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
      
      //despues se carga la pagina nuevamente para ver el cambio realizado 
      cy.get('.success > :nth-child(1) > img').should('be.visible')
      cy.screenshot('pagina- carrito actualizada');
  
      // se toma una captura para ver el cambio realizado 
      cy.get('.success > :nth-child(1) > img').should('be.visible')
      cy.screenshot('pagina_carrito_actualizada_final');
    });
  });