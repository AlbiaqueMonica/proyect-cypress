describe("Home Free Range Tester", () => {
    beforeEach(() => {
        cy.visit("https://www.freerangetesters.com/")
    })


    it("TC01: Should have a title", () => {
        cy.url().should('include', 'testers')
        cy.title().should('include', 'Free Range Testers')
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