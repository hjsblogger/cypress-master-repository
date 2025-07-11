const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    viewportHeight: 768,
    viewportWidth: 1024,
    video: true,
    experimentalSessionAndOrigin: false,
    experimentalWebKitSupport: true,
  },
  env: {
    EXEC_PLATFORM: process.env.EXEC_PLATFORM || "local", // Default to LOCAL if not set
  },
  "cypress-cucumber-preprocessor": {
    json: {
      enabled: false,
    },
    stepDefinitions: [
      "cypress/e2e/step_defs/*.{js,ts}",
      "cypress/e2e/common_step_defs/*.{js,ts}"
    ],
  },
});