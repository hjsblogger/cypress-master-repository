@ToDoApp
Feature:  Handling Arrays with Cypress Cucumber

  # @hjsblogger - Replaced this with the Before hook in the Step definition
  # Background: Navigate to ToDo MVC App
  #     Given I navigate to ToDo MVC App

  Scenario: Add items from datatable to the ToDo list
    When I create ToDo items with names
      | Python      |
      | Java        |
      | JavaScript  |
      | C#          |
    Then 4 ToDo items are visible