//Functions

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide  = (a, b) => a / b;
let multiply = (a, b) => a * b;

//Tests

describe("Unit Testing for Dummy application", () =>{
    context("Math with positive numbers", () =>{
        it("Should add positive numbers", () =>{
            expect(add(1, 2)).to.eq(3);
        })

        it("Should subtract positive numbers", () =>{
            expect(subtract(4, 2)).to.eq(2);
        })

        it("Should divide positive numbers", () =>{
            expect(divide(4, 2)).to.eq(2);
        })

        it("Should multiply positive numbers", () =>{
            expect(multiply(4, 2)).to.eq(8);
        })
    })

    describe("Math with decimal numbers", () =>{
        specify("Should add decimal numbers", () =>{
            expect(add(2.2, 2.2)).to.eq(4.4);
        })

        specify("Should subtract decimal numbers", () =>{
            expect(subtract(4.4, 2.2)).to.eq(2.2);
        })
    })
})