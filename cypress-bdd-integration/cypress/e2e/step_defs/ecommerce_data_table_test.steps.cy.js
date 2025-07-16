const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

const todo_url = "http://todomvc.com/examples/react/dist/";

/* Replaced the above step with Before Hook */
/*
Given("I navigate to ToDo MVC App", () => 
{
  cy.visit(todo_url);
});
*/

Before({ tags: "@ToDoApp" }, () =>
{
  cy.visit(todo_url);
});

When("I create ToDo items with names", (dataTable) => 
{
  const items = dataTable.rawTable.flat();
  items.forEach((item) => {
    cy.get("#todo-input").type(`${item}{enter}`);
  });
});


Then("\{int} ToDo items are visible", (expectedCount) => 
{
  /* document.querySelector('#root > main > ul > li') */
  cy.get('#root > main > ul li').then(($lis) => 
  {
    const actualCount = $lis.length;
    cy.log(`Number of li items: ${actualCount}`);
    expect(actualCount).to.equal(expectedCount);
  });
});
