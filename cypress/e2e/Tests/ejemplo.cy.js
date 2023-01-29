    /*
    DETALLES Y COMENTARIOS
    
    
    */

describe("Título del TS", () =>{
    
    //variables
    //const url ="https://xxxxxxxxx/" 
    

    beforeEach("Precondición: xxxxxxxxx", () =>
    {
        cy.visit(url)
        cy.url().should("include","login")
        cy.contains("Forgot your password?").click()
        cy.url().should("include", "requestPasswordResetCode")
    })

    it("TC01: xxxxxxxxxxxxxxxxxxxxxxxx", () => {
    /*
    COMENTARIOS
    */
        cy.get(".oxd-input").type(user).should("have.value", user)
        cy.get('.oxd-button--secondary').click()
        cy.contains("Reset Password link sent successfully")
    })


    it("TC02: XXXXXXXXX", () => {
    /*
    COMENTARIOS
    */        
        cy.get('.oxd-button--secondary').click()
        cy.contains("Required").should('be.visible')
        cy.url().should("include","requestPasswordResetCode")
    })
    
    it("TC03: XXXXXXXXXX", () => {
    /*
     COMENTARIOS

    Examples:
        | invalid |
        | 1234 |
        | upex |
        | #%&/ |
    */


    cy.get(lusers).each(( item => {
        cy.get(".oxd-input").type(item).should("have.value", item)
        cy.get('.oxd-button--secondary').click()
    
        cy.get(lusers).then(function(item){
        cy.contains("Reset Password link sent successfully").should("not.exist")
    })
    
        cy.visit(url1)
        cy.url().should("include","login")
        cy.contains("Forgot your password?").click()
        cy.url().should("include", "requestPasswordResetCode")

    }) )  

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