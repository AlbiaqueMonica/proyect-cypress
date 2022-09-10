///<reference types = "Cypress"/>

/*
Como usuario Admin
Quiero recuperar la contraseña olvidada
Para poder iniciar sesión y continuar la actividad de trabajo
*/

/*
TC1: Validar recuperar contraseña correctamente.
TC2: Validar No poder recuperar contraseña cuando el campo username está vacío.
TC3: Validar No poder recuperar contraseña cuando se ingresa usuario no válido. 
Username : Admin
Password : admin123
*/

describe("Account: Recuperar contraseña Admin", () =>{
    const user = "Admin"
    const pass = "admin123"
    const url1 ="https://opensource-demo.orangehrmlive.com/" 
    const lusers = [1234, 'upex', '#%&/' ]
   
    beforeEach("Precondición: Ir a la página de Radio Button", () =>
    {
        cy.visit(url1)
        cy.url().should("include","login")
        cy.contains("Forgot your password?").click()
        cy.url().should("include", "requestPasswordResetCode")
    })

    it("TC01: Validar recuperar contraseña correctamente", () => {
    /*
    Given el usuario tiene una cuenta creada previamente
    And el usuario ingresa en la sección de recuperación de contraseña
    When el usuario ingresa su username en el input de username
    And hace click en "Reset Password"
    Then debería aparecer un mensaje indicando "Reset Password link sent successfully"
    And debería visualizar el texto "A reset password link has been sent to you via email. You can follow that link and select a new password"
    */
        cy.get(".oxd-input").type(user).should("have.value", user)
        cy.get('.oxd-button--secondary').click()
        cy.contains("Reset Password link sent successfully")
    })


    it("TC02: Validar No poder recuperar contraseña cuando el campo username está vacío", () => {
    /*
    Given el usuario tiene una cuenta creada previamente
    And el usuario ingresa en la sección de recuperación de contraseña
    When el usuario olvida ingresar su username en el input
    And hace click en "Reset Password"
    Then debería aparecer un mensaje de error como "Required" debajo del input
    And no debería poder enviarse la solicitud de cambio de contraseña
    */
        
        cy.get('.oxd-button--secondary').click()
        cy.contains("Required").should('be.visible')
        cy.url().should("include","requestPasswordResetCode")
    })

   
    it("TC03: Validar No poder recuperar contraseña cuando se ingresa usuario no válido", () => {
/*
Given el usuario tiene una cuenta creada previamente
And el usuario ingresa en la sección de recuperación de contraseña
When el usuario ingresa un username inválido
And hace click en "Reset Password"
Then debería aparecer un mensaje de error
And no debería poder enviarse la solicitud de cambio de contraseña

  Examples:
    | invalid |
    | 1234 |
    | upex |
    | #%&/ |
 */
    cy.get(".oxd-input").type(lusers(0)).should("have.value", lusers(0))
    cy.get('.oxd-button--secondary').click()
        
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