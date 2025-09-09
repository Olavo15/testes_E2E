describe("login page", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });
  it("Log incorrect", () => {
    cy.incorrectLogin("email.jjs@naosei", "La");
  });
});
