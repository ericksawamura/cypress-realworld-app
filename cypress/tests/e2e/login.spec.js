describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Erick')
    cy.get("[name='lastName']").type('Sawamura')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[name='confirmPassword']").type('admin123')
    cy.get("[type='submit']").click()
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[type='submit']").click()
    cy.get('#firstName-helper-text').should('be.visible')
  });

  describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('Admin')
    cy.get("[type='password']").type('admin123')
    cy.get("[type='submit']").click()
  });

  describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('Test')
    cy.get("[type='password']").type('test123')
    cy.get("[type='submit']").click()
    cy.get(".MuiAlert-message").should('be.visible')
  });
});
});
});
});