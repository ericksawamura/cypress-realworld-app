describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('Admin')
    cy.get("[type='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get("[href='/personal']").click()
  });

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('Admin')
    cy.get("[type='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get("[href='/personal']").click()
    cy.get("[data-test='transaction-list-filter-date-range-button']").click()
    cy.get(".react-calendar__month-view__days__day").eq(16).click().click()
  });
});
});