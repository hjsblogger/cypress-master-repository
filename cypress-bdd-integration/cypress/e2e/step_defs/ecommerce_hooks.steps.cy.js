import '../../hooks/hooks.js';

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("Add ToDo items with automation frameworks", (dataTable) => 
{
  const items = dataTable.rawTable.flat();
  items.forEach((item) => {
    cy.get("#todo-input").type(`${item}{enter}`);
  });
});


Then("\{int} automation frameworks are visible", (expectedCount) => 
{
  /* document.querySelector('#root > main > ul > li') */
  cy.get('#root > main > ul li').then(($lis) => 
  {
    const actualCount = $lis.length;
    cy.log(`Number of li items: ${actualCount}`);
    expect(actualCount).to.equal(expectedCount);
  });

  cy.wait(2000);
  cy.log("✅ Hook demonstration complete");
});
