describe("Api Adopet", () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkNjc0MjQwOC1hOWYwLTQzZGUtOGY2MS1jOWQ3MGIxY2VmMTEiLCJhZG9wdGVyTmFtZSI6Ikpvw6NvIEx1Y2FzIiwiaWF0IjoxNzU4MDU4OTIyLCJleHAiOjE3NTgzMTgxMjJ9.-OFx14tJ9MQ9ocsR77_71H9TyDI-TSLHgyi_sBXcDBA`;

  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c",
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("msg");
    });
  });
});
