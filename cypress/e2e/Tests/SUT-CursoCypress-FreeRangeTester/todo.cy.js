//https://example.cypress.io/todo

describe('Ejercicio1 Example Todo app', ()=>{

    beforeEach(() =>{
        cy.visit("https://example.cypress.io/todo")
    })

    it("TC01: prueba", ()=>{
        cy.url().should("include","todo")
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