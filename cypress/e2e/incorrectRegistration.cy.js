const { usarname } = require("../fixtures/usarnames.ts");

describe("Pagin cadastru", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get("[data-test='register-button']").click("");
  });
  it("All required form fields must be filled in to register a new user.", () => {
    cy.incorrectRegister();
  });
});
