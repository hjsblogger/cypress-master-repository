import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I enter {string} in the search box', (searchTerm) =>
{
  cy.get('[data-autocomplete="5"]').type(searchTerm);
});

When('I click on the search button', () =>
{
  cy.get('.type-text').first().click({ force: true });
});

Then('I should see search results related to {string}', (searchTerm) =>
{
  cy.get('h1.h4').should('contain.text', searchTerm);
});

Then('the page title should contain {string}', (searchTerm) => 
{
  cy.title().then((title) => {
    expect(title.toLowerCase()).to.include(searchTerm.toLowerCase());
  });
});