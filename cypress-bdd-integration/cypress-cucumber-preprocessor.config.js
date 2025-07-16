const isLocal = process.env.EXEC_PLATFORM === "local";

module.exports = {
  html: {
    enabled: isLocal,
    output: "cypress/reports/cucumber-report.html"
  },
  json: {
    enabled: isLocal,
    output: "cypress/reports/cucumber-report.json"
  },
  messages: {
    enabled: false,
    output: "cypress/reports/cucumber-messages.ndjson"
  },
  stepDefinitions: [
    "cypress/e2e/step_defs/*.{js,ts}",
    "cypress/e2e/common_step_defs/*.{js,ts}"
  ]
};
