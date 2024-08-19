describe('Registro de Usuario', () => {
    it('TC001 | Verificar registro de usuario', () => {
      // Visitar la página principal
      cy.visit('https://www.demoblaze.com/index.html')
  
      // Hacer clic en el botón de Sign Up para abrir el modal
      cy.get('#signin2').click()
  
      // Esperar a que el modal de Sign Up aparezca
      cy.get('#signInModal').should('be.visible')
  
      // Ingresar el nombre de usuario
      cy.get('#sign-username').type('Cypressautomation', { force: true })
  
      // Ingresar la contraseña
      cy.get('#sign-password').type('Cypress123', { force: true })
  
      // Hacer clic en el botón de Sign Up (forzando la acción)
      cy.get('button[onclick="register()"]').click({ force: true })
  
      // Esperar a que la solicitud de registro se complete
      cy.wait(5000)  // Ajusta este tiempo si es necesario
    })
  })
  
  