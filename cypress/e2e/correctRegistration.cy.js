const { usarname } = require("../fixtures/usarnames.ts");

describe("Pagin cadastru", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get("[data-test='register-button']").click();
  });
  it("You must fill in the form fields correctly to register a new user", () => {
    cy.register(usarname.name, usarname.email, usarname.pwd, usarname.pwd);
  });
});
