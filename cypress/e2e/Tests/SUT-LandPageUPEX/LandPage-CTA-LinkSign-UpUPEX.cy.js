describe('LandPage-CTA-Link-Sign-Up-UPEX', ()=>{
    const formLink = "https://forms.gle/vfFsGR1QdKvCbUqs7"
    beforeEach(() =>{
        cy.visit("https://www.upexwork.com/")
        cy.wait(1000)
    })

    it('TC01: CTA 1 sea visible y tenga propiedades solicitadas', () => {
        cy.get('.hero-description-wrapper').scrollIntoView().should('be.visible')
        cy.contains("UNIRME A LA COMUNIDAD UPEX")
        cy.wait(1000)
        cy.get('#w-node-_96ac3a78-8ab8-b659-9fc8-e822924f466d-56e24645 > div.button-wrapper-hero > a' ).scrollIntoView().should('have.attr', 'target', '_blank' )
        .should('have.attr', 'href', formLink)

    })

    it('TC02: CTA 2 sea visible y tenga propiedades solicitadas',() => {
        cy.scrollTo("bottom")
        cy.wait(2000)
        cy.get('.footer').scrollIntoView()
        .should('be.visible')
        cy.contains("UNIRME A LA COMUNIDAD UPEX")
        cy.wait(1000)
        cy.get('#w-node-a8b1a69c-b530-b9f0-6075-21ea5713dfa4-56e24645 > div:nth-child(4) > a').scrollIntoView().should('have.attr', 'target', '_blank' )
        .should('have.attr', 'href', formLink)
           
        
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