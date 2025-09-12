Feature: Data Driven Testing with Cypress Cucumber

  Background: Navigate to LambdaTest ECommerce Playground
    Given I navigate to LambdaTest ECommerce Playground

  Scenario: Search products from fixture file
    When I search for all products from "products.json"