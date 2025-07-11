import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to LambdaTest ECommerce Playground', () =>
{
  cy.visit('https://ecommerce-playground.lambdatest.io/');
});