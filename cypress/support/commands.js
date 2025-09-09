Cypress.Commands.add("login", (email, password) => {
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add("incorrectLogin", (email, password) => {
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
  cy.contains("Por favor, verifique o email digitado").should("be.visible");
  cy.contains(
    "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
  ).should("be.visible");
});

Cypress.Commands.add("register", (name, email, password, cfmpassword) => {
  cy.get("[data-test='input-name']").type(name);
  cy.get("[data-test='input-email']").type(email);
  cy.get("[data-test='input-password']").type(password);
  cy.get("[data-test='input-confirm-password']").type(cfmpassword);
  cy.get("[data-test='submit-button']").click();
});

Cypress.Commands.add("incorrectRegister", () => {
  cy.visit("https://adopet-frontend-cypress.vercel.app/");
  cy.get("[data-test='register-button']").click("");
  cy.get("[data-test='submit-button']").click();
  cy.contains("É necessário informar um endereço de email").should(
    "be.visible"
  );
  cy.contains("Crie uma senha").should("be.visible");
  cy.contains("Repita a senha criada acima").should("be.visible");
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
