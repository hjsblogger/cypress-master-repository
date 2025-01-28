![Image](https://github.com/user-attachments/assets/af9deabe-8e49-4f9a-9257-8ed9e1482004)

This repo contains implementation that demonstrates the usage of [scrollIntoView](https://docs.cypress.io/api/commands/scrollintoview) command in Cypress. The tests are executed on the [LambdaTest cloud grid](http://www.lambdatest.com?fp_ref=himanshu15), but the same tests can also work with the respective test frameworks installed on the local machine.

Follow the steps along to trigger the test execution:

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

#### Cloud Execution

**Step 3**

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

**Step 4**

For execution on LambdaTest, add the credentials (i.e. LambdaTest username & access-key) to the [following lines](https://github.com/hjsblogger/cypress-learning/blob/main/cypress-scroll-into-view/demo/lambdatest-config.json#L3).

**Step 5**

Install the required dependencies by triggering the command ```make install``` after navigating to the *cypress-scroll-into-view* folder

<img width="1429" alt="Image" src="https://github.com/user-attachments/assets/8f73bed6-0c77-469e-ac23-d54e5136b8e9" />


**Step 6**

Now that the credentials are all set, trigger the command ```make cloud-scroll-into-view-cypress``` on the terminal to run Canvas element tests on LambdaTest.

<img width="1188" alt="Image" src="https://github.com/user-attachments/assets/3b0bd889-9849-43e3-ad3f-fa84d84eb39b" />

Once the execution is triggered, navigate to the [LambdaTest automation dashboard](https://automation.lambdatest.com/) to check the status of the tests.

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/244b7108-3751-44c1-bd90-7e2de7e7f6c6" />


#### Local Execution

**Step 1**

You can run the same test on Cypress (local machine) with Chrome (headed mode) browser by triggering the command ```npx cypress run --browser chrome --headed``` or ```npx cypress run --browser chrome --headed``` on the terminal.

**Step 2**

Shown below are some screenshots from the local execution:

<img width="1429" alt="Image" src="https://github.com/user-attachments/assets/7117f25e-baf3-4f50-b103-45bb26805c6e" /><br/>

<img width="1243" alt="Image" src="https://github.com/user-attachments/assets/945c96b4-c1a9-48ea-a508-117abda12ed4" /><br/>

<img width="1439" alt="Image" src="https://github.com/user-attachments/assets/a4ac2572-6e63-4a32-a57d-08dcc9edea71" /><br/>

<img width="1439" alt="Image" src="https://github.com/user-attachments/assets/29e47d9d-3bbd-4b85-8ebd-c1e5c3cec536" /><br/>

## Need Assistance?

Feel free to fork the repo and contribute to make it better! Email to [himanshu[dot]sheth[at]gmail[dot]com](mailto:himanshu.sheth@gmail.com) for any queries or ping me on the following social media sites:

<b>Twitter</b>: [@hjsblogger](https://www.twitter.com/hjsblogger)
<br/>
<b>LinkedIn</b>: [@hjsblogger](https://linkedin.com/in/hjsblogger)