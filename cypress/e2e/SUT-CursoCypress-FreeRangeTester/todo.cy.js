//https://example.cypress.io/todo

describe('Ejercicio1CursoCypress', ()=>{

    beforeEach(() =>{
        cy.visit("https://example.cypress.io/todo")
    })

    it("TC01: prueba", ()=>{
        cy.url().should("include","todo")
    })
})