describe('Name of the group', () => {
  it('starts with black background', () => {
    cy.visit('/')
    cy.get('body').should('have.css', 'background-color', 'rgb(46, 52, 64)')
  })
})
