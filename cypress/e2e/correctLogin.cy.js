const { usarname } = require("../fixtures/usarnames.ts");

describe("login page", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });
  it("Log in with the registered user", () => {
    cy.login(usarname.email, usarname.pwd);
  });
});
