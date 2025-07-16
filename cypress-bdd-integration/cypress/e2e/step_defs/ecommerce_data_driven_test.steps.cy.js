import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When("I search for {string}", (product) =>
{
  cy.get('[data-autocomplete="5"]').type(product);
  cy.wait(2000);
  cy.get('.type-text').first().click({ force: true });
});

Then('I should see search results for {string}', (searchTerm) =>
{
  cy.get('h1.h4').should('contain.text', searchTerm);
});

Then("The page url should contain {string}", (product) => 
{
  /* Replace space with + since the resultant URL needs it */
  /* https://ecommerce-playground.lambdatest.io/
  index.php?route=product%2Fsearch&search=macbook+air */
  /* https://ecommerce-playground.lambdatest.io/
  index.php?route=product%2Fsearch&search=Palm */
  const expectedQuery = product.replace(/ /g, "+");
  cy.url().should("include", `search=${expectedQuery}`);
});
