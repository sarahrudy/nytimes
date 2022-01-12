describe('nytimes app flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to see header and date at top of page', () => {
    cy.get('.nyt-logo')
      .should('be.visible')
    cy.get('.date')
      .should('be.visible')
  })

  it('should see categories as buttons at top of page', () => {
    cy.get('.categories')
      .should('be.visible')
    cy.get('.categories > :nth-child(14)')
      .should('be.visible')
      .contains('Politics')
    cy.get('.categories > :nth-child(14)')
      .click()
    cy.get(':nth-child(1) > :nth-child(1) > a > .article-card-container > .article-card__category')
      .contains('us')
  })

  it('should see headline and picture of newspaper and reading glasses under categories', () => {
    cy.get('.landing-h1')
      .should('be.visible')
      .contains('Top news stories making headlines.')
    cy.get('.landing-p')
      .should('be.visible')
      .contains('Click on an article below to view full story.')
  })
})

describe('click on article', () => {
  it('should take user to full article on nytimes if the user clicks on the article card', () => {
    cy.get('.categories')
      .should('be.visible')
    cy.get('.categories > :nth-child(13)')
      .should('be.visible')
      .contains('Opinion')
    cy.get('.categories > :nth-child(13)')
      .click()
    cy.get(':nth-child(1) > :nth-child(1) > a > .article-card-container')
      .click()
      .url()
  })
})