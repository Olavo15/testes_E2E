const { usarname } = require("../fixtures/usarnames.ts");

describe("Pagin cadastru", () => {
  it("You must fill in the form fields correctly to register a new user", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.contains("a", "Cadastrar").click();
    cy.get("#name").type(usarname.name);
    cy.get("input[name='email']").type(usarname.email);
    cy.get("#pass-create").type(usarname.pwd);
    // cy.get("span > .pass__view").first().click();
    cy.get("#pass-confirm").type(usarname.new_pwd);
    // cy.get("span > .pass__view").eq(1).click();
    cy.contains("button", "Cadastrar").click();
  });
});
