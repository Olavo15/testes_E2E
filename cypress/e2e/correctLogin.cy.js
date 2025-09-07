const { usarname } = require("../fixtures/usarnames.ts");

describe("login page", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });
  it("Log in with the registered user", () => {
    cy.get('[data-test="input-loginEmail"]').type(usarname.email);
    cy.get('[data-test="input-loginPassword"]').type(usarname.pwd);
    cy.get('[data-test="submit-button"]').click();
  });
});
