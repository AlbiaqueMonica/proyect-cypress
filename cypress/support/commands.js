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

//Commands para el componente Element|TextBox para Email inválido

//Cypress.Commands.add("NoEnvíoDeFormularioMailInvalido", (name, email, address, permAddress)=>{
	
Cypress.Commands.add("NoEnvíoDeFormularioMailInvalido", ()=>{
        // This field is invalid when:
		// Does not contain “@”
		// Does not contain (minimum) 1 alphanumeric character before “@”
		// Does not contain (minimum) 1 alphanumeric character after “@”
		// Does not contain “.” after: 1 alphanumeric character after “@”.
		// Does not contain (minimum) 2 alphanumeric characters after “.”
		//Mockup: “x@x.xx”

		
		cy.fixture("DOM/toolsqa/Elements/TextBox1.Page").then((the) =>
		{
			the.email.datainv.forEach(element => {	
				
			cy.get(the.name.input).type(the.name.valid)
			cy.get(the.email.input).type(element).click({force: true})
			cy.get(the.currentAd.input).type(the.currentAd.valid)
            cy.get(the.permanentAd.input).type(the.currentAd.valid)
            cy.get(the.SubmitBtn).click()
            cy.get(the.Submit.Fail).should('be.visible')
            cy.get('.border').should('not.exist')

			cy.get(the.name.input).clear()
				cy.get(the.email.input).clear()
				cy.get(the.currentAd.input).clear()
				cy.get(the.permanentAd.input).clear()
	})
})
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })