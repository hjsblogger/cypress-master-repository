Feature: Data Driven Testing with Cypress Cucumber

  Background: Navigate to LambdaTest ECommerce Playground
      Given I navigate to LambdaTest ECommerce Playground

  Scenario Outline: Search for <product> and validate results
    When I search for "<product>"
    Then I should see search results for "<product>"
    Then The page url should contain "<product>"

  Examples:
    | product        |
    | macbook air    |
    | Samsung galaxy tab     |     
    | palm           |