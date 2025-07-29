# Define variables
NPM := npm
CYPRESS_DIR := $(shell pwd)
CYPRESS_LOCAL_RUN := npx cypress run
CYPRESS_LOCAL_PARALLEL_RUN := npx cypress-parallel
CYPRESS_LOCAL_PARALLELS := 4
CYPRESS_CLOUD_RUN := lambdatest-cypress
PROJECT_NAME := Cypress with Cucumber BDD using cypress-cucumber-preprocessor

.PHONY: install
install:
	$(NPM) install
	@echo "Set env vars LT_USERNAME & LT_ACCESS_KEY"
    # Procure Username and AccessKey from https://accounts.lambdatest.com/security
	export LT_USERNAME= $(LT_USERNAME)
	export LT_ACCESS_KEY= $(LT_ACCESS_KEY)

.PHONY: test
test:
    export NODE_ENV = test

.PHONY: test
cypress-bdd-integration-local: EXEC_PLATFORM := local

cypress-bdd-integration-local:
	@echo "EXEC_PLATFORM is $(EXEC_PLATFORM)"
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_LOCAL_RUN: $(CYPRESS_LOCAL_RUN)"
	- cd $(CYPRESS_DIR) && $(CYPRESS_LOCAL_RUN) --browser chrome --headed

cypress-bdd-integration-parallel-local:
	@echo "EXEC_PLATFORM is $(EXEC_PLATFORM)"
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_LOCAL_RUN: $(CYPRESS_LOCAL_RUN)"
	- cd $(CYPRESS_DIR) && \
		$(CYPRESS_LOCAL_PARALLEL_RUN) -s cy:run:headed -t \
		$(CYPRESS_LOCAL_PARALLELS) -d 'cypress/e2e/**/*.feature'

cypress-bdd-integration-cloud: EXEC_PLATFORM := cloud

cypress-bdd-integration-cloud:
	@echo "EXEC_PLATFORM is $(EXEC_PLATFORM)"
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_CLOUD_RUN: $(CYPRESS_CLOUD_RUN)"
	- cd $(CYPRESS_DIR) && $(CYPRESS_CLOUD_RUN) run

.PHONY: clean
clean:
    # This helped: https://gist.github.com/hbsdev/a17deea814bc10197285 find . -type f \( -name "*.mp4" -o -name "*.zip" \) -exec rm -rf {} +
	@find . \
		\( -name "*.mp4" -o -name "*.zip" -o -name "node_modules" \) \
		-exec rm -rf {} +
	@echo "Clean Succeeded"

.PHONY: distclean
distclean: clean
	rm -rf venv

.PHONY: help
help:
	@echo ""
	@echo "install : Install project dependencies"
	@echo "clean : Clean up temp files"
	@echo "cypress-bdd-integration-local : Cypress Cucumber BDD demo on local Cypress"
	@echo "cypress-bdd-integration-cloud : Cypress Cucumber BDD demo on Cypress Cloud"