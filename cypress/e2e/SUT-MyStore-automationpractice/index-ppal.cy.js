/// <reference types = "Cypress"/>
//Suite de casos de pruebas
describe("Primer conjunto de casos de prueba", function()
{
    beforeEach(() =>{
        //ingresar a la página
        cy.visit("http://automationpractice.com/index.php")

    })
    
    //caso 1
    it('TC1: Validar cantidad de elementos de la sección página principal', function(){
        
        //verificar la cantidad de elementos visibles, deben ser 7
        cy.get('#homefeatured .product-container').should('have.length', 7)

        //obtener homefeatured . product-container como parámetro
        cy.get('#homefeatured .product-container').as("productosPopulares")

        //verificar cantidad de elementos con parámetro
        cy.get('@productosPopulares').should('have.length', 7)
    })

    //caso 2
    it('TC2: Agregar elemento Printed Dress al carrito desde página principal', function(){
        
        //obtener homefeatured . product-container como parámetro
        cy.get('#homefeatured .product-container').as("productosPopulares")

        //iteramos para encontrar producto x
        cy.get('@productosPopulares')
            .find('.product-name')
            .each(($el, index, $list) => {
                
                //Si buscara fijo una posición
                // cy.get('@productosPopulares').eq(1).contains('Add to cart').click()

                cy.get('@productosPopulares').eq(index).find('.price').then(function($el1){
                    let precio = $el1.text()
                    cy.log(precio)
                    
               
                if($el.attr('title') === 'Printed Dress' && precio.includes('50.99')){
                    cy.log('Se ha encontrado el elemento buscado')
                    cy.log("Se ha encontrado el precio buscado")
                    cy.get('@productosPopulares').eq(index).contains('Add to cart').click()
                }
            })
            })
            cy.get('h2 > .ajax_cart_product_txt').should('contain.text', "There is 1 item in your cart.")
            .should('be.visible')
           
    })

    //caso 3




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