// para poder evitar el error de cy is no defined vamos a definir a cy como global

/* global cy */

// Este archivo sera el que contenga nuestras pruebas
// para iniciar una prueba necesitamos darle un nomre
// en este caso usamo describe para darle un titulo

describe("Mi primera prueba con crypres", () => {
  // dentro de nuestro arrow function vamos a describir las pruebas
  it("prueba home pokemon", ()=> {
    // aca vamos a verificar si es que nuestro home funciona o no
    cy.visit("http://localhost:3000/");
  })
})