    describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('Admin')
    cy.get("[type='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get("[href='/contacts']").click()
    cy.get("[data-test='transaction-list-empty-create-transaction-button']").click()
    cy.get(".css-konndc-MuiListItemText-root").eq(0).click()
    cy.get("[name='amount']").type('1.00')
    cy.get("[placeholder='Add a note']").type('Money')
    cy.get("[data-test='transaction-create-submit-payment']").click()
  });
});