import { Before } from "@badeball/cypress-cucumber-preprocessor";

/* This is triggered before the execution of each scenario in a feature file */
/* It also matches the tag - @ToDoHookApp */

Before({ tags: "@ToDoHookApp" }, () => {
  cy.log("✅ Hook triggered: Visiting ToDoMVC app");
  cy.visit("http://todomvc.com/examples/react/dist/");
});
