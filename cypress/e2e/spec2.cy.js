// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-each
import 'cypress-each'

describe('App', () => {
  const urls = ['/index.html', '/about.html', '/contact.html']

  // create separate tests from the list of urls
  // using the "it.each" method provided by "cypress-each"
  // the title of each test should include the index and the URL

  // the full URL is the folder "pages" + the URL from the list
  // visit the URL
  // and confirms the page contains the "h1" with the text "My App"
})
