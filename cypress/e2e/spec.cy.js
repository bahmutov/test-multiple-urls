// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('App', () => {
  const urls = ['/index.html', '/about.html', '/contact.html']

  // create separate tests from the list of urls
  // using the array "forEach" method
  // the title of each test should include the index and the URL
  urls.forEach((url, k) => {
    it(`should work for ${k + 1} : ${url}`, () => {
      // the full URL is the folder "pages" + the URL from the list
      const fullUrl = 'pages' + url
      // visit the URL
      cy.visit(fullUrl)
      // and confirms the page contains the "h1" with the text "My App"
      cy.contains('h1', 'My App')
    })
  })
})
