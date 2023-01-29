import { login } from "../../../cypress/support/pages/LogInSB.Page";

/* [GX-7544](https://upexgalaxy9.atlassian.net/browse/GX-7544) Created: 25/1/23 Updated: 25/1/23

*   **AS** website User of the website SpaceAndBeyond
*   **I** want to **Login and Logout**
*   **SO** that I can have control over my account
*/

const loginPage = Cypress.env("endpoints").LoginSB;
const { username, password } = Cypress.env("userLogin");

describe("Login and Logout", () => {
    beforeEach("User is in Login Page", () => {
        cy.visit("/");
        //cy.url().should("contain", loginPage)
        cy.contains("Log in").click();
        cy.url().should("contain", "login");
    });
    context("Login", () => {
        it("TC01: Validate login successfully", () => {
            /*7545 | TC1:  Validar Login correcto con credenciales válidas.
          */
            login.enterUsername(username);
            login.enterPassword(password);
            login.submitLogin();
            cy.get('[type="button"] > span:first-child').should(
                "contain",
                "Hello, John"
            );
        });

        it("TC02: Validate login unsuccessfully", () => {
            /*7545 | TC2:  Validar no pueda loguearse con ‘username’ vacío.
              */
            login.enterPassword(password);
            login.submitLogin();
            cy.contains("Name is a required field.").should("be.visible");
            cy.contains("Password is a required field.").should("not.exist");
            cy.contains("HELLO, JOHN").should("not.exist");
        });

        it("TC03: Validate pass unsuccessfully", () => {
            /*7545 | TC3:  Validar no pueda loguearse con ‘password’ vacío.
                  */
            login.enterUsername(username);
            login.submitLogin();
            cy.contains("Name is a required field.").should("not.exist");
            cy.contains("Password is a required field.").should("be.visible");
            cy.contains("HELLO, JOHN").should("not.exist");
        });

        it("TC04: Validate username < 3 characters - unsuccessfully", () => {
            /*7545 | TC4:  Validar no pueda loguearse con ‘username’ con menos de 3 caracteres.
                      */
            login.enterUsername("mo");
            login.enterPassword(password);
            login.submitLogin();
            cy.contains("Name is a required field.").should("be.visible");
            cy.contains("Password is a required field.").should("not.exist");
            cy.contains("HELLO, JOHN").should("not.exist");
        });

        it.skip("TC05: Validate password < 5 characters - unsuccessfully", () => {
            /*7545 | TC5:  Validar no pueda loguearse con ‘password’ de menos de 5 caracteres.
                          */
            login.enterUsername(username);
            login.enterPassword("pass");
            login.submitLogin();
            cy.contains("Name is a required field.").should("not.exist");
            cy.contains("Password is a required field.").should("be.visible");
            cy.contains("HELLO, JOHN").should("not.exist");
        });

        it.skip("TC06: Validate password > 30 characters - unsuccessfully", () => {
            /*7545 | TC6:  Validar no pueda loguearse con ‘password’ de más de 30 caracteres.
                              */
            login.enterUsername(username);
            login.enterPassword("1234567890123456789012345678901");
            login.submitLogin();
            cy.contains("Name is a required field.").should("not.exist");
            cy.contains("Password is a required field.").should("be.visible");
            cy.contains("HELLO, JOHN").should("not.exist");
        });
    });

    describe("Logout", () => {
        it("TC07: Validate logout successfully", () => {
            /*7545 | TC7:  Validar Log-out correcto luego de haber iniciado sesión.*/
    
            login.enterUsername(username);
            login.enterPassword(password);
            login.submitLogin();
            cy.get('[type="button"] > span:first-child').should(
                "contain",
                "Hello, John"
            );
            login.logoutClick();
            cy.url().should("not.contain", "login");
        });
    });
});

