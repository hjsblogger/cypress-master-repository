# Define variables
CYPRESS_DIR := demo
NPM := npm
CYPRESS_LOCAL_RUN := npx cypress run
CYPRESS_CLOUD_RUN := lambdatest-cypress
PROJECT_NAME := Handling canvas elements with Cypress

.PHONY: install
install:
	cd $(CYPRESS_DIR)
	$(NPM) install
	@echo "Set env vars LT_USERNAME & LT_ACCESS_KEY"
    # Procure Username and AccessKey from https://accounts.lambdatest.com/security
	export LT_USERNAME= "$(LT_USERNAME)"
	export LT_ACCESS_KEY= "$(LT_ACCESS_KEY)"

.PHONY: test
test:
    export NODE_ENV = test

.PHONY: test
local-canvas-automation-cypress:
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_LOCAL_RUN: $(CYPRESS_LOCAL_RUN)"
	- cd $(CYPRESS_DIR) && $(CYPRESS_LOCAL_RUN) --browser chrome --headed

cloud-canvas-automation-cypress:
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_CLOUD_RUN: $(CYPRESS_CLOUD_RUN)"
	- cd $(CYPRESS_DIR) && $(CYPRESS_CLOUD_RUN) run

.PHONY: clean
clean:
    # This helped: https://gist.github.com/hbsdev/a17deea814bc10197285
	find . | grep -E "(__pycache__|\.pyc$$)" | xargs rm -rf
	@echo "Clean Succeeded"

.PHONY: distclean
distclean: clean
	rm -rf venv

.PHONY: help
help:
	@echo ""
	@echo "install : Install project dependencies"
	@echo "clean : Clean up temp files"
	@echo "local-canvas-automation-cypress : Canvas handling with Cypress on local machine"
	@echo "cloud-canvas-automation-cypress : Canvas handling with Cypress on LambdaTest cloud grid"