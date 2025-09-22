@ToDoHookApp
Feature:  Demonstration of Hooks in Cypress Cucumber Preprocessor

  Scenario: Add items from datatable to the ToDo list
    When Add ToDo items with automation frameworks
      | Selenium       |
      | Cypress        |
      | Playwright     |
      | Pyppeteer      |
    Then 4 automation frameworks are visible