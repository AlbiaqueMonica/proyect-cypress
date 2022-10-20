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

Cypress.Commands.add('recorrerTabList', () => {
	cy.fixture("DOM/Iterations/Selectable1262.Page").then((the) => {
        
		the.list.contenedor.forEach((element, index) => {
			cy.get(element).should('have.text', the.list.text[index]) // valida el texto
			cy.get(element).should("not.have.class", "active")  //valida que por defecto no estén seleccionados
			cy.get(element).should('have.css', 'background-color', 'rgb(255, 255, 255)') // valida que el color de fondo sea blanco
			cy.get(element).should('have.css', 'color', 'rgb(73, 80, 87)') // valida que el color de fuente sea casi negro
			//cy.get(element).should('have.css', 'color', 'black')// expected <li.mt-2.list-group-item.list-group-item-action> to have CSS property color with the value black, but the value was rgb(73, 80, 87)	
			//Seleccionar uno por uno
			cy.get(element).click()
			//Validar que quede activo
			cy.get(element).should("have.class", "active")  
			//Validar que el fondo sea azul (#007bff)
			cy.get(element).should('have.css', 'background-color', 'rgb(0, 123, 255)') 
			// Validar que el color de fuente sea blanco (#fff)
			cy.get(element).should('have.css', 'color', 'rgb(255, 255, 255)') 
		})
	})
})

Cypress.Commands.add('deseleccionarTabList', () => {
	cy.fixture('DOM/Iterations/Selectable1262.Page').then((the) => {
		the.list.contenedor.forEach((element, index) => {
			//Seleccionar uno por uno
			cy.get(element).click()
			//Validar que quede activo
			cy.get(element).should("not.have.class", "active")  
			//Validar que el fondo sea blanco (#fff)
			cy.get(element).should('have.css', 'background-color', 'rgb(255, 255, 255)') 
			// Validar que el color de fuente sea casi negro
			cy.get(element).should('have.css', 'color', 'rgb(73, 80, 87)') 
		
		})
	})
})

Cypress.Commands.add('recorrerTabGrid', () => {
	
	cy.fixture('DOM/Iterations/Selectable1262.Page').then((the) => {
		let i = 0
		the.grid.filas.forEach((element, index) => {
			let item = ""
			if (element == "#row1"){
				the.grid.numeros1.forEach((num, k) => {	
					item = element + the.grid.child[k]
				//item = "#row1 > :nth-child(1)"
					cy.get(item).should('have.text', num) // valida el texto
					cy.get(item).should("not.have.class", "active")  //valida que por defecto no estén seleccionados
					cy.get(item).should('have.css', 'background-color', 'rgb(255, 255, 255)') // valida que el color de fondo sea blanco
					cy.get(item).should('have.css', 'color', 'rgb(73, 80, 87)') // valida que el color de fuente sea casi negro
					cy.get(item).click()
				})
			}			

			if (element == "#row2"){
				the.grid.numeros2.forEach((num, k) => {	
					item = element + the.grid.child[k]
				//item = "#row1 > :nth-child(1)"
					cy.get(item).should('have.text', num) // valida el texto
					cy.get(item).should("not.have.class", "active")  //valida que por defecto no estén seleccionados
					cy.get(item).should('have.css', 'background-color', 'rgb(255, 255, 255)') // valida que el color de fondo sea blanco
					cy.get(item).should('have.css', 'color', 'rgb(73, 80, 87)') // valida que el color de fuente sea casi negro
					cy.get(item).click()
				})
			}			

			if (element == "#row3"){
				the.grid.numeros3.forEach((num, k) => {	
					item = element + the.grid.child[k]
				//item = "#row1 > :nth-child(1)"
					cy.get(item).should('have.text', num) // valida el texto
					cy.get(item).should("not.have.class", "active")  //valida que por defecto no estén seleccionados
					cy.get(item).should('have.css', 'background-color', 'rgb(255, 255, 255)') // valida que el color de fondo sea blanco
					cy.get(item).should('have.css', 'color', 'rgb(73, 80, 87)') // valida que el color de fuente sea casi negro
					cy.get(item).click()
				})
			}			
			
		})
	})
})

Cypress.Commands.add('deseleccionarTabGrid2', () => {
    cy.fixture('DOM/Iterations/Selectable1262.Page').then((the) => {

        the.grid.filas.forEach((element, index) => {
            let item = ""
            the.grid.filas[index].forEach((num, k) => {	
                item = element + the.grid.child[k]
            //item = "#row1 > :nth-child(k)"
                cy.get(item).should("have.class", "active")  //valida que estén seleccionados
                cy.get(item).should('have.css', 'background-color', 'rgb(0, 123, 255)') // valida que el color de fondo sea azul
                cy.get(item).should('have.css', 'color', 'rgb(255, 255, 255)') // valida que el color de fuente sea blanco
                cy.get(item).click()
            })

        })

    })


})

Cypress.Commands.add('deseleccionarTabGrid', () => {
	
	cy.fixture('DOM/Iterations/Selectable1262.Page').then((the) => {
		
		the.grid.misfilas.forEach((element, index) => {
			let item = ""

			if (element == "#row1"){
				the.grid.numeros1.forEach((num, k) => {	
					item = element + the.grid.child[k]
				//item = "#row1 > :nth-child(k)"
					cy.get(item).should("have.class", "active")  //valida que estén seleccionados
					cy.get(item).should('have.css', 'background-color', 'rgb(0, 123, 255)') // valida que el color de fondo sea azul
					cy.get(item).should('have.css', 'color', 'rgb(255, 255, 255)') // valida que el color de fuente sea blanco
					cy.get(item).click()
				})
			}			

			if (element == "#row2"){
				the.grid.numeros2.forEach((num, k) => {	
					item = element + the.grid.child[k]
				//item = "#row2 > :nth-child(k)"
				cy.get(item).should("have.class", "active")  //valida que estén seleccionados
				cy.get(item).should('have.css', 'background-color', 'rgb(0, 123, 255)') // valida que el color de fondo sea azul
				cy.get(item).should('have.css', 'color', 'rgb(255, 255, 255)') // valida que el color de fuente sea blanco
				cy.get(item).click()
				})
			}			

			if (element == "#row3"){
				the.grid.numeros3.forEach((num, k) => {	
					item = element + the.grid.child[k]
				//item = "#row3> :nth-child(k)"
				cy.get(item).should("have.class", "active")  //valida que estén seleccionados
				cy.get(item).should('have.css', 'background-color', 'rgb(0, 123, 255)') // valida que el color de fondo sea azul
				cy.get(item).should('have.css', 'color', 'rgb(255, 255, 255)') // valida que el color de fuente sea blanco
				cy.get(item).click()
				})
			}			
			
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