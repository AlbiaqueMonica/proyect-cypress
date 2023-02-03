///<reference types = "Cypress"/>

describe("Search Test Cases", () =>{

	before(() => {
		cy.log("Ejecutando Precondiciones de pruebas")
	})

	beforeEach(() => {
		cy.log("Ejecutando Precondiciones comunes a todas las pruebas")
		cy.visit("http://automationpractice.com/index.php")
	})

	after(() => {
		cy.log("Ejecutando Postcondiciones")
	})

	it("Search con diferentes locators", () => {

		
		cy.get('#search_query_top').type("Hola") //search por ID
		cy.get('.search_query.form-control.ac_input').type(" Como están?") //search por la clase: search_query form-control ac_input
		cy.get('[placeholder="Search"]').clear() //search por otra propiedad - clear borra lo que estaba en el elemento
		cy.get('[name="search_query"]').type("dress") //search por propiedad name

		cy.get('#search_query_top').type("Hola").clear().type("Como están?").clear().type("dress")

		cy.get('#searchbox > .btn').click()
		cy.get('.lighter').contains('"dress"')
		
	})

	it("Search hats", () => {
		
		cy.get('[name="search_query"]').type("hats")
		cy.get('#searchbox > .btn').click()
		cy.get('.lighter').contains('"hats"')
		
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