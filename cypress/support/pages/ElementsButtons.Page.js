class ElementsButtons{
    //Agarrables de Cypress
    // Properties / Elements:
    get = {
        //endpoint: ()=> cy.visit("/login"), / se quita porque no es un agarrable
        dClick: ()=> cy.get('#doubleClickBtn'),
        //doubleMessage: ()=> cy.get('#doubleClickMessage'),
        rClick: ()=> cy.get('#rightClickBtn'),
        //rightMessage: ()=> cy.get('#rightClickMessage'),
        Click: ()=> cy.get('button').last(),
        //dynamicMessage: ()=> cy.get('ul > li > a')
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

   /*
    enterPassword(type){
        this.get.passwordInput().type(type)
    }

    submitLogin(){
        this.get.loginButton().click()
    }

    logoutClick(){
        this.get.helloButton().click()
        this.get.logoutButton().click()

    }
    */
}

export const ebutton = new ElementsButtons;