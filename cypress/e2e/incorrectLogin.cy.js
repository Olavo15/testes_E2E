const { usarname } = require("../fixtures/usarnames.ts");

describe("login page", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      }
    ).as("stubPost");
  });

  it("Log incorrect", () => {
    cy.incorrectLogin("email.jjs@naosei", "La");
  });

  it("should fail even if the fields are filled in correctly", () => {
    cy.login(usarname.email, usarname.pwd);
    cy.wait("@stubPost");
    cy.contains("Falha no login. Consulte suas credenciais.").should(
      "be.visible"
    );
  });
});
