<img width="1024" height="680" alt="Image" src="https://github.com/user-attachments/assets/0eefa3aa-02c6-4964-920d-8658ba26bab2" />

This repo demonstrates the usage of [@cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) that helps realize Gherkin-style tests with the Cypress framework. The tests can be executed on local Cypress, as well as Cypress on the [LambdaTest cloud grid](http://www.lambdatest.com?fp_ref=himanshu15).

In this repo, we have covered the following usecases:

* [Implementing steps and step definitions](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/cypress/e2e/scenarios/1_ecommerce_product_search.feature)
* [Adding parameters to step definitions](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/cypress/e2e/scenarios/2_ecommerce_scroll_wait.feature)
* [Data-Driven Testing with Cucumber in Cypress](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/cypress/e2e/scenarios/3_ecommerce_data_driven_test.feature)
* [Demonstrating Array, Hooks, and Test Tagging with Cucumber in Cypress](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/cypress/e2e/scenarios/4_ecommerce_data_table_test.feature)

At the end of the test execution (on local machine), an HTML report is generated that is powered by [@cucumber/html-formatter](https://github.com/cucumber/html-formatter). You can find more details about the reporting mechanism in the official [Cypress Cucumber Preprocessor Documentation](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/html-report.md).

All the tests are demonstrated on the following websites:

* [LambdaTest E-Commerce Playground](https://ecommerce-playground.lambdatest.io/)
* [TodoMVC React App](https://todomvc.com/examples/react/dist/)

## Pre-requisites for test execution

**Step 1**

Create a virtual environment by triggering the *virtualenv venv* command on the terminal

```bash
virtualenv venv
```
<img width="1418" alt="VirtualEnvironment" src="https://github.com/hjsblogger/web-scraping-with-python/assets/1688653/89beb6af-549f-42ac-a063-e5f715018ef8">

**Step 2**

Navigate the newly created virtual environment by triggering the *source venv/bin/activate* command on the terminal

```bash
source venv/bin/activate
```

**Step 3 (Only for execution on LambdaTest Cloud Grid)**

Procure the LambdaTest User Name and Access Key by navigating to [LambdaTest Account Page](https://accounts.lambdatest.com/security). You might need to create an an account on LambdaTest since it is used for running tests on the cloud Grid.

<img width="1288" alt="LambdaTestAccount" src="https://github.com/hjsblogger/web-scraping-with-python/assets/1688653/9b40c9cb-93a1-4239-9fe5-99f33766a23a">

Set LambdaTest **Username** and **Access Key** in environment variables.

* For **Linux/macOS**:
  
```bash
export LT_USERNAME="LT_USERNAME" 
export LT_ACCESS_KEY="LT_ACCESS_KEY"
```
* For **Windows**:
```bash
set LT_USERNAME="LT_USERNAME" 
set LT_ACCESS_KEY="LT_ACCESS_KEY"
```

Also add the LambdaTest [username](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/lambdatest-config.json#L3) and [access-key](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/lambdatest-config.json#L4) in lambdatest-config.json.

## Dependency/Package Installation

Run the *make install* command on the terminal to install the dependencies mentioned in [package.json](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/package.json)

```bash
make install
```

<img width="1413" height="354" alt="Image" src="https://github.com/user-attachments/assets/d96e1980-e90e-48ab-a79f-955012f4f22d" />

With this, all the dependencies and environment variables are set. It's time for some action !!

## Local Execution

You can run the same test on Cypress (local machine) with Chrome (headed mode) browser by triggering the command ```make cypress-bdd-integration-local``` on the terminal.

<img width="1220" height="562" alt="Image" src="https://github.com/user-attachments/assets/353df9da-63e3-43e0-9327-73884e9c076e" />

<img width="1220" height="426" alt="Image" src="https://github.com/user-attachments/assets/9115d2a9-3682-46bb-a8de-9936b41d01d9" />

<img width="1220" height="395" alt="Image" src="https://github.com/user-attachments/assets/593186eb-f890-48f4-ba56-337112006760" />

As seen below, it opens up the Chrome browser in the headed-mode.

<img width="1436" height="780" alt="Image" src="https://github.com/user-attachments/assets/ed1304ca-b88b-4ef0-9cf8-ae174ab9d8b3" />

<img width="1436" height="780" alt="Image" src="https://github.com/user-attachments/assets/1a08180d-97f4-4e28-b5b0-a9df9b92fb69" />

Shown below is the test execution report that is located in the [cypress/reports](https://github.com/hjsblogger/cypress-master-repository/tree/main/cypress-bdd-integration/cypress/reports) folder:

<img width="1421" height="805" alt="Image" src="https://github.com/user-attachments/assets/f29d0ebd-4c11-49a8-ac30-e531e4b124ff" />

## Cloud Execution

You can run the same test on Cypress (local machine) with Chrome (headed mode) browser by triggering the command ```make cypress-bdd-integration-cloud``` on the terminal.

<img width="1422" height="678" alt="Image" src="https://github.com/user-attachments/assets/18396462-d19e-4476-a2ca-f574bdde8ca2" />

Here is the status of the test execution on Cypress cloud grid on LambdaTest:

Since we have set [parallels to 12](https://github.com/hjsblogger/cypress-master-repository/blob/main/cypress-bdd-integration/lambdatest-config.json#L33) in lambdatest-config.json, all the feature files (coupled with different browser + OS combinations) start executing in parallel.

<img width="1436" height="857" alt="Image" src="https://github.com/user-attachments/assets/15ad62b2-6635-4f91-af6b-82150a289f9f" />

As seen below, all the scenarios in respective feature files were successfully executed!

<img width="1436" height="857" alt="Image" src="https://github.com/user-attachments/assets/c65a82f8-7746-413d-b286-f7649ad7b36a" />

In case you are intrigued to learn more about Cypress, feel free to check out the [Cypress Master Repository](https://github.com/hjsblogger/cypress-master-repository/) where I keep uploading my learnings in the form of a repository!

## Have feedback or need assistance?
Feel free to fork the repo and contribute to make it better! Email to [himanshu[dot]sheth[at]gmail[dot]com](mailto:himanshu.sheth@gmail.com) for any queries or ping me on the following social media sites:

<b>LinkedIn</b>: [@hjsblogger](https://linkedin.com/in/hjsblogger)<br/>
<b>Twitter</b>: [@hjsblogger](https://www.twitter.com/hjsblogger)