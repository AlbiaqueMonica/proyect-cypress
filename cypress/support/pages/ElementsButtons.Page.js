class ElementsButtons{
    //Agarrables de Cypress
    // Properties / Elements:
    get = {
        //endpoint: ()=> cy.visit("/login"), / se quita porque no es un agarrable
        dClick: ()=> cy.get('#doubleClickBtn'),
       
        rClick: ()=> cy.get('#rightClickBtn'),
        
        Click: ()=> cy.get('button').last(),
        
    }

    //Accionables de Cypress
    // Functions / Methods:
    dClick(){
        this.get.dClick().dblclick()
    }

    rClick(){
        this.get.rClick().rightclick()
    }

    Click(){
        this.get.Click().click()
    }

    clickEnrClick(){
        this.get.rClick().click()
    }

    dClickInrClick(){

        this.get.rClick().dblclick()
    }

    clickIndClick(){

        this.get.dClick().click()
    }

   
}

export const ebutton = new ElementsButtons;