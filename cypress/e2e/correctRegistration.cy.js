const { usarname } = require("../fixtures/usarnames.ts");

describe("Pagin cadastru", () => {
  it("You must fill in the form fields correctly to register a new user", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get("[data-test='register-button']").click();
    cy.get("[data-test='input-name']").type(usarname.name);
    cy.get("[data-test='input-email']").type(usarname.email);
    cy.get("[data-test='input-password']").type(usarname.pwd);
    cy.get("[data-test='input-confirm-password']").type(usarname.new_pwd);
    cy.get("[data-test='submit-button']").click();
  });
});
