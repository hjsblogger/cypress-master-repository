import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* fixtures file is present in fixtures/products.json */
When("I search for all products from {string}", (fixtureFile) =>
{
  cy.fixture(fixtureFile).then((data) =>
  {
    data.products.forEach((product) =>
    {
        cy.log(product)
        cy.get('[data-autocomplete="5"]')
          .clear()
          .type(product);

      /* Click on the Search Button */
      cy.get('.type-text').first().click({ force: true });

      /* Validate the results */
      cy.get('h1.h4').should('contain.text', product);

      cy.title().then((title) =>
      {
            expect(title.toLowerCase()).to.include(product.toLowerCase());
      });
    });
  });
});
