import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to LambdaTest ECommerce Playground Login Page', () =>
{
  cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});

When("I enter username {string}", (username) =>
{
  cy.log(username)
  cy.get("#input-email").type(username);
});

When("I enter password {string}", (password) =>
{
  cy.log(password)
  cy.get("#input-password").type(password);
});

When("I click on the login button", () =>
{
  cy.get("[value='Login']").click();
});

Then("the user should be logged into the LambdaTest ECommerce Playground", () =>
{
  cy.contains("My Orders").should("be.visible");
});

/* This is after the login is successful */
Then("I click on the Shop by Category menu", () =>
{
  cy.get(".both[href='#mz-component-1626147655']")
    .click();
});

Then("I navigate to phone & tablets item", () =>
{
  cy.contains(" Phone, Tablets & Ipod ")
    .then(($elem_phone) => {
    cy.wrap($elem_phone).click();
});
});

Then('I click on the {string} product', (productName) => 
{
  const iPhoneImage = '#mz-product-grid-image-36-212408 > div > div.carousel-item.active > img';

  /* Taking some tips from https://github.com/hjsblogger/cypress-master-repository/
  blob/main/cypress-scroll-into-view/demo/cypress/e2e/scroll-into-view-demo.cy.js#L66C7-L75C21
  */
  /* Scroll to the bottom */
  cy.scrollTo('bottom');

  cy.wait(1000);

  /* Scroll back to the top */
  cy.scrollTo('top');

  /* Additional cushioning for page loading */
  cy.wait(2000);

  cy.get(iPhoneImage)
      .scrollIntoView({ easing: 'linear' })
      .invoke('css', {
        position: 'relative',              /* Ensure proper positioning */
        zIndex: '1000',                   /* Bring it to the front */
        backgroundColor: 'rgba(128, 128, 128, 0.5)', /* Light grey background */
        transition: 'background-color 2.5s ease'    /* Smooth transition */
      });
  
  /* Only for testing purpose */  
  cy.wait(2000);

  /* Check if the image is within the view */
  /* Doc - https://docs.cypress.io/api/commands/scrollintoview#Scrolling */
  cy.get(iPhoneImage, { timeout: 2000 }).should('be.visible');

  /* Click on the element and verify if the click was successful */
  cy.get(iPhoneImage).click();

  /* Verify if the respective product page is open */
  cy.url().should('include', 'product_id=36');
});

Then('I add {string} product to the cart', (productName) =>
{
  cy.get(".order-lg-1 > .text").click();

  cy.wait(2000);

  /*
  No need to switch to the modal window that opens-up
  once the item is added to the cart
  */
  /* cy.get('.toast-header').within(() =>
  {
  */
  /* Click on the CheckOut button */
  cy.get('.form-row .btn-secondary').click();
  /* }); */

  cy.wait(2000);

  /* Verify if the respective product page is open */
  cy.url().should('include', 'checkout/checkout');
});