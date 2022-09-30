describe('US-GX-641-ToolsQA | Elements | Text Box: Fill form and Submit', () =>{

	beforeEach('Ingresar a la página', () => {
       cy.visit("https://demoqa.com/text-box")
	   cy.url().should("contain", "text-box")
	   cy.clearCookies()
	   cy.clearLocalStorage()
	   
    })

	it("TC01: Validar envío campos válidos aparezcan en la respuesta",  () => {

		cy.get('#userName').type("Matias")
		cy.get('#userEmail').type("matias@gmail.com").click({force: true})
		cy.get('#currentAddress').type("myaddress")
		cy.get('#permanentAddress').type("mypaddress")
		cy.get('#submit').click()
		cy.get('.border').should("be.visible")
		.should("contain", "Name:Matias" )
		.should("contain", "Email:matias@gmail.com" )
		.should("contain", "Current Address :myaddress" )
		.should("contain", "Permananet Address :mypaddress" )
		
	})

			it("TC02: Validar No Envío de formulario con Email inválido.", () =>{
				// This field is invalid when:
				// Does not contain “@”
				// Does not contain (minimum) 1 alphanumeric character before “@”
				// Does not contain (minimum) 1 alphanumeric character after “@”
				// Does not contain “.” after: 1 alphanumeric character after “@”.
				// Does not contain (minimum) 2 alphanumeric characters after “.”
				//Mockup: “x@x.xx”
				cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) =>{
					the.email.datainv.forEach(element => {
				cy.NoEnvíoDeFormularioMailInvalido(the.name.valid, element, the.currentAd.valid, the.permanentAd.valid)

				cy.get(the.name.input).clear()
				cy.get(the.email.input).clear()
				cy.get(the.currentAd.input).clear()
				cy.get(the.permanentAd.input).clear()
				
			})
			})
		});


	it("TC03: Validar envío de formulario con todos los campos vacíos.", () =>{
        cy.get('#submit').click()
		cy.get('.border').should('not.exist')

	})

})



//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}